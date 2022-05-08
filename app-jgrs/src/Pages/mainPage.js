import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import AboutMe from "../Components/AboutMe";
import Video from "../Components/Video";
import Projects from "../Components/Projects";


const mainPage = () => {
  return (
    <section>
      <Header />
      <Home />
      <Projects />
      <Video />
      <AboutMe />
    </section>
    )
}

export default mainPage