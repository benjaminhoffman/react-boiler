import React from 'react'
import styles from './Home.css'
import saintsPng from './saints_png.png'
import saintsJpg from './saints_jpg.jpeg'
import sunsetPng from './sunset_png.png'
import sunsetJpg from './sunset_jpg.jpeg'

const saintsPng2 = require('./saints_png.png')
const saintsJpg2 = require('./saints_jpg.jpeg')
const sunsetPng2 = require('./sunset_png.png')
const sunsetJpg2 = require('./sunset_jpg.jpeg')

console.log(saintsPng2)
console.log(saintsJpg2)
console.log(sunsetPng2)
console.log(sunsetJpg2)

const Home = () => {
  return (
    <section role="region">
      <table>
        <tr>
          <td>File Name</td>
          <td>Original Size (kb)</td>
          <td>Crunched Size (kb)</td>
        </tr>
        <tr>
          <td>saints_jpg.jpeg</td>
          <td>706</td>
          <td />
        </tr>
        <tr>
          <td>saints_png.png</td>
          <td>2,900</td>
          <td>496</td>
        </tr>
        <tr>
          <td>sunset_jpg.jpeg</td>
          <td>187</td>
          <td />
        </tr>
        <tr>
          <td>sunset_png.png</td>
          <td>2,900</td>
          <td>161</td>
        </tr>
      </table>
      <h2>PNG Image (`img` tag):</h2>
      <img src={saintsPng} className={styles.img} />
      <br />
      <br />
      <br />
      <h2>JPG Image (`img` tag):</h2>
      <img src={saintsJpg} className={styles.img} />
      <br />
      <br />
      <br />
      <h2>PNG Image (`background-image` css):</h2>
      <h2 className={styles.saintsPng} />
      <br />
      <br />
      <br />
      <h2>JPG Image (`background-image` css):</h2>
      <h2 className={styles.saintsJpg} />
      <br />
      <br />
      <br />
      <h2>PNG Image (`img` tag):</h2>
      <img src={sunsetPng} className={styles.img} />
      <br />
      <br />
      <br />
      <h2>JPG Image (`img` tag):</h2>
      <img src={sunsetJpg} className={styles.img} />
      <br />
      <br />
      <br />
      <h2>PNG Image (`background-image` css):</h2>
      <h2 className={styles.sunsetPng} />
      <br />
      <br />
      <br />
      <h2>JPG Image (`background-image` css):</h2>
      <h2 className={styles.sunsetJpg} />
      <br />
      <br />
      <br />
    </section>
  )
}

Home.displayName = 'Home'

export default Home
