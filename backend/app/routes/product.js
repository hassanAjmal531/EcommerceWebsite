const express = require("express");
const {displayAllProducts, createProduct, findProduct, deleteProduct, updateProduct} = require("../controllers/productController");
const router = express.Router();

router.route("/").get(displayAllProducts);
router.route("/new").get(createProduct);
router.route("/:id").get(findProduct);
router.route("/delete/:id").get(deleteProduct);
router.route("/update/:id").get( updateProduct);



module.exports = router;