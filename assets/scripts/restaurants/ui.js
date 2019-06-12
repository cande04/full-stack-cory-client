'use strict'

const indexRestaurantsTemplate = require('../templates/restaurants-index.handlebars')
const showRestaurantTemplate = require('../templates/restaurant-show.handlebars')
const store = require('../store')

const indexRestaurantsSuccess = (data) => {
  console.log(data)
  const indexRestaurantsHtml = indexRestaurantsTemplate({ restaurants: data.restaurants })
  if (data.restaurants.length === 0) {
    $('#content').html('<h4>No restaurants yet, go eat!<h4>')
  } else {
    $('#content').html(indexRestaurantsHtml)
  }
  $('html,body').animate({
    scrollTop: $('main').offset().top},
  'slow')
}

const onShowSuccess = (responseData) => {
  console.log('success', responseData)
  // const restaurantId = responseData.restaurant.id
  // if (restaurantId =

  $('#content').html(showRestaurantTemplate({restaurant: responseData.restaurant}))
  $('form').trigger('reset')
  $('html,body').animate({
    scrollTop: $('.message').offset().top},
  'slow')
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
  $('#content').text('failed to load restaurants')
  $('html,body').animate({
    scrollTop: $('.message').offset().top},
  'slow')
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
  $('#content').text('restaurant doesn\'t exist - better go try it!')
  $('form').trigger('reset')
  $('html,body').animate({
    scrollTop: $('.message').offset().top},
  'slow')
}

const onDeleteFailure = responseData => {
  console.log('failure')
  $('#message').text('failed to delete')
}

const onCreateSuccess = responseData => {
  console.log('success', responseData)
  // const restaurant = responseData.restaurant.name
  // const city = responseData.restaurant.city
  // $('#content').text('Added: ' + restaurant + ' in: ' + city)
  $('#content').html(showRestaurantTemplate({restaurant: responseData.restaurant}))
  $('form').trigger('reset')
  $('html,body').animate({
    scrollTop: $('.message').offset().top},
  'slow')
}

const onCreateFailure = responseData => {
  console.log('failure')
  $('#content').text('failed to create')
  $('form').trigger('reset')
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
  $('.collapse').toggle()
}

const onCreateFoodFailure = responseData => {
  console.log('failure')
  $('#message').text('Failed to create')
  setTimeout(() => $('#message').text(''), 4000)
}

const fillUpdateFood = event => {
  // const restId = $(event.target).closest('section').data('id')
  // $(`[data-id=${store.restaurantId}] > .update-restaurant-form`).toggle()

  // $('.update-restaurant-form').toggleClass('hidden')
  $('.food-rename').val(store.foodName)
  $('.notes-edit').val(store.foodNotes)
  $('.rest-id').val(store.restaurantId)
}

const onUpdateFoodSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('updated successfully!')
  setTimeout(() => $('#message').text(''), 4000)
}

const onUpdateFoodFailure = responseData => {
  console.log('failure')
  $('#message').text('failed to update')
  setTimeout(() => $('#message').text(''), 4000)
}

const onDeleteFoodFailure = responseData => {
  console.log('failure')
  $('#message').text('failed to delete')
  setTimeout(() => $('#message').text(''), 4000)
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
