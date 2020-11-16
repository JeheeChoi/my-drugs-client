// const store = require('../store')
const store = require('../store')

const onSignUpSuccess = function (res) {
  const user = res.user
  $('#message-display').html(`
    <h5>New user
    ${user.email} successfully signed up!</h5>
  `)
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onSignInSuccess = function (res) {
  const user = res.user
  store.user = res.user
  $('#message-display').html(`
    <h5>Hello
    ${user.email}! </h5>
  `)
  $('#sign-in').trigger('reset')
  $('#sign-out').show()
  $('#change-password').show()
  $('#change-password').trigger('reset')

  $('#status-message-display').html('')
  $('#status-message-display').show()

  $('#menu').show()
  // $('#prescription-page').hide()
  // $('#index-page').hide()
  // $('#create-page').hide()
  // $('#update-page').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onSignOutSuccess = function () {
  $('#message-display').html(`
    <h5>User ${store.user.email} successfully signed out! </h5>
  `)
  $('#prescription-page').hide()
  // $('#index-page').hide()
  // $('#create-page').hide()
  // $('#update-page').hide()
  $('#status-message-display').hide()
  $('#sign-up').show()
  $('#sign-up').trigger('reset')
  $('#sign-in').show()
  $('#sign-in').trigger('reset')

  $('#sign-out').hide()
  $('#change-password').hide()
  $('#menu').hide()
  $('#prescription-tb tbody').html('')
  $('#create-prescription-tb tbody').html('')
  $('#update-prescription-tb tbody').html('')
}

const onChangePwSuccess = function () {
  $('#message-display').html('<h5>Password successfully changed! </h5>')
  $('#change-password').trigger('reset')
}

const onSignUpError = function (error) {
  $('#message-display').text('Error Signing Up Code: ' + error.statusText)
  // console.log('error is:', error)
  $('#sign-up').trigger('reset')
}

const onSignInError = function (error) {
  $('#message-display').text('Error Signing In Code: ' + error.statusText)
  // console.log('error is:', error)
  $('#sign-in').trigger('reset')
}

const onSignOutError = function (error) {
  $('#message-display').text('Error Signing Out Code: ' + error.statusText)
  // console.log('error is:', error)
}

const onChangePwError = function (error) {
  $('#message-display').text('Error Changing Password Code: ' + error.statusText)
  // console.log('error is:', error)
  $('#change-password').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePwSuccess,
  onSignUpError,
  onSignInError,
  onSignOutError,
  onChangePwError
}
