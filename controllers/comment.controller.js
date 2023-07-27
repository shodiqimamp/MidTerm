// controllers/commentController.js
const Comment = require("../models/comment");
const Video = require("../models/video");

// Menyimpan komentar ke database
exports.addComment = async (req, res) => {
  const { name, comment, videoId } = req.body;

  try {
    const newComment = new Comment({ name, comment, videoId });
    const savedComment = await newComment.save();

    await Video.findByIdAndUpdate(videoId, {
      $push: { comments: savedComment._id },
    });
    res
      .status(200)
      .json({ message: "Comment Added Succesfully", data: savedComment });
  } catch (err) {
    console.error("Error posting comment:", err);
    res.status(500).json({ error: "Failed to post comment" });
  }
};

// Mengambil komentar berdasarkan videoId dari database
exports.getCommentsByVideoId = async (req, res) => {
  const { videoId } = req.params;
  try {
    const comments = await Comment.find({ videoId }).populate("videoId");
    res.status(200).json({ message: "Success Get All Data", data: comments });
  } catch (err) {
    console.error("Error getting comments:", err);
    res.status(500).json({ error: "Failed to get comments" });
  }
};
