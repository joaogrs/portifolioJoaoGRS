import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import AboutMe from "../Components/AboutMe";
import Video from "../Components/Video";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import ImgCarrousel from "../Components/ImgCarrousel";


const mainPage = () => {
  return (
    <section>
      <Header />
      <Home />
      <ImgCarrousel/>
      <Video />
      <AboutMe />
      <Footer/>
    </section>
    )
}

export default mainPage