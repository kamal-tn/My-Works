const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUser,
  logout,
} = require("../controllers/signControllers");

const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
router.post("/register", upload.single("pic"), register);
router.post("/login", login);
router.get("/get-user", getUser);
router.post("/logout", logout);

module.exports = router;
