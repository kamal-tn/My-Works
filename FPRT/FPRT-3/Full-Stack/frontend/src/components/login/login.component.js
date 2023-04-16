import React, { useState } from "react";
import Header from "../header/header.component";
import "./login.component.css";

import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      pwd,
    };
    axios.post("http://localhost:8000/login", payload).then(function (res) {
      window.location.pathname = "/videos";
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
          <div>
            <button type="submit" className="primary-btn">
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
