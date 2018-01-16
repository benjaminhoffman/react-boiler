import React from 'react'
import gh from '../assets/gh.png'

const Home = () => {
  return (
    <section role="region">
      <div>This is the homepage!</div>
      <img src={gh} width="700px" height="500px" />
    </section>
  )
}

Home.displayName = 'Home'

export default Home
