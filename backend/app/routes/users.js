var express = require('express');
var router = express.Router();

const {registerUser, showAllUsers, login, logout, getUserDetails} = require("../controllers/usercontroller");
const { isAuth } = require('../middleware/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.route("/Register").get(registerUser);
router.route("/users").get(showAllUsers);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile").get(isAuth, getUserDetails);


module.exports = router;
