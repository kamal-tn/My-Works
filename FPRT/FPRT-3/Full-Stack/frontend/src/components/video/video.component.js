import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/header.component";
import axios from "axios";
import "./video.component.css";

const Video = (props) => {
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/video/${id}`).then((res) => {
      setVideo(res.data);
    });
  }, []);

  const handleLike = () => {
    axios.post(`http://localhost:8000/video/like/${id}`).then((res) => {
      setVideo({ ...video, likes: res.data.likes });
    });
  };

  return (
    <>
      <Header user={props.user} />
      {video && (
        <section className="video-cont">
          <video controls autoPlay>
            <source src={video.url} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          <div className="video-details">
            <button type="button" className="like-btn" onClick={handleLike}>
              Like
            </button>
            <p className="caption">{video.caption}</p>
            <div>
              {video.hashtags.map((h) => {
                return <span className="tag">#{h}</span>;
              })}
            </div>
            <div className="card-footer">
              <div className="date">
                {new Date(video.createdAt).toLocaleDateString("IN")}{" "}
              </div>
              <div className="profile">
                <img
                  src={`data:image;base64,${video.createdBy.profilePic}`}
                  alt="avatar"
                />
                {video.createdBy.name}
              </div>
              <div className="likes">{video.likes} Likes</div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Video;
