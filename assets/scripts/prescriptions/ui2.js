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
  const user = store.user
  const prescriptions = res.prescriptions
  $('#prescription-page').html('')
  $('#status-message-display').html(`<h4>${user.email} has ${prescriptions.length} prescriptions</h4>`)

  const addPrescriptions = function () {
    if ($('#prescription-tb tbody').length === 0) {
      $('#prescription-tb').append('<tbody></tbody>')
    }
    $('#prescription-tb tbody').append('<tr>' +
          '<td>My First Video</td>' +
          '<td>6/11/2015</td>' +
          '<td>www.pluralsight.com</td>' +
          '</tr>')
  }
}
  // prescriptions.forEach(function (prescription) {
  //   const prescriptionHTML = (`
  //     <tbody>
  //     <tr>
  //     <td>${prescription.name}</td>
  //     <td>${prescription.description}</td>
  //     <td>${prescription.dr}</td>
  //     <td>${prescription.date}</td>
  //     <td></td>
  //     <tr>
  //     <tbody>
  //   `)
  //   $('#prescription-tb tbody').append(prescriptionHTML)
  // })

      // $('#prescription-page').append(prescriptionHTML)
      // <p>Date: ${prescription.date}</p>
      // <p>Refill: ${prescription.refill}</p>
      // <td>${prescription._id}</td>
      // <td><input type="Submit" class="btn btn-outline-secondary btn-sm edit" value="Edit"/></td>})
  // const prescriptions = res.prescriptions 
  //   $('#status-message-display').html('<h4>Update Your Prescriptions Here:</h4>') 
  //   // $('#update-index').html('')  
  //   prescriptions.forEach(function (prescription) { 
  //      const prescriptionHTML = (`
  //       <br> 
  //        <p>ID: ${prescription._id}</p> 
  //          <h4>Name: ${prescription.name}</h4> 
  //          <p>Description: ${prescription.description}</p> 
  //             <p>Dr: ${prescription.dr}</p> 
  //             <p>Date: ${prescription.date}</p> 
  //             <p>Refill: ${prescription.refill}</p> 
  //              <br> 
  //               `) 
  //               $('#update-index').append(prescriptionHTML)   }) 




const onHrefCreateSuccess = function (res) {

}
// UPDATE && INDEX Prescriptions
const onUpdateIndexDrugsSuccess = function (res) {
  const user = store.user
  const prescriptions = res.prescriptions
  $('#update-index').html('')


}

const onCreateDrugsSuccess = function (res) {
  console.log('This is res', res)
  const user = store.user
  // const prescriptions = res.prescriptions
  // console.log('lastIndex', prescriptions.slice(-1))
  $('#update-index').hide()
  $('#create-drugs').trigger('reset')
  $('#status-message-display').html(`<h4>${user.email} successfully created a new prescription:</h4>`)

  // const prescriptions = res.prescriptions
  // // $('#status-message-display').html(`<h4>${user.email} has ${prescriptions.length} prescriptions</h4>`)
  // // $('#prescription-page').html('')
  //
  // prescriptions.forEach(function (prescription) {
  //   const prescriptionHTML = (`
  //     <tbody>
  //     <tr>
  //     <td>${prescription.name}</td>
  //     <td>${prescription.description}</td>
  //     <td>${prescription.dr}</td>
  //     <td>${prescription.date}</td>
  //     <td></td>
  //     <tr>
  //     <tbody>
  //   `)
  //   $('#prescription-tb tbody').append(prescriptionHTML)
  // })
}
// })
//
//
//   function productsAdd() {
//     $("#productTable tbody").append("<tr>" +
//         "<td>My First Video</td>" +
//         "<td>6/11/2015</td>" +
//         "<td>www.pluralsight.com</td>" +
//         "</tr>");
// }
// }

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
