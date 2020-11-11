const config = require('../config')
const store = require('../store')

// SHOW ALL THE PRESCRIPTIONS USER CREATED
const indexDrugs = formData => {
  const user = store.user
  const headers = {}
  if (user) {
    headers.Authorization = 'Bearer ' + user.token
  }
  return $.ajax({
    url: config.apiUrl + '/prescriptions',
    method: 'GET',
    data: {},
    headers
  })
}

// CREATE A NEW PRESCRIPTION
const createDrugs = formData => {
  const user = store.user
  const headers = {}
  if (user) {
    headers.Authorization = 'Bearer ' + user.token
  }
  return $.ajax({
    url: config.apiUrl + '/prescriptions',
    method: 'POST',
    data: formData,
    headers
  })
} // else { console.log('User not logged in.') }

const deleteDrugs = formData => {
  // const user = store.user
  return $.ajax({
    url: config.apiUrl + '/prescriptions/' + formData.prescription._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}
const hrefUpdate = formData => {
  const user = store.user
  const headers = {}
  if (user) {
    headers.Authorization = 'Bearer ' + user.token
  }
  return $.ajax({
    url: config.apiUrl + '/prescriptions',
    method: 'GET',
    data: {},
    headers
  })
}

const updateDrugs = formData => {
  // const user = store.user
  return $.ajax({
    url: config.apiUrl + '/prescriptions/' + formData.prescription._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  indexDrugs,
  createDrugs,
  deleteDrugs,
  updateDrugs,
  hrefUpdate
}
