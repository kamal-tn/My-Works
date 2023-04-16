import React, { useState } from "react";
import axios from "axios";
import Header from "../header/header.component";

import "./addVideo.component.css";

const AddVideo = (props) => {
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");

  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //api
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("hashtags", hashtags.split(","));
    formData.append("video", video[0]);
    setIsUploading(true);
    axios
      .post("http://localhost:8000/video/add", formData, {
        "Content-Type": "multipart/form-data",
      })
      .then(function (res) {
        window.location.pathname = "/videos";
      })
      .finally(function () {
        setIsUploading(false);
      });
  };

  return (
    <>
      <Header user={props.user} />
      <section className="add-video">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Video*</label>
            <input
              type="file"
              onChange={(e) => setVideo(e.target.files)}
              name="video"
            />
          </div>
          <div className="form-group">
            <label>Caption*</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              name="caption"
            />
          </div>
          <div className="form-group">
            <label>Hashtags (comma seperated)</label>
            <input
              type="text"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              name="hashtags"
            />
          </div>
          <div>
            <button
              type="submit"
              className="primary-btn"
              disabled={isUploading}
            >
              {isUploading ? "Uploading" : "Upload"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddVideo;
