import React from "react";
import axios from "axios";
import "./header.component.css";

const Header = (props) => {
  const handleLogout = () => {
    axios.post("http://localhost:8000/logout").then(function (res) {
      window.location.pathname = "/";
    });
  };

  return (
    <header>
      <a href="/" className="logo-link">
        <div className="logo">MyTube</div>
      </a>
      {props.user ? (
        <div className="nav">
          <div className="links">
            <a href="/videos">Videos</a>
          </div>
          <div className="profile">
            <img src={`data:image;base64,${props.user.pic}`} alt="avatar" />
            {props.user.name}
          </div>
          <button type="button" className="ml-2" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <a href="/login">Login</a> / <a href="register">Register</a>
        </div>
      )}
    </header>
  );
};

export default Header;
