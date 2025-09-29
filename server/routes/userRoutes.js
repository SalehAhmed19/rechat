const express = require("express");
const { signup, login, logout } = require("../controllers/userController");

const router = express.Router();

router.post("/authentication/signup", signup);
router.post("/authentication/login", login);
router.post("/authentication/logout", logout);

module.exports = router;
