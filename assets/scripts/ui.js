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
  setTimeout(function () { $('#message').text('') }, 1000)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  setTimeout(function () { $('#message').text('') }, 1000)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  // setTimeout(function(){ alert("Hello"); }, 3000);
  setTimeout(function () { $('#message').text('') }, 1000)
  // console.log('responseData is', responseData)
  // save the `user` we got from the API inside of `store`
  // so we can use it later, from any file
  store.user = responseData.user
  // console.log('store is', store)
  $('#gameboard-section').show()
  $('#signOutChangepwd').show()
  $('#signUpIn').hide()
  $('#show-game-history').show()
  // $('#all-games-id').show()
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
  setTimeout(function () { $('#message').text('') }, 1000)
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  setTimeout(function () { $('#message').text('') }, 1000)
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('Change password failed')
  setTimeout(function () { $('#message').text('') }, 1000)
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('Sign out successfully!')
  setTimeout(function () { $('#message').text('') }, 1000)
  $('#main-message').text('Tic-Tac-Toe')
  $('#gameboard-section').hide()
  $('#signOutChangepwd').hide()
  $('#signUpIn').show()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#toShowSignUpButton').show()
  $('#show-game-history').hide()
  $('#all-games-id').hide()
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
  setTimeout(function () { $('#message').text('') }, 1000)
}

const onIndexSuccess = function (responseData) {
  // console.log('indexResponseData is ', responseData)
  const length = responseData.games.length
  // console.log('length is ', length)
  $('#game-history').text('Games: ' + length)
}

const onIndexFailure = function (responseData) {

}

const onShowGameHistoryIndexSuccess = function (responseData) {
  const lengthOfData = responseData.games.length
  // const idArray = []
  // console.log(lengthOfData)
  // console.log(responseData)
  // console.log(responseData.games)
  // idArray.push(responseData.games[lengthOfData - i].id)
  // console.log(idArray)
  // console.log(idArray.toString())
  $('#all-games-id').text(responseData.games[lengthOfData - 1].id)
  // console.log(responseData.games[lengthOfData - 1].id)
  // console.log(responseData.games[lengthOfData - 1])
}

const onShowGameHistoryIndexFailure = function () {

}

const onCreateGameSuccess = function (responseData) {
  successMessage('Create Game successfully!')
  setTimeout(function () { $('#message').text('') }, 1000)
  // console.log('responseData is ' + responseData)
  store.game = responseData.game
  // IIDD = store.game.id
  // console.log('store is', store.game)
}

const onCreateGameFailure = function () {
  failureMessage('Create Game failed!')
  setTimeout(function () { $('#message').text('') }, 1000)
}

const onUpdateSuccess = function (response) {
  // console.log('update response', response)
  store.game = response.game
  // console.log('Update successfully!')
  successMessage('Update successfully!')
  setTimeout(function () { $('#message').text('') }, 1000)
}

const onUpdateFailure = function () {
  // console.log('Update Game failed!')
  failureMessage('Update Game failed!')
  setTimeout(function () { $('#message').text('') }, 1000)
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
  onUpdateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowGameHistoryIndexSuccess,
  onShowGameHistoryIndexFailure
  // IIDD
}
