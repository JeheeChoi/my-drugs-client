'use strict'

const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields.js')

console.log(ui)

// const hrefIndex = function (event) {
//   event.preventDefault()
//   api.indexDrugs()
//     .then(ui.onHrefIndexSuccess)
//     .catch(ui.onHrefIndexError)
// }

// VIEW ALL PRESCRIPTIONS
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

const hrefCreate = function (event) {
  event.preventDefault()
  $('#create').show()
  $('#update-index').hide()
  // const user = store.user
  $('#status-message-display').html('<h4>Create Your Prescriptions Here:</h4>')
  $('#prescription-page').html('')
}

// CREATE NEW PRESCRIPTIONS
const createDrugs = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createDrugs(formData)
    .then(ui.onCreateDrugsSuccess)
    .catch(ui.onCreateDrugsError)
}

const hrefUpdate = function (event) {
  event.preventDefault()
  $('#create').hide()
  $('#update-index').show()
  // const user = store.user
  api.indexDrugs()
    .then(ui.onUpdateIndexDrugsSuccess)
    // S MOTHAFACKA
    // .then((data) => console.log(data))
    .catch(ui.onIndexDrugsError)
}

module.exports = {
  indexDrugs,
  createDrugs,
  hrefCreate,
  hrefUpdate
}
