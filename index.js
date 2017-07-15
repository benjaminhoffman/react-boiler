import Library from './library'

if (module.hot) {
  module.hot.accept('./library', function () {
    console.log('Something')
    Library.log()
  })
}
