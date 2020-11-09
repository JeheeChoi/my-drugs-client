'use strict'

const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields.js')
console.log(ui)

const createDrugs = function (event) {
  event.preventDefault()
  api.createDrugs()
    .then(ui.onCreateDrugsSuccess)
    // .then(ui.onIndexDrugsSuccess)
    .catch(ui.onCreateDrugsError)
}

const indexDrugs = function (event) {
  // console.log(event)
  event.preventDefault()
  // const result = api.indexDrugs()
  // console.log(result)
  // result
  api.indexDrugs()
    .then(ui.onIndexDrugsSuccess)
    // S MOTHAFACKA
    // .then((data) => console.log(data))
    .catch(ui.onIndexDrugsError)
}

module.exports = {
  createDrugs,
  indexDrugs
}
