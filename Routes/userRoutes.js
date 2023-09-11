const express = require("express");

const {registerUser,userLogin, allUsers} = require("../Controller/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(userLogin);
router.route("/").get(allUsers);

module.exports = router;