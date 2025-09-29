const express = require("express");
const { signup, login } = require("../controllers/userController");

const router = express.Router();

router.post("/authentication/signup", signup);
router.post("/authentication/login", login);

module.exports = router;
