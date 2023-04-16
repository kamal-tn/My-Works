const Video = require("../models/video");
const User = require("../models/user");
const controller = {};

const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dovfewnw0",
  api_key: "951221858142571",
  api_secret: "ZRDdAmJrbrqWdav2KV_6xcZ3CDM",
});

controller.addVideo = async (req, response) => {
  try {
    const { caption, hashtags } = req.body;
    const email = req.user.email;
    const userDoc = await User.findOne({ email });

    cloudinary.uploader
      .upload(path.join(__dirname, "..", "/uploads/", req.file.filename), {
        resource_type: "video",
      })
      .then((res) => {
        const videoDoc = {
          caption,
          hashtags: Array.isArray(hashtags) ? hashtags : hashtags.split(","),
          createdBy: userDoc._id,
          url: res.secure_url,
        };
        new Video(videoDoc)
          .save()
          .then((doc) => {
            User.updateOne(
              { email },
              { videos: [...userDoc.videos, doc._id] }
            ).then((res) => {
              response.status(201).send({ message: "Upload success" });
            });
          })
          .catch((err) => {
            console.log(err);
            response.status(500).send({ message: err.message });
          });
      })
      .catch((err) => {
        response.status(500).send({ message: err.message });
      });
  } catch (err) {
    response.status(500).send({ message: err.message });
  }
};

controller.getVideos = async (req, res) => {
  try {
    let videos = await Video.find({}).populate("createdBy");
    videos = videos.map((v) => {
      let video = { ...v.toObject() };
      let user = { ...video.createdBy };
      delete user.password;
      Buffer.from(user.profilePic).toString("base64");
      return video;
    });
    res.status(200).send({ data: videos });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

controller.getVideo = async (req, res) => {
  try {
    const id = req.params.id;
    let video = await Video.findById(id).populate("createdBy");
    video = video.toObject();
    Buffer.from(video.createdBy.profilePic).toString("base64");
    res.status(200).send(video);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

controller.likeVideo = async (req, res) => {
  try {
    const id = req.params.id;
    let video = await Video.findOneAndUpdate(
      { _id: id },
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.status(200).send({ likes: video.likes });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = controller;
