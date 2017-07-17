
import _ from 'lodash'
import moment from 'moment'

export default function print () {
  const test = [1,2,3,4,5]

  _.forEach(test, function (v) {
    console.log(moment().format(), 'Printing!!!')
  })
}
