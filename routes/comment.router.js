const express = require("express");
const commentController = require("../controllers/comment.controller");

const router = express.Router();

router.get("/videos/:videoId/comments", commentController.getCommentsByVideoId);
router.post("/videos/:videoId/comments", commentController.addComment);

module.exports = router;
