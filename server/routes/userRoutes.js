const express = require("express");
const {
  signup,
  login,
  logout,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

router.post("/authentication/signup", signup);
router.post("/authentication/login", login);
router.post("/authentication/logout", logout);
router.get("/get-users", getUsers);

module.exports = router;
