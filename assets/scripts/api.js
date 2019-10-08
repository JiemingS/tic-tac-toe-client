'use strict'

const config = require('./config')
// const ui = require('./ui')
// require `store` so we have access to our `token`
// so the API knows who we are
const store = require('./store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameHistory = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (INDEX, VALUE, OVER) {
  const dataObj = {
    game: {
      cell: {
        index: INDEX,
        value: VALUE
      },
      over: false
    }
  }
  const dataObjOver = {
    game: {
      over: true
    }
  }
  // console.log('dataObj is ', dataObj)
  //
  // console.log(store.game.id)
  // return $.ajax({
  //   method: 'PATCH',
  //   url: `https://tic-tac-toe-wdi.herokuapp.com/games/${store.game.id}`,
  //   headers: {
  //     Authorization: 'Token token=' + store.user.token
  //   },
  //   data: {
  //     'game': {
  //       'cells': {
  //         'index': 1,
  //         'value': 'x'
  //       },
  //       'over': true
  //     }
  //   }
  // })
  if (OVER === '') {
    // console.log('OVER is empty string')
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data: dataObj
    })
  } else if (OVER === true && INDEX === '' & VALUE === '') {
    // console.log('entered')
    return $.ajax({
      url: config.apiUrl + `/games/${store.game.id}`,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data: dataObjOver
    })
  }
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  index,
  newGame,
  updateGame,
  gameHistory
}
