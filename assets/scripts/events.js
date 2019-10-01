'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('./store')
// const app = require('./app')

const onUpdate = function (Index, Value, Over) {
  // console.log('Index in events.index ', Index)
  api.updateGame(Index, Value, Over)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  for (let i = 0; i < 9; i++) {
    $('#block' + (i + 1)).text('')
  }

  const form = event.target
  const formData = getFormFields(form)
  // console.log('My formData is ' + formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// -----------------------------------------------------
const onIndex = function () {
  // console.log('Into onIndex')
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}
// -----------------------------------------------------

const onCreateGame = function (event) {
  // event.preventDefault()

  // console.log('Into the events')
  // console.log('Store Game ' + store.game)
  api.newGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onIndex,
  onCreateGame,
  onUpdate
}
