import React from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import '../styles/projects.css'

const Projects = () => {
  return(
  <section className='projectSection' id='projects'>
    <p className='firstP'>Featured Projects --</p>
    <h1>Stuff I've Worked On📂</h1>
    <div className='containerCards'>
      <div className='projectCard' id='card1'>
        <div className='iconCard'>
          <AiFillGithub className='icon1' />
          <MdOpenInNew />
        </div>
        <p className='titleProject'><strong>Jogo Trivia</strong></p>
        <p>API React Redux</p>
      </div>
      <div className='projectCard' id='card2'>
        <div className='iconCard'>
          <AiFillGithub className='icon1' />
          <MdOpenInNew />
        </div>
        <p className='titleProject'><strong>Jogo Trivia</strong></p>
        <p>API React Redux</p>
      </div>
      <div className='projectCard' id='card3'>
        <div className='iconCard'>
          <AiFillGithub className='icon1' />
          <MdOpenInNew />
        </div>
        <p className='titleProject'><strong>Jogo Trivia</strong></p>
        <p>API React Redux</p>
      </div>
      <div className='projectCard' id='card4'>
        <div className='iconCard'>
          <AiFillGithub className='icon1' />
          <MdOpenInNew />
        </div>
        <p className='titleProject'><strong>Jogo Trivia</strong></p>
        <p>API React Redux</p>
      </div>
      <div className='projectCard' id='card5'>
        <div className='iconCard'>
          <AiFillGithub className='icon1'/>
          <MdOpenInNew />
        </div>
        <p className='titleProject'><strong>Jogo Trivia</strong></p>
        <p>API React Redux</p>
      </div>
    </div>
  </section>
  )
}

export default Projects;