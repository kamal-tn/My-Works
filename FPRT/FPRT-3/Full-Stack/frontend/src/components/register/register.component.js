import React, { useState } from "react";
import Header from "../header/header.component";
import "./register.component.css";

import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("pwd", pwd);
    formData.append("name", name);
    formData.append("pic", pic[0]);
    axios
      .post("http://localhost:8000/register", formData, {
        "Content-Type": "multipart/form-data",
      })
      .then(function (res) {
        axios
          .post("http://localhost:8000/login", { email, pwd })
          .then(function (res) {
            window.location.pathname = "/videos";
          });
      });
  };

  return (
    <>
      <Header />
      <section className="form-cont">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password*</label>
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              name="password"
              min="8"
              required
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="user_name"
            />
          </div>
          <div className="form-group">
            <label>Profile picture</label>
            <input
              type="file"
              onChange={(e) => setPic(e.target.files)}
              name="profile_pic"
            />
          </div>
          <div>
            <button type="submit" className="primary-btn">
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
