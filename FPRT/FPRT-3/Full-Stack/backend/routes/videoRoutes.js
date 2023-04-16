const express = require("express");
const router = express.Router();
const {
  addVideo,
  getVideos,
  getVideo,
  likeVideo,
} = require("../controllers/videoControllers");

const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
router.post("/video/add", upload.single("video"), addVideo);
router.get("/videos", getVideos);
router.get("/video/:id", getVideo);
router.post("/video/like/:id", likeVideo);

module.exports = router;
