const express = require('express');
const ProductsController = require('../controllers/ProductsController');


const router = express.Router();



router.post("/CreateProduct",ProductsController.CreateProduct)
router.get("/ReadProduct",ProductsController.ReadProduct)
router.post("/UpdateProduct/:id",ProductsController.UpdateProduct)
router.post("/DeleteProduct/:id",ProductsController.DeleteProduct)




module.exports =router;
