const store = require('./../store')

// const onHrefIndexSuccess = function (res) {
//   const user = store.user
//   const prescriptions = res.prescriptions
//   $('#index-drugs').show()
//   $('#create').hide()
//   $('#status-message-display').html(`<h4>${user.email} has ${prescriptions.length} prescriptions</h4>`)
//   $('#prescription-page').html('')
// }
// GET
// VIEW ALL THE PRESCRIPTIONS
const onIndexDrugsSuccess = function (res) {
  console.log(res)
  $('#create').hide()
  $('#update-index').hide()
  const user = store.user
  const prescriptions = res.prescriptions
  $('#status-message-display').html(`<h4>${user.email} has ${prescriptions.length} prescriptions</h4>`)

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
    //       '</tr>')
    const prescriptionHTML = (`
      <tr>
      <td>${prescription._id}</td>
      <td>${prescription.name}</td>
      <td>${prescription.description}</td>
      <td>${prescription.date}</td>
      <td></td>
      <tr>
    `)
    $('#prescription-tb tbody').append(prescriptionHTML)
  })
}

const onHrefCreateSuccess = function (res) {

}
// UPDATE && INDEX Prescriptions
const onUpdateIndexDrugsSuccess = function (res) {
  // const user = store.user
  const prescriptions = res.prescriptions
  $('#status-message-display').html('<h4>Update Your Prescriptions Here:</h4>')
  // $('#update-index').html('')

  prescriptions.forEach(function (prescription) {
    const prescriptionHTML = (`
      <br>
      <p>ID: ${prescription._id}</p>
      <h4>Name: ${prescription.name}</h4>
      <p>Description: ${prescription.description}</p>
      <p>Dr: ${prescription.dr}</p>
      <p>Date: ${prescription.date}</p>
      <p>Refill: ${prescription.refill}</p>
      <br>
    `)
    $('#update-index').append(prescriptionHTML)
  })
}

const onCreateDrugsSuccess = function (res) {
  console.log('This is res', res)
  const user = store.user
  // const prescriptions = res.prescriptions
  // console.log('lastIndex', prescriptions.slice(-1))
  $('#update-index').hide()
  $('#create-drugs').trigger('reset')
  $('#status-message-display').html(`<h4>${user.email} successfully created a new prescription:</h4>`)
}

const onIndexDrugsError = function (error) {
  $('#message-display').text('Error Getting Prescription Code: ' + error.statusText)
  console.log('error is:', error)
}

const onCreateDrugsError = function (error) {
  $('#message-display').text('Error Creating Prescription Code: ' + error.statusText)
  console.log('error is:', error)
}

const onHrefCreateError = function (error) {
  $('#message-display').text('Error Creating Prescription Code: ' + error.statusText)
  console.log('error is:', error)
}

module.exports = {
  onIndexDrugsSuccess,
  onCreateDrugsSuccess,
  onHrefCreateSuccess,
  onUpdateIndexDrugsSuccess,
  onCreateDrugsError,
  onHrefCreateError,
  onIndexDrugsError
}
