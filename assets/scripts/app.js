'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // --------------------------------------------------------------------------
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  // --------------------------------------------------------------------------
  const emptyJsBoard = ['', '', '', '', '', '', '', '', '']
  // --------------------------------------------------------------------------
  // to fill the blank with X or O

  const clean = function () {
    for (let i = 0; i < 9; i++) {
      $('#block' + (i + 1)).off('click')
      emptyJsBoard[i] = ''
    }
    step = -1
  }
  const checkWin = function () {
    for (let rank = 0; rank < 9; rank++) {
      if (rank === 0) {
        if (emptyJsBoard[0] !== '' && emptyJsBoard[0] === emptyJsBoard[4] && emptyJsBoard[4] === emptyJsBoard[8]) {
          $('#main-message').text('Player ' + emptyJsBoard[0] + ' Win')
          clean()
          break
        }
      }
      if (rank === 6) {
        if (emptyJsBoard[6] !== '' && emptyJsBoard[6] === emptyJsBoard[4] && emptyJsBoard[4] === emptyJsBoard[2]) {
          $('#main-message').text('Player ' + emptyJsBoard[6] + ' Win')
          clean()
          break
        }
      }
      if (rank === 1 || rank === 2 || rank === 0) {
        if (emptyJsBoard[rank] !== '' && emptyJsBoard[rank] === emptyJsBoard[rank + 3] && emptyJsBoard[rank + 3] === emptyJsBoard[rank + 6]) {
          $('#main-message').text('Player ' + emptyJsBoard[rank] + ' Win')
          clean()
          break
        }
      }
      if (rank === 0 || rank === 3 || rank === 6) {
        if (emptyJsBoard[rank] !== '' && emptyJsBoard[rank] === emptyJsBoard[rank + 1] && emptyJsBoard[rank + 1] === emptyJsBoard[rank + 2]) {
          $('#main-message').text('Player ' + emptyJsBoard[rank] + ' Win')
          clean()
          break
        }
      }
      if (step >= 8) {
        $('#main-message').text('Players Tie')
        clean()
        break
      }
    }
  }

  let step = 0

  const gameStart = function () {
    $('#gameboard-section').hide()
    $('#block1').on('click', function (event) {
      if ($('#block1').text() === '') {
        if (step % 2 === 0) {
          $('#block1').text('X')
          emptyJsBoard[0] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        } else {
          $('#block1').text('O')
          emptyJsBoard[0] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        }
      }
    })
    $('#block2').on('click', function (event) {
      if ($('#block2').text() === '') {
        if (step % 2 === 0) {
          $('#block2').text('X')
          emptyJsBoard[1] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        } else {
          $('#block2').text('O')
          emptyJsBoard[1] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        }
      }
    })
    $('#block3').on('click', function (event) {
      if ($('#block3').text() === '') {
        if (step % 2 === 0) {
          $('#block3').text('X')
          emptyJsBoard[2] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        } else {
          $('#block3').text('O')
          emptyJsBoard[2] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        }
      }
    })
    $('#block4').on('click', function (event) {
      if ($('#block4').text() === '') {
        if (step % 2 === 0) {
          $('#block4').text('X')
          emptyJsBoard[3] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        } else {
          $('#block4').text('O')
          emptyJsBoard[3] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        }
      }
    })
    $('#block5').on('click', function (event) {
      if ($('#block5').text() === '') {
        if (step % 2 === 0) {
          $('#block5').text('X')
          emptyJsBoard[4] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        } else {
          $('#block5').text('O')
          emptyJsBoard[4] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        }
      }
    })
    $('#block6').on('click', function (event) {
      if ($('#block6').text() === '') {
        if (step % 2 === 0) {
          $('#block6').text('X')
          emptyJsBoard[5] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        } else {
          $('#block6').text('O')
          emptyJsBoard[5] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        }
      }
    })
    $('#block7').on('click', function (event) {
      if ($('#block7').text() === '') {
        if (step % 2 === 0) {
          $('#block7').text('X')
          emptyJsBoard[6] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        } else {
          $('#block7').text('O')
          emptyJsBoard[6] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        }
      }
    })
    $('#block8').on('click', function (event) {
      if ($('#block8').text() === '') {
        if (step % 2 === 0) {
          $('#block8').text('X')
          emptyJsBoard[7] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        } else {
          $('#block8').text('O')
          emptyJsBoard[7] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        }
      }
    })
    $('#block9').on('click', function (event) {
      if ($('#block9').text() === '') {
        if (step % 2 === 0) {
          $('#block9').text('X')
          emptyJsBoard[8] = 'X'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        } else {
          $('#block9').text('O')
          emptyJsBoard[8] = 'O'
          console.log(emptyJsBoard + ' ' + step)
          checkWin()
          step++
        }
      }
    })
  }

  gameStart()
  // --------------------------------------------------------------------------

  module.exports = {
    emptyJsBoard,
    step
  }
})
