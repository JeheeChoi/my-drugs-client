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
  $('#prescription-page').show()
  $('#prescription-tb').show()
  $('#add').hide()
  $('#add-drugs-button-div').hide()
  $('#update').hide()
  $('#edit').hide()
  $('.edit').hide()

  // const result = api.indexDrugs()
  // console.log(result)
  // result
  api.indexDrugs()
    .then(ui.onIndexDrugsSuccess)
    // S MOTHAFACKA
    // .then((data) => console.log(data))
    .catch(ui.onIndexDrugsError)
}
const hrefAdd = function (event) {
  event.preventDefault()
  $('#add').show()
  $('#edit').hide()
  $('.btn-sm').hide()
}

const hrefCreate = function (event) {
  event.preventDefault()
  $('#add-drugs-button-div').show()
  $('#status-message-display').html('<h4>Add New Prescriptions Here:</h4>')
  // $('#add').hide()
  $('#update').show()

  $('#edit').hide()
  $('.btn-sm').hide()
  // const user = store.user
  // $('#status-message-display').html('<h4>Add Your Prescriptions Here:</h4>')
  // $('#prescription-page').html('')
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

const hrefEdit = function (event) {
  event.preventDefault()
  // $('#add').hide()
  // $('#update').show()
  $('#edit').show()
  $('.btn-sm').show()
  $('#add-drugs-button-div').hide()
}

const hrefUpdate = function (event) {
  event.preventDefault()
  $('#add').hide()
  $('#update').show()
  $('#edit').hide()
  $('.btn-sm').show()
  $('#add-drugs-button-div').hide()
  // const user = store.user
  $('#status-message-display').html('<h4>Update Your Prescriptions Here:</h4>')

  api.indexDrugs()
    .then(ui.onUpdateIndexDrugsSuccess)
    // S MOTHAFACKA
    // .then((data) => console.log(data))
    .catch(ui.onIndexDrugsError)
}

module.exports = {
  indexDrugs,
  createDrugs,
  hrefAdd,
  hrefCreate,
  hrefEdit,
  hrefUpdate
}
