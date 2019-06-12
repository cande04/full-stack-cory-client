'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const restaurantsEvents = require('./restaurants/events')
// const foodsEvents = require('./foods/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signup').on('submit', authEvents.onSignUp)
  $('#signin').on('submit', authEvents.onSignIn)
  $('#update-password').on('submit', authEvents.onUpdatePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#restaurants-index').on('click', restaurantsEvents.onIndex)
  $('#restaurant-show').on('submit', restaurantsEvents.onShow)
  $('.content').on('click', '.delete-restaurant', restaurantsEvents.onClickDelete)
  $('#restaurant-create').on('submit', restaurantsEvents.onCreate)
  // $('.update-restaurant').click(function () {
  //   $('.update-restaurant-form').toggle()
  // })
  $('.content').on('submit', '.update-restaurant-form', restaurantsEvents.onUpdate)
  $('.content').on('click', '.update-restaurant', restaurantsEvents.onClickUpdate)
  $('.content').on('click', '.create-food', restaurantsEvents.onClickAddDish)
  $('.content').on('submit', '.create-food-form', restaurantsEvents.onCreateFood)
  $('.content').on('submit', '.update-dish-form', restaurantsEvents.onUpdateFood)
  $('.content').on('click', '.update-dish', restaurantsEvents.onClickUpdateFood)
  $('.content').on('click', '.delete-food', restaurantsEvents.onClickDeleteFood)
  $('.deleteFood-modal').on('click', '.yesDelete-food', restaurantsEvents.onDeleteFood)
  $('.delete-modal').on('click', '.yes-delete', restaurantsEvents.onDelete)
  $('.deleteFood-modal').on('click', '.noDelete-food', restaurantsEvents.hideFoodModal)
  $('.delete-modal').on('click', '.no-delete', restaurantsEvents.hideRestaurantModal)
})
