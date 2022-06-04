const express = require("express");
const {displayAllProducts, createProduct, findProduct, deleteProduct, updateProduct} = require("../controllers/productController");
const { isAuth } = require("../middleware/auth");
const router = express.Router();

router.route("/").get(isAuth,displayAllProducts);
router.route("/new").get(createProduct);
router.route("/:id").get(isAuth,findProduct);
router.route("/delete/:id").get(deleteProduct);
router.route("/update/:id").get( updateProduct);



module.exports = router;