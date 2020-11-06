// const store = require('../store')
const store = require('../store')

const onSignUpSuccess = function (res) {
  const user = res.user
  $('#message-display').html(`
    <h4>New user
    ${user.email} successfully signed up!</h4>
  `)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (res) {
  const user = res.user
  store.user = res.user
  $('#message-display').html(`
    <h4>Hello
    ${user.email}! </h4>
  `)
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message-display').html(`
    <h4>User ${store.user.email} successfully signed out! </h4>
  `)
}

const onChangePwSuccess = function () {
  $('#message-display').html('<h4>Password successfully changed! </h4>')
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
