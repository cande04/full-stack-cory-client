'use strict'

const indexRestaurantsTemplate = require('../templates/restaurants-index.handlebars')

const indexRestaurantsSuccess = (data) => {
  console.log(data)
  const indexRestaurantsHtml = indexRestaurantsTemplate({ restaurants: data.restaurants })
  $('.content').html(indexRestaurantsHtml)
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
  $('#message').text('Failed to get all examples :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onShowSuccess = responseData => {
  console.log('success', responseData)
  const restaurant = responseData.restaurant.name
  $('#message').text(restaurant + `food: ${responseData.restaurant.foods[0].name}`)
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onShowFailure = responseData => {
  console.log('failure')
  $('#message').text('Failed to get :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  // onIndexSuccess,
  indexRestaurantsSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure
}
