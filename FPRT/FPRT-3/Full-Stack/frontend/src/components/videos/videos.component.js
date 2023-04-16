import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header.component";
import "./videos.component.css";

const Videos = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/videos").then((res) => {
      console.log(res.data.data);
      setVideos(res.data.data);
    });
  }, []);

  return (
    <>
      <Header user={props.user} />
      <section className="main">
        <div className="main-nav">
          <a href="/video/add">Upload a Video</a>
        </div>
        <div className="videos">
          {videos.map((video) => {
            return (
              <a href={`/video/${video._id}`}>
                <div className="card">
                  <div>
                    <img
                      src={video.url.slice(0, -4) + ".jpg"}
                      alt={video.caption}
                      className="thumbnail"
                    />
                  </div>
                  <div>
                    <p className="caption">{video.caption}</p>
                    <div className="hashtags">
                      {video.hashtags.map((h) => {
                        return <span>#{h} </span>;
                      })}
                    </div>
                    <div className="card-footer">
                      <div>
                        {new Date(video.createdAt).toLocaleDateString("IN")}{" "}
                        <span> - </span>
                        {video.likes} Likes
                      </div>
                      <div className="profile">
                        <img
                          src={`data:image;base64,${video.createdBy.profilePic}`}
                          alt="avatar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Videos;
