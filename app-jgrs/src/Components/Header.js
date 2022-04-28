import React from "react";
import { FaBars } from 'react-icons/fa';
import '../styles/header.css'

const Header = () => {
  return (
    <section className="header">
      <h2 className="headerText">
          JOAOgrS
      </h2>
      <div className="headerIcon">
        <FaBars />
      </div>
    </section>
    )
}

export default Header