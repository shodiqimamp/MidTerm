const Video = require("../models/video");
const mongoose = require("mongoose");

// Mengambil semua video dari database
exports.getAllVideos = async (req, res) => {
  try {
    const data = await Video.find();
    res.status(200).json({ message: "Success Get All Data", data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addVideo = async (req, res) => {
  const { title, youtubeUrl, thumbnailUrl, productId } = req.body;

  try {
    const newVideo = new Video({ title, youtubeUrl, thumbnailUrl, productId });
    await newVideo.save();
    res.json({
      message: "Video Added Successfully",
      data: {
        videoId: newVideo._id,
        title: newVideo.title,
        youtubeUrl: newVideo.youtubeUrl,
        thumbnailUrl: newVideo.thumbnailUrl,
        productId: [newVideo.productId],
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const videoId = req.params.id;
    const pipeline = [
      {
        $match: {
          _id: new mongoose.Types.ObjectId(videoId), // Match the video by its _id
        },
      },
      {
        $lookup: {
          from: "products", // Collection to join (products)
          localField: "productId", // Field from the 'videos' collection to match
          foreignField: "_id", // Field from the 'products' collection to match
          as: "products", // The name of the field to add the joined data (an array of matching products)
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "comments",
          foreignField: "_id",
          as: "comments",
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          youtubeUrl: 1,
          thumbnailUrl: 1,
          products: { $ifNull: ["$products", []] },
          comments: { $ifNull: ["$comments", []] },
        },
      },
    ];

    const result = await Video.aggregate(pipeline);
    res.status(200).json({ message: "Success Get Data", data: result });
  } catch (err) {
    console.error("Error aggregating videos and products", err);
    res.status(500).json({ error: "Failed to aggregate videos and products" });
  }
};
