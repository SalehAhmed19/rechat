const express = require("express");
const { signup } = require("../controllers/userController");

const router = express.Router();

router.post("/authentication/signup", signup);

module.exports = router;
