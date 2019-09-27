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
  $('#signOutChangepwd').show()
  $('#signUpIn').hide()
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
}

const onChangePasswordFailure = function () {
  failureMessage('Change password failed')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
  $('#gameboard-section').hide()
  $('#signOutChangepwd').hide()
  $('#signUpIn').show()
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
}

// let IIDD

const onCreateGameSuccess = function (responseData) {
  successMessage('Create Game successfully!')
  console.log('responseData is ' + responseData)
  store.game = responseData.game
  // IIDD = store.game.id
  console.log('store is', store.game)
}

const onCreateGameFailure = function () {
  failureMessage('Create Game failed!')
}

const onUpdateSuccess = function (response) {
  console.log('update response', response)
  store.game = response.game
  console.log('Update successfully!')
  successMessage('Update successfully!')
}

const onUpdateFailure = function () {
  console.log('Update Game failed!')
  failureMessage('Update Game failed!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateSuccess,
  onUpdateFailure
  // IIDD
}
