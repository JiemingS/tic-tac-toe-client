'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// const store = require('./store')
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
    // events.onIndex()
    cleanForNewGame()
    step = 0
    events.onCreateGame()
    addClickFunction()
  })
  // the button for against AI
  $('#new-game-vs-computer').click(function () {
    cleanForNewGame()
    step = 0
    events.onCreateGame()
    addClickFunctionAI()
  })
  $('#new-game-vs-computer-2').click(function () {
    cleanForNewGame()
    step = 0
    events.onCreateGame()
    addClickFunctionAILv2()
  })
  // --------------------------------------------------------------------------
  const emptyJsBoard = ['', '', '', '', '', '', '', '', '']
  let step = 0
  let someoneWin = 0
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
    // console.log('My JsBoard Array before clean ' + emptyJsBoard)
    // for (let i = 0; i < 9; i++) {
    //   api.update(i, emptyJsBoard[i])
    // }
    for (let i = 0; i < 9; i++) {
      $('#block' + (i + 1)).off('click')
      emptyJsBoard[i] = ''
      // $('#block' + (i + 1)).text('')
    }
    // step = -1
  }

  // ---------------------------------------------------------------------------
  // Clean the game Board and turn off the click function and set steps

  const cleanForNewGame = function () {
    // console.log('My JsBoard Array before clean ' + emptyJsBoard)
    // for (let i = 0; i < 9; i++) {
    //   api.update(i, emptyJsBoard[i])
    // }
    for (let i = 0; i < 9; i++) {
      $('#block' + (i + 1)).off('click')
      emptyJsBoard[i] = ''
      $('#block' + (i + 1)).text('')
    }
    step = -1
    someoneWin = 0
  }

  // ---------------------------------------------------------------------------

  const checkWin = function () {
    // console.log(store)
    for (let rank = 0; rank < 9; rank++) {
      // api.update(rank, emptyJsBoard[rank])
      if (rank === 0) {
        if (emptyJsBoard[0] !== '' && emptyJsBoard[0] === emptyJsBoard[4] && emptyJsBoard[4] === emptyJsBoard[8]) {
          events.onUpdate('', '', true)
          events.onIndex()
          $('#main-message').text('Player ' + emptyJsBoard[0] + ' Win')
          someoneWin = 1
          clean()
          break
        }
      }
      if (rank === 6) {
        if (emptyJsBoard[6] !== '' && emptyJsBoard[6] === emptyJsBoard[4] && emptyJsBoard[4] === emptyJsBoard[2]) {
          events.onUpdate('', '', true)
          events.onIndex()
          $('#main-message').text('Player ' + emptyJsBoard[6] + ' Win')
          someoneWin = 1
          clean()
          break
        }
      }
      if (rank === 1 || rank === 2 || rank === 0) {
        if (emptyJsBoard[rank] !== '' && emptyJsBoard[rank] === emptyJsBoard[rank + 3] && emptyJsBoard[rank + 3] === emptyJsBoard[rank + 6]) {
          events.onUpdate('', '', true)
          events.onIndex()
          $('#main-message').text('Player ' + emptyJsBoard[rank] + ' Win')
          someoneWin = 1
          clean()
          break
        }
      }
      if (rank === 0 || rank === 3 || rank === 6) {
        if (emptyJsBoard[rank] !== '' && emptyJsBoard[rank] === emptyJsBoard[rank + 1] && emptyJsBoard[rank + 1] === emptyJsBoard[rank + 2]) {
          events.onUpdate('', '', true)
          events.onIndex()
          $('#main-message').text('Player ' + emptyJsBoard[rank] + ' Win')
          someoneWin = 1
          clean()
          break
        }
      }
      if (step >= 8) {
        events.onUpdate('', '', true)
        events.onIndex()
        $('#main-message').text('Players Tie')
        clean()
        break
      }
    }
  }

  const AIMoveLv1 = function () {
    checkWin()
    if (someoneWin === 0 && step !== 9) {
      const indexs = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      const result = indexs.filter(index => emptyJsBoard[index] === '')
      // console.log(result)
      const rand = result[Math.floor(Math.random() * result.length)]
      // console.log(rand)
      // events.onUpdate(rand, 'O', '')
      emptyJsBoard[rand] = 'O'
      // console.log(emptyJsBoard)
      $('#block' + (rand + 1)).text('O')
      // -----------------------------------------------------------------------
      $('#main-message').text('Round: Player1')
      checkWin()
      step++
    }
  }

  const winWaysArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
  // const importantStrategyOne = [[0, 8], [2, 6]]
  const importantStrategyTwo = [[[2, 3], [6, 1]], [[0, 5], [8, 1]], [[0, 7], [8, 3]], [[2, 7], [6, 5]]]
  const strTwoIndex = [0, 2, 6, 8]

  const choiceAI = function () {
    for (let i = 0; i < 8; i++) {
      if (emptyJsBoard[winWaysArray[i][0]] === emptyJsBoard[winWaysArray[i][1]] && emptyJsBoard[winWaysArray[i][0]] === 'O' && emptyJsBoard[winWaysArray[i][2]] === '') {
        return winWaysArray[i][2]
      } else if (emptyJsBoard[winWaysArray[i][0]] === emptyJsBoard[winWaysArray[i][2]] && emptyJsBoard[winWaysArray[i][0]] === 'O' && emptyJsBoard[winWaysArray[i][1]] === '') {
        return winWaysArray[i][1]
      } else if (emptyJsBoard[winWaysArray[i][1]] === emptyJsBoard[winWaysArray[i][2]] && emptyJsBoard[winWaysArray[i][1]] === 'O' && emptyJsBoard[winWaysArray[i][0]] === '') {
        return winWaysArray[i][0]
      }
    }
    for (let i = 0; i < 8; i++) {
      if (emptyJsBoard[winWaysArray[i][0]] === emptyJsBoard[winWaysArray[i][1]] && emptyJsBoard[winWaysArray[i][0]] === 'X' && emptyJsBoard[winWaysArray[i][2]] === '') {
        return winWaysArray[i][2]
      } else if (emptyJsBoard[winWaysArray[i][0]] === emptyJsBoard[winWaysArray[i][2]] && emptyJsBoard[winWaysArray[i][0]] === 'X' && emptyJsBoard[winWaysArray[i][1]] === '') {
        return winWaysArray[i][1]
      } else if (emptyJsBoard[winWaysArray[i][1]] === emptyJsBoard[winWaysArray[i][2]] && emptyJsBoard[winWaysArray[i][1]] === 'X' && emptyJsBoard[winWaysArray[i][0]] === '') {
        return winWaysArray[i][0]
      }
    }
    // const indexs = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const indexs = [4]
    const result = indexs.filter(index => emptyJsBoard[index] === '')
    if (result.length !== 0) {
      return result[Math.floor(Math.random() * result.length)]
    } else {
      if (step === 3) {
        // strOne
        if (emptyJsBoard[0] === 'X' && emptyJsBoard[0] === emptyJsBoard[8]) {
          const strOne = [1, 3, 5, 7]
          return strOne[Math.floor(Math.random() * strOne.length)]
        }
        if (emptyJsBoard[2] === 'X' && emptyJsBoard[2] === emptyJsBoard[6]) {
          const strOne = [1, 3, 5, 7]
          return strOne[Math.floor(Math.random() * strOne.length)]
        }
        // strTwo
        for (let t = 0; t < 4; t++) {
          for (let u = 0; u < 2; u++) {
            if (emptyJsBoard[importantStrategyTwo[t][u][0]] === emptyJsBoard[importantStrategyTwo[t][u][1]] && emptyJsBoard[importantStrategyTwo[t][u][0]] === 'X') {
              return strTwoIndex[t]
            }
          }
        }
      } else {
        const indexsS = [0, 2, 6, 8]
        const resultS = indexsS.filter(index => emptyJsBoard[index] === '')
        if (resultS.length !== 0) {
          // console.log('result ', result)
          // console.log('by random')
          return resultS[Math.floor(Math.random() * resultS.length)]
        } else {
          const indexsN = [1, 3, 5, 7]
          const resultN = indexsN.filter(index => emptyJsBoard[index] === '')
          // console.log('result ', result)
          // console.log('by random')
          return resultN[Math.floor(Math.random() * resultN.length)]
        }
      }
    }
    // console.log('result ', result)
    // console.log('by random')
    // return result[Math.floor(Math.random() * result.length)]
  }

  const AIMoveLv2 = function () {
    checkWin()
    // console.log(step)
    if (someoneWin === 0 && step !== 9) {
      // const indexs = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      // const result = indexs.filter(index => emptyJsBoard[index] === '')
      // console.log('AI ', result)
      // const choice = result[Math.floor(Math.random() * result.length)]
      const choice = choiceAI()
      // console.log('choice ', choice)
      // events.onUpdate(choice, 'O', '')
      emptyJsBoard[choice] = 'O'
      // console.log(emptyJsBoard)
      $('#block' + (choice + 1)).text('O')
      // -----------------------------------------------------------------------
      $('#main-message').text('Round: Player1')
      checkWin()
      step++
    }
  }

  const addClickFunction = function () {
    $('#main-message').text('GAME START ! Play1 "X" First')
    for (let blockNum = 1; blockNum < 10; blockNum++) {
      $('#block' + blockNum).on('click', function (event) {
        if ($('#block' + blockNum).text() === '') {
          if (step % 2 === 0) {
            const cellIndex = Number($(event.target).attr('data-index'))
            // console.log('cellIndex = ', cellIndex)
            const cellValue = 'x'
            // console.log('cellValue = ', cellValue)
            // api.updateGame(cellIndex, cellValue, '')
            events.onUpdate(cellIndex, cellValue, '')
            $('#block' + blockNum).text('X')
            emptyJsBoard[blockNum - 1] = 'X'
            // events.onUpdate(JSON.stringify(updateData))
            // console.log(emptyJsBoard + ' step ' + step)
            $('#main-message').text(' Round: Player2')
            checkWin()
            step++
          } else {
            const cellIndex = Number($(event.target).attr('data-index'))
            // console.log('cellIndex = ', cellIndex)
            const cellValue = 'o'
            // console.log('cellValue = ', cellValue)
            // api.updateGame(cellIndex, cellValue, '')
            events.onUpdate(cellIndex, cellValue, '')
            $('#block' + blockNum).text('O')
            emptyJsBoard[blockNum - 1] = 'O'
            // console.log(emptyJsBoard + ' ' + step)
            $('#main-message').text('Round: Player1')
            checkWin()
            step++
          }
        } else {
          const element = document.querySelector('.box' + blockNum)
          element.classList.add('animated', 'shake')
          setTimeout(() => {
            element.classList.remove('animated', 'shake')
          }, 1000)
        }
      })
    }
  }

  const addClickFunctionAI = function () {
    $('#main-message').text('GAME START ! Play1 "X" First')
    for (let blockNum = 1; blockNum < 10; blockNum++) {
      $('#block' + blockNum).on('click', function (event) {
        if ($('#block' + blockNum).text() === '') {
          if (step % 2 === 0) {
            const cellIndex = Number($(event.target).attr('data-index'))
            // console.log('cellIndex = ', cellIndex)
            const cellValue = 'x'
            // console.log('cellValue = ', cellValue)
            // api.updateGame(cellIndex, cellValue, '')
            events.onUpdate(cellIndex, cellValue, '')
            $('#block' + blockNum).text('X')
            emptyJsBoard[blockNum - 1] = 'X'
            // events.onUpdate(JSON.stringify(updateData))
            // console.log(emptyJsBoard + ' step ' + step)
            $('#main-message').text(' Round: Player2')
            checkWin()
            step++
            AIMoveLv1()
          } else {
            const cellIndex = Number($(event.target).attr('data-index'))
            // console.log('cellIndex = ', cellIndex)
            const cellValue = 'o'
            // console.log('cellValue = ', cellValue)
            // api.updateGame(cellIndex, cellValue, '')
            events.onUpdate(cellIndex, cellValue, '')
            $('#block' + blockNum).text('O')
            emptyJsBoard[blockNum - 1] = 'O'
            // console.log(emptyJsBoard + ' ' + step)
            $('#main-message').text('Round: Player1')
            checkWin()
            step++
            AIMoveLv1()
          }
        } else {
          const element = document.querySelector('.box' + blockNum)
          element.classList.add('animated', 'shake')
          setTimeout(() => {
            element.classList.remove('animated', 'shake')
          }, 1000)
        }
      })
    }
  }

  const addClickFunctionAILv2 = function () {
    $('#main-message').text('GAME START ! Play1 "X" First')
    for (let blockNum = 1; blockNum < 10; blockNum++) {
      $('#block' + blockNum).on('click', function (event) {
        if ($('#block' + blockNum).text() === '') {
          if (step % 2 === 0) {
            const cellIndex = Number($(event.target).attr('data-index'))
            // console.log('cellIndex = ', cellIndex)
            const cellValue = 'x'
            // console.log('cellValue = ', cellValue)
            // api.updateGame(cellIndex, cellValue, '')
            events.onUpdate(cellIndex, cellValue, '')
            $('#block' + blockNum).text('X')
            emptyJsBoard[blockNum - 1] = 'X'
            // events.onUpdate(JSON.stringify(updateData))
            // console.log(emptyJsBoard + ' step ' + step)
            $('#main-message').text(' Round: Player2')
            checkWin()
            step++
            AIMoveLv2()
          } else {
            const cellIndex = Number($(event.target).attr('data-index'))
            // console.log('cellIndex = ', cellIndex)
            const cellValue = 'o'
            // console.log('cellValue = ', cellValue)
            // api.updateGame(cellIndex, cellValue, '')
            events.onUpdate(cellIndex, cellValue, '')
            $('#block' + blockNum).text('O')
            emptyJsBoard[blockNum - 1] = 'O'
            // console.log(emptyJsBoard + ' ' + step)
            $('#main-message').text('Round: Player1')
            checkWin()
            step++
            AIMoveLv2()
          }
        } else {
          const element = document.querySelector('.box' + blockNum)
          element.classList.add('animated', 'shake')
          setTimeout(() => {
            element.classList.remove('animated', 'shake')
          }, 1000)
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
