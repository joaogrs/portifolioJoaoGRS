import React from "react";
import '../styles/header.css'

const Header = () => {
  return (
    <section className="header">
      <h2 className="headerText">
          JOAOgrS
      </h2>
      <ul className="options">
        <li>home</li>
        <li>projetos</li>
        <li>apresentação</li>
        <li>visão</li>
        <li>artigos</li>
      </ul>
      <div className="border">
      <p className="textBtn"><b>contrate-me</b></p>
      </div>
    </section>
    )
}

export default Header