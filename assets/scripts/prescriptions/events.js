'use strict'

const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields.js')

console.log(ui)

// VIEW ALL PRESCRIPTIONS THAT WERE CREATED PREVIOUSLY
const indexDrugs = function (event) {
  // console.log(event)
  event.preventDefault()

  $('#index-page').show()
  $('#create-page').hide()
  $('#update-page').hide()

  // const result = api.indexDrugs()
  // console.log(result)
  // result
  api.indexDrugs()
    .then(ui.onIndexDrugsSuccess)
    // .then((data) => console.log(data))
    .catch(ui.onIndexDrugsError)
}
// href ADD/REMOVE PAGE LOADING
const hrefCreate = function (event) {
  event.preventDefault()
  $('#status-message-display').html('<h4>Add/Remove Prescriptions Here:</h4>')
  $('#index-page').show()
  $('#create-page').show()
  $('#add-drugs-button-div').show()
  $('#remove-drugs-button-div').show()

  // $('#add').hide()
  // $('#update').show()
  $('#add').hide()
  $('#remove').hide()
  $('#update-page').hide()
  // const user = store.user
  // $('#status-message-display').html('<h4>Add Your Prescriptions Here:</h4>')
  // $('#prescription-page').html('')
}
// On click ADD/REMOVE Button - href TO OPEN ADD/REMOVE card on the PAGE
const hrefAdd = function (event) {
  event.preventDefault()
  $('#add').show()
  $('#remove').hide()
  $('#edit').hide()
  $('.edit').hide()
}
const hrefRemove = function (event) {
  event.preventDefault()
  $('#remove').show()
  $('#add').hide()
  $('#edit').hide()
  $('.edit').hide()
}
// CREATE NEW PRESCRIPTIONS - on submit add prescription formData
const createDrugs = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createDrugs(formData)
    .then(ui.onCreateDrugsSuccess)
    .catch(ui.onCreateDrugsError)
}
// DELETE PRESCRIPTION WITH ID
const deleteDrugs = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.deleteDrugs(formData)
    .then(ui.onDeleteDrugsSuccess)
    .catch(ui.onDeleteDrugsError)
}

// UPDATE PAGE(Shows the list of prescriptons and the buttons for "edit")
const hrefUpdate = function (event) {
  event.preventDefault()

  $('#index-page').hide()
  $('#update-page').show()

  $('#create-page').hide()
  $('#add-drugs-button-div').hide()
  $('#remove-drugs-button-div').hide()

  $('#edit').hide()
  $('.edit').show()
  // const user = store.user
  // $('#status-message-display').html('<h4>Update Your Prescriptions Here:</h4>')
  api.hrefUpdate()
    .then(ui.onHrefUpdateSuccess)
    .catch(ui.onHrefUpdateError)
}

// UPDATE Prescription loading PAGE
const hrefEdit = function (event) {
  event.preventDefault()
}

module.exports = {
  indexDrugs,
  createDrugs,
  deleteDrugs,
  hrefAdd,
  hrefRemove,
  hrefCreate,
  hrefEdit,
  hrefUpdate
}
