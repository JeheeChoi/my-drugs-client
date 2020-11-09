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
    data: {},
    headers
  })
} // else { console.log('User not logged in.') }

module.exports = {
  indexDrugs,
  createDrugs
}
