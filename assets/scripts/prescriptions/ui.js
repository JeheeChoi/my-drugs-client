const store = require('./../store')

// GET
// VIEW ALL THE PRESCRIPTIONS
const onIndexDrugsSuccess = function (res) {
  const prescriptions = res.prescriptions

  $('#status-message-display').html(`<h4>${prescriptions.length} prescriptions found:</h4>`)

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

// CREATE PRESCRIPTION PAGE - JUST THE PAGE TO SHOW THE LIST & THE OPTION TO ADD
const onCreateDrugsSuccess = function (res) {
  $('#update').hide()
  $('#index-page').hide()
  $('#create').show()
  $('#create-drugs').trigger('reset')

  // const prescriptions = res.prescriptions
  // console.log('lastIndex', prescriptions.slice(-1))
  const user = store.user
  $('#status-message-display').html(`<h4>${user.email} successfully created a new prescription:</h4>`)

  const prescription = res.prescription

  $('#create-prescription-tb').append(`
    <tr class="card-header" id="headingOne">
    <td></td>
    <td>${prescription.name}</td>
    <td>${prescription.description}</td>
    <td>${prescription.dr}</td>
    <td>${prescription._id}</td>
    <tr>
  `)
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

// UPDATE && INDEX Prescriptions
const onHrefUpdateSuccess = function (res) {
  // const user = store.user
  const prescriptions = res.prescriptions
  $('#status-message-display').html('<h4>Update Your Prescriptions Here:</h4>')

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
  // <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
  //     <div class="card card-body" id="update">
  //       <form id="edit-drugs">
  //       <label for="drug-name">Medication Name:<input required type="text" class="form-control" name="prescription[name]" placeholder ="ex) Advil(Ibuprofen,200mg)" /></label>
  //       <label for="drug-description">Description:<input required type="text" class="form-control" name="prescription[description]" placeholder ="ex) Painkiller" /></label>
  //       <label for="dr-name">Dr's Name:<input required type="text" class="form-control" name="prescription[dr]" placeholder ="ex) McBride,MD" /></label>
  //       <label for="drug-id">Prescription ID#:<input required type="text" class="form-control" name="prescription[_id]" placeholder ="ex) 434529876c2e1" /></label>
  //       <input type="Submit" class="btn btn-outline-secondary" value="Confirm" />
  //       </form>
  //     </div>
  //   </div>
  // </div>
}

const onUpdateDrugsSuccess = function (res) {
  $('#update-drugs').trigger('reset')

  $('#status-message-display').html('<h4>Successfully updated prescription</h4>')
}

const onIndexDrugsError = function (error) {
  $('#message-display').text('Error Getting Prescription Code: ' + error.statusText)
  // console.log('error is:', error)
}

const onCreateDrugsError = function (error) {
  $('#message-display').text('Error Creating Prescription Code: ' + error.statusText)
  // console.log('error is:', error)
}

const onHrefCreateError = function (error) {
  $('#message-display').text('Error Loading Create Page Code: ' + error.statusText)
  // console.log('error is:', error)
}
const onDeleteDrugsError = function (error) {
  $('#message-display').text('Error Deleting Prescription Code: ' + error.statusText)
  // console.log('error is:', error)
}

const onHrefUpdateError = function (error) {
  $('#message-display').text('Error Loading Update Page Code: ' + error.statusText)
  // console.log('error is:', error)
}

const onUpdateDrugsError = function (error) {
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
  onUpdateDrugsSuccess,
  onHrefUpdateSuccess,
  onHrefCreateSuccess,
  onDeleteDrugsError,
  onCreateDrugsError,
  onHrefCreateError,
  onIndexDrugsError,
  onHrefUpdateError,
  onUpdateDrugsError,
  onError
}
