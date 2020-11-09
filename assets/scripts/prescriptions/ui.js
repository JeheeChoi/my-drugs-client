const store = require('./../store')

const onCreateDrugsSuccess = function (res) {
  const user = store.user
  $('#message-display').html(`
    <h4>${user.email} successfully create a new prescription</h4>
    `)
}

// GET
// VIEW ALL THE PRESCRIPTIONS
const onIndexDrugsSuccess = function (res) {
  console.log(res)

  // const user = store.user
  const prescriptions = res.prescriptions

  $('#prescription-page').html('')

  prescriptions.forEach(function (prescription) {
    const prescriptionHTML = (`
      <h4>Name: ${prescription.name}</h4>
      <p>Description: ${prescription.description}</p>
      <p>Dr: ${prescription.dr}</p>
      <p>Date: ${prescription.date}</p>
      <p>Refill: ${prescription.refill}</p>
      <p>ID: ${prescription._id}</p>
      <br>
    `)
    $('#prescription-page').append(prescriptionHTML)
    // $('#prescription-page').html(`
    //   <h4>${user.email} has ${prescriptions.length} prescriptions</h4>
    //   `)
  })
}

const onCreateDrugsError = function (error) {
  $('#message-display').text('Error Creating Prescription Code: ' + error.statusText)
  console.log('error is:', error)
}

const onIndexDrugsError = function (error) {
  $('#message-display').text('Error Getting Prescription Code: ' + error.statusText)
  // console.log('error is:', error)
}

module.exports = {
  onCreateDrugsSuccess,
  onIndexDrugsSuccess,
  onCreateDrugsError,
  onIndexDrugsError
}
