import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import AboutMe from "../Components/AboutMe";


const mainPage = () => {
  return (
    <section>
      <Header/>
      <Home />
      <AboutMe/>
    </section>
    )
}

export default mainPage