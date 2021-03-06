'use strict'

const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields.js')

// console.log(ui)

// VIEW ALL PRESCRIPTIONS THAT WERE CREATED PREVIOUSLY
const indexDrugs = function (event) {
  // console.log(event)
  event.preventDefault()
  $('#prescription-page').show()

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
  $('#status-message-display').html('<h4>Add/Remove Prescriptions Here</h4>')

  $('#prescription-page').show()
  $('#create-page').show()
  $('#add-drugs-button-div').show()

  // $('#add').hide()
  // $('#update').show()
  $('#index-page').hide()
  $('#add').hide()
  $('#remove').hide()
  $('#update-page').hide()
  // const user = store.user
  // $('#status-message-display').html('<h4>Add Your Prescriptions Here:</h4>')
  // $('#prescription-page').html('')
  api.hrefCreate()
    .then(ui.onHrefCreateSuccess)
    .catch(ui.onHrefCreateError)
}
// On click ADD/REMOVE Button - href TO OPEN ADD/REMOVE card on the PAGE
const hrefAdd = function (event) {
  event.preventDefault()
  $('#add').show()
  $('#remove').hide()
  $('#update').hide()
}
const hrefRemove = function (event) {
  event.preventDefault()
  $('#remove').show()
  $('#add').hide()
  $('#update').hide()
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
  $('#status-message-display').html('<h4>Update Prescriptions Here</h4>')

  $('#prescription-page').show()
  $('#index-page').hide()
  $('#update-page').show()

  $('#edit-drugs-button-div').show()
  $('#create-page').hide()
  $('#add-drugs-button-div').hide()

  $('#update').hide()
  // const user = store.user

  api.hrefUpdate()
    .then(ui.onHrefUpdateSuccess)
    .catch(ui.onHrefUpdateError)
}

// UPDATE Prescription loading PAGE
const hrefEdit = function (event) {
  event.preventDefault()
  $('#update').show()
}

const updateDrugs = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateDrugs(formData)
    .then(ui.onUpdateDrugsSuccess)
    .catch(ui.onUpdateDrugsError)
}

module.exports = {
  indexDrugs,
  createDrugs,
  deleteDrugs,
  hrefAdd,
  hrefRemove,
  hrefCreate,
  hrefEdit,
  hrefUpdate,
  updateDrugs
}
