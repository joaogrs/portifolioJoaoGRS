import React from "react";
import '../styles/header.css'

const Header = () => {
  return (
    <section className="header">
      <h2 className="headerText">
          JOAOgrS
      </h2>
      <ul className="options">
        <a href="#home">
          <li>home</li>
        </a>
        <a href="#projects">
          <li>projetos</li>
        </a>
        <li>apresentação</li>
        <li>visão</li>
        <li>artigos</li>
      </ul>
      <a href="https://www.linkedin.com/in/joaogrs159/">
        <div className="border">
        <p className="textBtn"><b>contrate-me</b></p>
        </div>
      </a>
    </section>
    )
}

export default Header