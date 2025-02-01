# MongoDB Database Application

## Objectives

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes.
- Use MongoDB indexing to make efficient queries.
- Create MongoDB validation rules.
- Use MongoDB validation to ensure data consistency.

## Features

- For Products end points are as follows

| URL                                        |  CRUD  | Operation |
| ------------------------------------------ | :----: | --------: |
| http://localhost:3000/products             |  Get   |      Read |
| http://localhost:3000/products/            |  Post  |    Create |
| http://localhost:3000/products/:id         |  Put   |    Update |
| http://localhost:3000/products/:id         | Delete |    Delete |
| http://localhost:3000/products/product/:id |  Get   |      Read |
| http://localhost:3000/products/search      |  Get   |      Read |
| http://localhost:3000/users                |  Get   |      Read |
| http://localhost:3000/users/               |  Post  |    Create |
| http://localhost:3000/users/:id            |  Put   |    Update |
| http://localhost:3000/users/:id            | Delete |    Delete |
| http://localhost:3000/order/               |  Get   |      Read |
| http://localhost:3000/order/               |  Post  |    Create |
| http://localhost:3000/order/:id            |  Put   |    Update |
| http://localhost:3000/order/:id            | Delete |    Delete |

- Get
  addProduct,
  updateProduct,
  deleteProduct,
  searchProductByName,
  getIndexes,
  getProductById,
