import React from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
  return(
  <section>
    <p>Featured Projects --</p>
    <h1>Stuff I've Worked On📂</h1>
    <div className='projectCard'>
      <div><AiFillGithub /></div>
      <div><MdOpenInNew /></div>
      <p>Jogo Trivia</p>
      <p>API React Redux</p>
    </div>
    <div className='projectCard'>
      <div><AiFillGithub /></div>
      <div><MdOpenInNew /></div>
      <p>Jogo Trivia</p>
      <p>API React Redux</p>
    </div>
    <div className='projectCard'>
      <div><AiFillGithub /></div>
      <div><MdOpenInNew /></div>
      <p>Jogo Trivia</p>
      <p>API React Redux</p>
    </div>
    <div className='projectCard'>
      <div><AiFillGithub /></div>
      <div><MdOpenInNew /></div>
      <p>Jogo Trivia</p>
      <p>API React Redux</p>
    </div>
    <div className='projectCard'>
      <div><AiFillGithub /></div>
      <div><MdOpenInNew /></div>
      <p>Jogo Trivia</p>
      <p>API React Redux</p>
    </div>
  </section>
  )
}

export default Projects;