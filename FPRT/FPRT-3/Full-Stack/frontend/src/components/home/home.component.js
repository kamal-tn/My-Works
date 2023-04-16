import React from "react";
import Header from "../header/header.component";
import "./home.component.css";

const Home = (props) => {
  return (
    <>
      <Header user={props.user} />
      <section className="home-content">
        <div>Browse videos</div>
        <div>Upload videos, to be viewd by millions</div>
      </section>
    </>
  );
};

export default Home;
