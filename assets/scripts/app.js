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

  // auth events
  $('#sign-out').hide()
  $('#change-password').hide()

  $('#sign-up').on('submit', authEvents.signUp)
  $('#sign-in').on('submit', authEvents.signIn)
  $('#sign-out').on('submit', authEvents.signOut)
  $('#change-password').on('submit', authEvents.changePassword)
  //
  // Prescription events
  $('#prescription-page').hide()
  $('#status-message-display').hide()
  // My INDEX Prescription page
  $('#index-drugs').on('click', drugEvents.indexDrugs)
  // It goes to Add/Remov prescription page
  $('#add-button').on('click', drugEvents.hrefCreate)
  // Add new button on Add/Remov prescription page
  $('#add-new-button').on('click', drugEvents.hrefAdd)
  // Remove button on Add/Remove prescription page
  $('#remove-button').on('click', drugEvents.hrefRemove)
  // ACTUAL CREATE Prescription event listener
  $('#create-drugs').on('submit', drugEvents.createDrugs)
  // DELETE Prescription event listener
  $('#remove-drugs').on('submit', drugEvents.deleteDrugs)
  // It goes to update prescription page
  $('#update-button').on('click', drugEvents.hrefUpdate)
  // It opens update prescription card form
  $('#edit-button').on('click', drugEvents.hrefEdit)
  // UPDATE Prescription
  $('#update-drugs').on('submit', drugEvents.updateDrugs)
})
