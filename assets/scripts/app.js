'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
const store = require('./store')
// const api = require('./api')
// use require without a reference to ensure a file is bundled
// require('./example')

// events.onUpdate()

$(() => {
  let changePasswordFormShow = false
  // --------------------------------------------------------------------------
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#toShowChangePasswordForm').click(function () {
    if (changePasswordFormShow === false) {
      $('#change-password').show()
      changePasswordFormShow = true
    } else {
      $('#change-password').hide()
      changePasswordFormShow = false
    }
    // $('#sign-out').hide()
  })
  // $('#new-game').on('click', events.onCreateGame)
  $('#new-game').click(function () {
    cleanForNewGame()
    step = 0
    events.onCreateGame()
    addClickFunction()
  })
  // --------------------------------------------------------------------------
  const emptyJsBoard = ['', '', '', '', '', '', '', '', '']
  let step = 0
  // --------------------------------------------------------------------------
  // to fill the blank with X or O
  // const updateData = {
  //
  //   'cells': {
  //     'index': 0,
  //     'value': 'x'
  //   },
  //   'over': false
  //
  // }
  // JSON.stringify(updateData)

  const clean = function () {
    console.log('My JsBoard Array before clean ' + emptyJsBoard)
    // for (let i = 0; i < 9; i++) {
    //   api.update(i, emptyJsBoard[i])
    // }
    for (let i = 0; i < 9; i++) {
      $('#block' + (i + 1)).off('click')
      emptyJsBoard[i] = ''
      // $('#block' + (i + 1)).text('')
    }
    step = -1
  }

  const cleanForNewGame = function () {
    console.log('My JsBoard Array before clean ' + emptyJsBoard)
    // for (let i = 0; i < 9; i++) {
    //   api.update(i, emptyJsBoard[i])
    // }
    for (let i = 0; i < 9; i++) {
      $('#block' + (i + 1)).off('click')
      emptyJsBoard[i] = ''
      $('#block' + (i + 1)).text('')
    }
    step = -1
  }

  const checkWin = function () {
    console.log(store)
    for (let rank = 0; rank < 9; rank++) {
      // api.update(rank, emptyJsBoard[rank])
      if (rank === 0) {
        if (emptyJsBoard[0] !== '' && emptyJsBoard[0] === emptyJsBoard[4] && emptyJsBoard[4] === emptyJsBoard[8]) {
          events.onUpdate('', '', true)
          $('#main-message').text('Player ' + emptyJsBoard[0] + ' Win')
          clean()
          break
        }
      }
      if (rank === 6) {
        if (emptyJsBoard[6] !== '' && emptyJsBoard[6] === emptyJsBoard[4] && emptyJsBoard[4] === emptyJsBoard[2]) {
          events.onUpdate('', '', true)
          $('#main-message').text('Player ' + emptyJsBoard[6] + ' Win')
          clean()
          break
        }
      }
      if (rank === 1 || rank === 2 || rank === 0) {
        if (emptyJsBoard[rank] !== '' && emptyJsBoard[rank] === emptyJsBoard[rank + 3] && emptyJsBoard[rank + 3] === emptyJsBoard[rank + 6]) {
          events.onUpdate('', '', true)
          $('#main-message').text('Player ' + emptyJsBoard[rank] + ' Win')
          clean()
          break
        }
      }
      if (rank === 0 || rank === 3 || rank === 6) {
        if (emptyJsBoard[rank] !== '' && emptyJsBoard[rank] === emptyJsBoard[rank + 1] && emptyJsBoard[rank + 1] === emptyJsBoard[rank + 2]) {
          events.onUpdate('', '', true)
          $('#main-message').text('Player ' + emptyJsBoard[rank] + ' Win')
          clean()
          break
        }
      }
      if (step >= 8) {
        events.onUpdate('', '', true)
        $('#main-message').text('Players Tie')
        clean()
        break
      }
    }
  }

  const addClickFunction = function () {
    $('#main-message').text('GAME START ! Play1 "X" First')
    for (let blockNum = 1; blockNum < 10; blockNum++) {
      $('#block' + blockNum).on('click', function (event) {
        if ($('#block' + blockNum).text() === '') {
          if (step % 2 === 0) {
            const cellIndex = Number($(event.target).attr('data-index'))
            console.log('cellIndex = ', cellIndex)
            const cellValue = 'x'
            console.log('cellValue = ', cellValue)
            // api.updateGame(cellIndex, cellValue, '')
            events.onUpdate(cellIndex, cellValue, '')
            $('#block' + blockNum).text('X')
            emptyJsBoard[blockNum - 1] = 'X'
            // events.onUpdate(JSON.stringify(updateData))
            console.log(emptyJsBoard + ' step ' + step)
            $('#main-message').text(' Round: Player2')
            checkWin()
            step++
          } else {
            const cellIndex = Number($(event.target).attr('data-index'))
            console.log('cellIndex = ', cellIndex)
            const cellValue = 'o'
            console.log('cellValue = ', cellValue)
            // api.updateGame(cellIndex, cellValue, '')
            events.onUpdate(cellIndex, cellValue, '')
            $('#block' + blockNum).text('O')
            emptyJsBoard[blockNum - 1] = 'O'
            console.log(emptyJsBoard + ' ' + step)
            $('#main-message').text('Round: Player1')
            checkWin()
            step++
          }
        }
      })
    }
  }

  const gameStart = function () {
    $('#gameboard-section').hide()
    $('#signOutChangepwd').hide()
    $('#change-password').hide()
    // addClickFunction()
  }

  gameStart()
  // --------------------------------------------------------------------------

  module.exports = {
    emptyJsBoard,
    step,
    addClickFunction
  }
})
