import React from 'react';
import '../styles/video.css'

const Video = () => {
  return (
    <section className='videoSection'>
    <iframe className='video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src="https://youtube.com/embed/3cEDwzHksNM?autoplay=0">
    </iframe>
    </section>
  )
}

export default Video;