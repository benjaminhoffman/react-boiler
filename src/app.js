import _ from 'lodash'
import css from './styles.css'
import Gh from './gh.png'
import Csv from './csv.csv'
import Print from './print.js'

console.log(module.hot)
if (module.hot) {

  // module.hot.accept()
}


function component () {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')
  const image = new Image()
  image.src = `./${Gh}`
  // element.appendChild(image)

  // console.log(Csv)

  const btn = document.createElement('button')
  btn.innerHTML = 'Click me'
  btn.onclick = Print
  element.appendChild(btn)
  return element
}

document.body.appendChild(component())
