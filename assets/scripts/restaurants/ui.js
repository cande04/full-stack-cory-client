'use strict'

const indexRestaurantsTemplate = require('../templates/restaurants-index.handlebars')
const showRestaurantTemplate = require('../templates/restaurant-show.handlebars')
const store = require('../store')

const indexRestaurantsSuccess = (data) => {
  console.log(data)
  const indexRestaurantsHtml = indexRestaurantsTemplate({ restaurants: data.restaurants })
  $('.content').html(indexRestaurantsHtml)
}

const onShowSuccess = (responseData) => {
  console.log('success', responseData)
  // const restaurantId = responseData.restaurant.id
  // if (restaurantId =

  $('.content').html(showRestaurantTemplate({restaurant: responseData.restaurant}))
  // if (restaurantId === indexRestaurantsTemplate({restaurants: responseData.restaurant.data('id')})) {
  //   $('content').html(restaurant)
  // }
}

// const onIndexSuccess = responseData => {
//   console.log('success', responseData)
//   $('#message').html('')
//   const restaurants = responseData.restaurants
//   restaurants.forEach(restaurant => {
//     $('#message').append(`<p>${restaurant.id}: ${restaurant.name}, ${restaurant.city}</p>`)
//   })
//
//   $('#message').removeClass()
//   $('#message').addClass('success')
// }

const onIndexFailure = responseData => {
  console.log('failure')
  $('#message').text('Failed to load restaurants')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

// const onShowSuccess = responseData => {
//   console.log('success', responseData)
//   const restaurant = responseData.restaurant.name
//   $('#message').text(restaurant + `food: ${responseData.restaurant.foods[0].name}`)
//   $('#message').removeClass()
//   $('#message').addClass('success')
// }

const onShowFailure = responseData => {
  console.log('failure')
  $('#message').text('Failed to get :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onDeleteFailure = responseData => {
  console.log('failure')
  $('#message').text('Failed to delete')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onCreateSuccess = responseData => {
  console.log('success', responseData)
  const restaurant = responseData.restaurant.name
  const city = responseData.restaurant.city
  const food = responseData.food.name
  const notes = responseData.food.notes
  $('#content').text('Added: ' + restaurant + ' in: ' + city + ' where you ate: ' + food + ' and said: ' + notes)
}

const onCreateFailure = responseData => {
  console.log('failure')
  $('#message').text('Failed to create')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onUpdateSuccess = responseData => {
  console.log('success', responseData)
}

const fillUpdateForm = event => {
  // const restId = $(event.target).closest('section').data('id')
  // $(`[data-id=${store.restaurantId}] > .update-restaurant-form`).toggle()

  // $('.update-restaurant-form').toggleClass('hidden')
  $('.restaurant-rename').val(store.restaurantName)
  $('.city-rename').val(store.restaurantCity)
}

const onCreateFoodSuccess = responseData => {
  console.log('success', responseData)
}

const onCreateFoodFailure = responseData => {
  console.log('failure')
  $('#message').text('Failed to create')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const fillUpdateFood = event => {
  // const restId = $(event.target).closest('section').data('id')
  // $(`[data-id=${store.restaurantId}] > .update-restaurant-form`).toggle()

  // $('.update-restaurant-form').toggleClass('hidden')
  $('.food-rename').val(store.foodName)
  $('.notes-edit').val(store.foodNotes)
}

const onUpdateFoodSuccess = responseData => {
  console.log('success', responseData)
}

const onUpdateFoodFailure = responseData => {
  console.log('failure')
  $('#message').text('Failed to create')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onDeleteFoodFailure = responseData => {
  console.log('failure')
  $('#message').text('Failed to delete')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  // onIndexSuccess,
  indexRestaurantsSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDeleteFailure,
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  fillUpdateForm,
  onCreateFoodSuccess,
  onCreateFoodFailure,
  onUpdateFoodSuccess,
  onUpdateFoodFailure,
  fillUpdateFood,
  onDeleteFoodFailure
}
