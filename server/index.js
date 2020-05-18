const express = require('express')
const app = express()
const SERVER_PORT = 5000
const ctrl = require('./getProducts')
app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))

//endpoints consist of a method, path and handler
app.get('/api/products', ctrl.getProducts)
app.get('/api/products/:id', ctrl.getProductById)