import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import AboutMe from "../Components/AboutMe";
import Video from "../Components/Video";


const mainPage = () => {
  return (
    <section>
      <Header />
      <Home />
      <AboutMe />
      <Video />
    </section>
    )
}

export default mainPage