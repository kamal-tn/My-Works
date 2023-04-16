const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoSchema = new Schema({
  caption: {
    type: String,
    required: true,
  },
  hashtags: {
    type: [String],
    required: false,
  },
  url: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
    required: true,
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
  },
});

videoSchema.pre("save", function (next) {
  let doc = this;
  doc.createdAt = new Date();
  next();
});

const Video = mongoose.model("videos", videoSchema);

module.exports = Video;
