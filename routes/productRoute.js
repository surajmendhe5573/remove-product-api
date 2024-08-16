const express= require('express');
const Product= require('../models/Product');
const router= express.Router();

// Create Product
router.post('/products', async (req, res) => {
    const { name, price, description } = req.body;
  
    try {
      const newProduct = new Product({
        name,
        price,
        description,
        removed: false
      });
  
      await newProduct.save();
  
      res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });
  
  // Remove Product (Soft Delete)
  router.post('/products/:id/remove', async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      product.removed = true;
      await product.save();
  
      res.status(200).json({ message: 'Product removed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });
  
  // Restore Product
  router.post('/products/:id/restore', async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      product.removed = false;
      await product.save();
  
      res.status(200).json({ message: 'Product restored successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });

  // Edit Product
  router.post('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
  
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      Object.assign(product, updates);
      await product.save();
  
      res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });
  
  
  // Permanently Delete Product
router.delete('/products/:id/delete', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Product.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted permanently' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
  
  
  module.exports= router;