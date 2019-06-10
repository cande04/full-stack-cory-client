'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const restaurantsEvents = require('./restaurants/events')
const foodsEvents = require('./foods/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#update-password').on('submit', authEvents.onUpdatePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#restaurants-index').on('submit', restaurantsEvents.onIndex)
  $('#restaurant-show').on('submit', restaurantsEvents.onShow)
  $('#content').on('click', '.delete-restaurant', restaurantsEvents.onDelete)
  $('#restaurant-create').on('submit', restaurantsEvents.onCreate)
  // $('.update-restaurant').click(function () {
  //   $('.update-restaurant-form').toggle()
  // })
  $('#content').on('submit', '.update-restaurant-form', restaurantsEvents.onUpdate)
  $('#content').on('click', '.update-restaurant', restaurantsEvents.onClickUpdate)
  $('#content').on('click', '.create-food', restaurantsEvents.onClickAddDish)
  $('#content').on('submit', '.create-food-form', restaurantsEvents.onCreateFood)
  $('#content').on('submit', '.update-dish-form', restaurantsEvents.onUpdateFood)
  $('#content').on('click', '.update-dish', restaurantsEvents.onClickUpdateFood)
  $('#content').on('click', '.delete-food', restaurantsEvents.onDeleteFood)
})
