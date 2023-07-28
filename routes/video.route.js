// routes/videoRoutes.js
const express = require("express");
const videoController = require("../controllers/video.controller");

const router = express.Router();

router.get("/videos", videoController.getAllVideos);
router.get("/videos/:id", videoController.getVideoById);
router.post("/videos", videoController.addVideo);

module.exports = router;
