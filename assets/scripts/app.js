'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const drugEvents = require('./prescriptions/events')
// const drugEvents = require('./prescriptions/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.signUp)
  $('#sign-in').on('submit', authEvents.signIn)
  $('#sign-out').on('submit', authEvents.signOut)
  $('#change-password').on('submit', authEvents.changePassword)
  //
  // Prescription events
  $('#prescription-page').hide()
  $('#add').hide()
  // $('#update').hide()
  // $('#edit').hide()
  $('#index-drugs').on('click', drugEvents.indexDrugs)
  $('#add-button').on('click', drugEvents.hrefCreate)
  $('#add-drugs-button').on('click', drugEvents.hrefAdd)
  $('#create-drugs').on('submit', drugEvents.createDrugs)
  $('#update-button').on('click', drugEvents.hrefUpdate)
  $('.btn-sm').on('click', drugEvents.hrefEdit)
})
