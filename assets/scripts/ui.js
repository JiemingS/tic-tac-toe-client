'use strict'

// require store object, so we can save the user
// and their token
const store = require('./store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  console.log('responseData is', responseData)
  // save the `user` we got from the API inside of `store`
  // so we can use it later, from any file
  store.user = responseData.user
  console.log('store is', store)
  $('#gameboard-section').show()
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
