// import React from 'react'
// import ReactDOM from 'react-dom'
// console.log('asdfasdfasd')
// ReactDOM.render(<h1>Hello, World!</h1>, document.getElementById('root'))


import _ from 'lodash'
import css from './styles.css'
import Gh from './gh.png'
import Csv from './csv.csv'
import Print from './print.js'
import moment from 'moment'



function component () {
  const element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack', `${moment().format()}`], ' ')
  element.classList.add('hello')
  const image = new Image()
  image.src = './' + Gh
  // element.appendChild(image)

  // console.log(Csv)

  const btn = document.createElement('button')
  btn.innerHTML = 'Click me'
  btn.onclick = Print
  element.appendChild(btn)
  return element
}

document.body.appendChild(component())
