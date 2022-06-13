import React from 'react';
import '../styles/footer.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
      <section className='footerIcons'>
        <FaLinkedin id='linkedinIcon'/>
        <p>/joaogrs159</p>
        <FaGithub id='githubIcon'/>
        <p>@joaogrs</p>
      </section>
  )
}

export default Footer;