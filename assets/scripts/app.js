'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const restaurantsEvents = require('./restaurants/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#update-password').on('submit', authEvents.onUpdatePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#restaurants-index').on('submit', restaurantsEvents.onIndex)
  $('#restaurant-show').on('submit', restaurantsEvents.onShow)
})
