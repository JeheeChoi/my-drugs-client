// const store = require('./../store')
const api = require('./api')

// GET
// VIEW ALL THE PRESCRIPTIONS
const onIndexDrugsSuccess = function (res) {
  const prescriptions = res.prescriptions

  $('#status-message-display').html(`<h4>You Have ${prescriptions.length} prescriptions</h4>`)

  // RESET THE PRESCRIPTION INDEX PAGE SO IT DOESN'T ADD UP THE LIST OF DATA
  $('#prescription-tb tbody').html('')

  prescriptions.forEach(function (prescription) {
    if ($('#prescription-tb tbody').length === 0) {
      $('#prescription-tb').append('<tbody></tbody>')
    }
    // $('#prescription-tb tbody').append('<tr>' +
    //       '<td>My First Video</td>' +
    //       '<td>6/11/2015</td>' +
    //       '<td>www.pluralsight.com</td>' +
    //       '</tr>')\
    const prescriptionHTML = (`
      <tr class="card-header" id="headingOne">
      <td></td>
      <td>${prescription.name}</td>
      <td>${prescription.description}</td>
      <td>${prescription.dr}</td>
      <tr>
    `)
    $('#prescription-tb tbody').append(prescriptionHTML)
  })
}

// Create prescription landing page
const onHrefCreateSuccess = function (res) {
  const prescriptions = res.prescriptions
  // RESET THE PRESCRIPTION INDEX PAGE SO IT DOESN'T ADD UP THE LIST OF DATA

  $('#create-prescription-tb tbody').html('')

  prescriptions.forEach(function (prescription) {
    if ($('#create-prescription-tb tbody').length === 0) {
      $('#create-prescription-tb').append('<tbody></tbody>')
    }
    // $('#prescription-tb tbody').append('<tr>' +
    //       '<td>My First Video</td>' +
    //       '<td>6/11/2015</td>' +
    //       '<td>www.pluralsight.com</td>' +
    //       '</tr>')\

    const prescriptionHTML = (`
      <tr class="card-header" id="headingOne">
      <td></td>
      <td>${prescription.name}</td>
      <td>${prescription.description}</td>
      <td>${prescription.dr}</td>
      <td>${prescription._id}</td>
      <tr>
    `)
    $('#create-prescription-tb tbody').append(prescriptionHTML)
  })
}

// CREATE PRESCRIPTION PAGE - JUST THE PAGE TO SHOW THE LIST & THE OPTION TO ADD
const onCreateDrugsSuccess = function (res) {
  $('#update').hide()
  $('#index-page').hide()
  $('#create').show()
  $('#create-drugs').trigger('reset')

  // const prescriptions = res.prescriptions
  // console.log('lastIndex', prescriptions.slice(-1))
  $('#status-message-display').html('<h4>Successfully added a new prescription:</h4>')

  api.hrefCreate()
    .then(onHrefCreateSuccess)
    .catch(onHrefCreateError)
}

const onDeleteDrugsSuccess = function (res) {
  // $('#index-page').show()
  // $('#add-drugs-button-div').hide()
  $('#remove-drugs').trigger('reset')
  $('#status-message-display').html('<h4>successfully deleted prescription</h4>')

  // const prescription = res.prescription
  //
  // $('#create-prescription-tb').pop(`
  //   <tr class="card-header" id="headingOne">
  //   <td></td>
  //   <td>${prescription.name}</td>
  //   <td>${prescription.description}</td>
  //   <td>${prescription.dr}</td>
  //   <td>${prescription._id}</td>
  //   <tr>
  // `)
  api.hrefCreate()
    .then(onHrefCreateSuccess)
    .catch(onHrefCreateError)
}

// UPDATE && INDEX Prescriptions
const onHrefUpdateSuccess = function (res) {
  $('#status-message-display').html('<h4>Update Your Prescriptions Here</h4>')

  const prescriptions = res.prescriptions

  $('#update-prescription-tb tbody').html('')

  prescriptions.forEach(function (prescription) {
    if ($('#update-prescription-tb tbody').length === 0) {
      $('#update-prescription-tb').append('<tbody></tbody>')
    }
    const prescriptionHTML = (`
      <tr>
      <td></td>
      <td>${prescription.name}</td>
      <td>${prescription.description}</td>
      <td>${prescription.dr}</td>
      <td>${prescription._id}</td>
      <tr>
      `)
    $('#update-prescription-tb tbody').append(prescriptionHTML)
  })
}

const onUpdateDrugsSuccess = function (res) {
  $('#update-drugs').trigger('reset')
  $('#status-message-display').html('<h4>Successfully updated prescription</h4>')

  api.hrefUpdate()
    .then(onHrefUpdateSuccess)
    .catch(onHrefUpdateError)
}

const onIndexDrugsError = function (error) {
  $('#message-display').text('Error Getting Prescription Code: ' + error.statusText)
  // console.log('error is:', error)
}

const onCreateDrugsError = function (error) {
  $('#create-drugs').trigger('reset')

  $('#message-display').text('Error Creating Prescription Code: ' + error.statusText)
  // console.log('error is:', error)
}

const onHrefCreateError = function (error) {
  $('#message-display').text('Error Loading Create Page Code: ' + error.statusText)
  // console.log('error is:', error)
}
const onDeleteDrugsError = function (error) {
  $('#remove-drugs').trigger('reset')

  $('#message-display').text('Error Deleting Prescription Code: ' + error.statusText)
  // console.log('error is:', error)
}

const onHrefUpdateError = function (error) {
  $('#message-display').text('Error Loading Update Page Code: ' + error.statusText)
  // console.log('error is:', error)
}

const onUpdateDrugsError = function (error) {
  $('#update-drugs').trigger('reset')

  $('#message-display').text('Error Updating Prescription Code: ' + error.statusText)
  // console.log('error is:', error)
}
const onError = function (error) {
  $('#message-display').text('Error Code: ' + error.statusText)
  // console.log('error is:', error)
}
module.exports = {
  onIndexDrugsSuccess,
  onCreateDrugsSuccess,
  onDeleteDrugsSuccess,
  onHrefUpdateSuccess,
  onUpdateDrugsSuccess,
  onHrefCreateSuccess,
  onDeleteDrugsError,
  onCreateDrugsError,
  onHrefCreateError,
  onIndexDrugsError,
  onHrefUpdateError,
  onUpdateDrugsError,
  onError
}
