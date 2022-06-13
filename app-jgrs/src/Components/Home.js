import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <section className='homeContainer' id='home'>
      <p>HI THERE, I'M 👋</p>
      <h1>joaogrs.</h1>
      <p className='profession'>FULL STACK DEVELOPER  👨‍💻</p>
      <p className='description'>
          I'm a Brazilian software developer passionate about what I do, and I believe that technology can change the country.
      </p>
      <button>About Me</button>
    </section>
    )
}

export default Home