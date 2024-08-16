# Product Management API

This is a Node.js and Express.js based API for managing products. The API allows users to create, restore, edit, and permanently delete products.

## Features

- Create new products
- Remove products
- Restore removed products (Put Back)
- Edit product details
- Permanently delete products.






## API Endpoints

### Create a Product

- **URL**: `http://localhost:3000/api/products`
- **Method**: `POST`
- **Body**:
    ```json
   {
        "name": "Product Name",
        "price": 100,
        "description": "Product Description"
  }

    ```
- **Response**: 
```json
    {
  "message": "Product created successfully",
  "product": {
    "_id": "product_id",
    "name": "Product Name",
    "price": 100,
    "description": "Product Description",
    "removed": false
  }
}
```


### Remove Product (Soft Delete)

- **URL**: `http://localhost:3000/api/products/:id/remove`
- **Method**: `POST`
- **Response**: 
   ```
   {
         "message": "Product removed successfully"
   }

   ```

### Restore Product (Put Back)

- **URL**: `http://localhost:3000/api/products/:id/restore`
- **Method**: `PUT`
- **Response**: 
   ```
   {
         "message": "Product restored successfully"
   }
```

```
### Edit Product

- **URL**: `http://localhost:3000/api/products/:id/edit`
- **Method**: `POST`
- **Body**:
    ```json
   {
     "name": "Updated Product Name",
     "price": 150,
     "description": "Updated Product Description"
    }

  ```
  ### Permanently Delete Product

- **URL**: `http://localhost:3000/api/products/:id/delete`
- **Method**: `DELETE`
- **Response**: 
   ```
   {
         "message": "Product restored successfully"
   }
```
```


## Installation

### Prerequisites

- Node.js and npm installed.
- MongoDB running locally or on a cloud service like MongoDB Atlas.



2. Install the dependencies:

    ```bash
    npm install
    ```



## Set Up Environment Variables

Create a `.env` file in the root directory of your project and add your environment variables. Below is an example `.env` file:

**Example `.env` file:**
```env

PORT=3000
MONGO_URI=mongodb://localhost:27017/defaultdb
