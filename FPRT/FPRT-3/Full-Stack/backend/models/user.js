const mongoose = require("mongoose");
const { Schema } = mongoose;

const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: false,
    maxLength: 25,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  profilePic: {
    type: Buffer,
    contentType: String,
    required: false,
  },
  videos: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "videos",
    default: [],
  },
});

userSchema.pre("save", function (next) {
  let doc = this;
  let pwd = doc.password;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(pwd, salt, function (err, hash) {
      // Store hash in your password DB.
      doc.password = hash;
      next();
    });
  });
});

const User = mongoose.model("users", userSchema);

module.exports = User;
