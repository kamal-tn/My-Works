import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./components/home/home.component";
import Register from "./components/register/register.component";
import Login from "./components/login/login.component";
import Videos from "./components/videos/videos.component";
import AddVideo from "./components/addVideo/addVideo.component";
import Video from "./components/video/video.component";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    if (user) return;
    axios.get("http://localhost:8000/get-user").then(function (res) {
      setUser(res.data);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/videos" element={<Videos user={user} />} />
        <Route path="/video/add" element={<AddVideo user={user} />} />
        <Route path="/video/:id" element={<Video user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
