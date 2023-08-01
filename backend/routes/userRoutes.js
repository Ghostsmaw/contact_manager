const express = require("express");
const {
  regsiterUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register", regsiterUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;
