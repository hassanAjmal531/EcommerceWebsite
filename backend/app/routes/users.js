var express = require('express');
var router = express.Router();

const {registerUser, showAllUsers} = require("../controllers/usercontroller");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.route("/Register").get(registerUser);
router.route("/users").get(showAllUsers);


module.exports = router;
