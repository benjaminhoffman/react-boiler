
import _ from 'lodash'
import css from './styles.css'
import Gh from './gh.png'

function component () {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')
  const image = new Image()
  image.src = `./dist/${Gh}`
  element.appendChild(image)
  return element
}

document.body.appendChild(component())
