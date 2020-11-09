const store = require('./../store')

const onHrefIndexSuccess = function (res) {
  const user = store.user
  const prescriptions = res.prescriptions
  $('#index-drugs').show()
  $('#create').hide()
  $('#status-message-display').html(`<h4>${user.email} has ${prescriptions.length} prescriptions</h4>`)
  $('#prescription-page').html('')
}
// GET
// VIEW ALL THE PRESCRIPTIONS
const onIndexDrugsSuccess = function (res) {
  console.log(res)
  $('#create').hide()

  const user = store.user
  const prescriptions = res.prescriptions
  $('#status-message-display').html(`<h4>${user.email} has ${prescriptions.length} prescriptions</h4>`)
  // $('#prescription-page').html('')

  prescriptions.forEach(function (prescription) {
    const prescriptionHTML = (`
      <br>
      <h4>Name: ${prescription.name}</h4>
      <p>Description: ${prescription.description}</p>
      <p>Dr: ${prescription.dr}</p>
      <p>Date: ${prescription.date}</p>
      <p>Refill: ${prescription.refill}</p>
      <p>ID: ${prescription._id}</p>
      <br>
    `)
    $('#prescription-page').append(prescriptionHTML)
  })
}

const onHrefCreateSuccess = function (res) {

}

const onCreateDrugsSuccess = function (res) {
  console.log(res)

  const user = store.user
  // const prescriptions = res.prescriptions

  $('#create-drugs').trigger('reset')
  $('#status-message-display').html(`<h4>${user.email} successfully created a new prescription:</h4>`)
  //
  // prescriptions.lastIndexOf(function (prescription) {
  //   const prescriptionHTML = (`
  //     <h4>Name: ${prescription.name}</h4>
  //     <p>Description: ${prescription.description}</p>
  //     <p>Dr: ${prescription.dr}</p>
  //     <p>Date: ${prescription.date}</p>
  //     <p>Refill: ${prescription.refill}</p>
  //     <p>ID: ${prescription._id}</p>
  //     <br>
  //     `)
  //   $('#prescription-page').append(prescriptionHTML)
  // })
}

const onIndexDrugsError = function (error) {
  $('#message-display').text('Error Getting Prescription Code: ' + error.statusText)
  // console.log('error is:', error)
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
  onHrefIndexSuccess,
  onIndexDrugsSuccess,
  onCreateDrugsSuccess,
  onHrefCreateSuccess,
  onCreateDrugsError,
  onHrefCreateError,
  onIndexDrugsError
}
