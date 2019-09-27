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
  // --------------------------------------------------------------------------
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  // $('#new-game').on('click', events.onCreateGame)
  $('#new-game').click(function () {
    clean()
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
    $('#block1').on('click', function (event) {
      if ($('#block1').text() === '') {
        if (step % 2 === 0) {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'x'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block1').text('X')
          emptyJsBoard[0] = 'X'
          // events.onUpdate(JSON.stringify(updateData))
          console.log(emptyJsBoard + ' step ' + step)
          $('#main-message').text('Player2')
          checkWin()
          step++
        } else {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'o'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block1').text('O')
          emptyJsBoard[0] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player1')
          checkWin()
          step++
        }
      }
    })
    $('#block2').on('click', function (event) {
      if ($('#block2').text() === '') {
        if (step % 2 === 0) {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'x'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block2').text('X')
          emptyJsBoard[1] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player2')
          checkWin()
          step++
        } else {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'o'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block2').text('O')
          emptyJsBoard[1] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player1')
          checkWin()
          step++
        }
      }
    })
    $('#block3').on('click', function (event) {
      if ($('#block3').text() === '') {
        if (step % 2 === 0) {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'x'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block3').text('X')
          emptyJsBoard[2] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player2')
          checkWin()
          step++
        } else {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'o'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block3').text('O')
          emptyJsBoard[2] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player1')
          checkWin()
          step++
        }
      }
    })
    $('#block4').on('click', function (event) {
      if ($('#block4').text() === '') {
        if (step % 2 === 0) {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'x'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block4').text('X')
          emptyJsBoard[3] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player2')
          checkWin()
          step++
        } else {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'o'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block4').text('O')
          emptyJsBoard[3] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player1')
          checkWin()
          step++
        }
      }
    })
    $('#block5').on('click', function (event) {
      if ($('#block5').text() === '') {
        if (step % 2 === 0) {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'x'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block5').text('X')
          emptyJsBoard[4] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player2')
          checkWin()
          step++
        } else {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'o'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block5').text('O')
          emptyJsBoard[4] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player1')
          checkWin()
          step++
        }
      }
    })
    $('#block6').on('click', function (event) {
      if ($('#block6').text() === '') {
        if (step % 2 === 0) {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'x'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block6').text('X')
          emptyJsBoard[5] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player2')
          checkWin()
          step++
        } else {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'o'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block6').text('O')
          emptyJsBoard[5] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player1')
          checkWin()
          step++
        }
      }
    })
    $('#block7').on('click', function (event) {
      if ($('#block7').text() === '') {
        if (step % 2 === 0) {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'x'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block7').text('X')
          emptyJsBoard[6] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player2')
          checkWin()
          step++
        } else {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'o'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block7').text('O')
          emptyJsBoard[6] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player1')
          checkWin()
          step++
        }
      }
    })
    $('#block8').on('click', function (event) {
      if ($('#block8').text() === '') {
        if (step % 2 === 0) {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'x'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block8').text('X')
          emptyJsBoard[7] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player2')
          checkWin()
          step++
        } else {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'o'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block8').text('O')
          emptyJsBoard[7] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player1')
          checkWin()
          step++
        }
      }
    })
    $('#block9').on('click', function (event) {
      if ($('#block9').text() === '') {
        if (step % 2 === 0) {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'x'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block9').text('X')
          emptyJsBoard[8] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player2')
          checkWin()
          step++
        } else {
          const cellIndex = Number($(event.target).attr('data-index'))
          console.log('cellIndex = ', cellIndex)
          const cellValue = 'o'
          console.log('cellValue = ', cellValue)
          // api.updateGame(cellIndex, cellValue, '')
          events.onUpdate(cellIndex, cellValue, '')
          $('#block9').text('O')
          emptyJsBoard[8] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          $('#main-message').text('Player1')
          checkWin()
          step++
        }
      }
    })
  }

  const gameStart = function () {
    $('#gameboard-section').hide()
    $('#signOutChangepwd').hide()
    addClickFunction()
  }

  gameStart()
  // --------------------------------------------------------------------------

  module.exports = {
    emptyJsBoard,
    step,
    addClickFunction
  }
})
