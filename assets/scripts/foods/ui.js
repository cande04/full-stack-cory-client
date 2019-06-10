// 'use strict'
//
// // const indexRestaurantsTemplate = require('../templates/restaurants-index.handlebars')
// // const showRestaurantTemplate = require('../templates/restaurant-show.handlebars')
// const store = require('../store')
//
//
// const onCreateFoodSuccess = responseData => {
//   console.log('success', responseData)
// }
//
// const onCreateFoodFailure = responseData => {
//   console.log('failure')
//   $('#message').text('Failed to create')
//   $('#message').removeClass('success')
//   $('#message').addClass('failure')
// }
//
// const fillUpdateFood = event => {
//   // const restId = $(event.target).closest('section').data('id')
//   // $(`[data-id=${store.restaurantId}] > .update-restaurant-form`).toggle()
//
//   // $('.update-restaurant-form').toggleClass('hidden')
//   $('.food-rename').val(store.foodName)
//   $('.notes-edit').val(store.foodNotes)
// }
//
// const onUpdateFoodSuccess = responseData => {
//   console.log('success', responseData)
// }
//
// const onUpdateFoodFailure = responseData => {
//   console.log('failure')
//   $('#message').text('Failed to create')
//   $('#message').removeClass('success')
//   $('#message').addClass('failure')
// }
//
// module.exports = {
//   onCreateFoodSuccess,
//   onCreateFoodFailure,
//   onUpdateFoodSuccess,
//   onUpdateFoodFailure,
//   fillUpdateFood
// }
