// 'use strict'
//
// const getFormFields = require('../../../lib/get-form-fields')
// const api = require('./api')
// const ui = require('./ui')
// const store = require('../store')
// const restaurantsEvents = ('../restaurants/events')
//
// const onClickAddDish = (event) => {
//   event.preventDefault()
//   $('.create-food-form').toggle()
// }
//
// const onCreateFood = (event) => {
//   event.preventDefault()
//
//   // const restId = $(event.target).closest('section').data('id')
//   const form = event.target
//   const formData = getFormFields(form)
//
//   api.createFood(formData)
//     .then(ui.onCreateFoodSuccess)
//     .catch(ui.onCreateFoodFailure)
// }
//
// const onClickUpdateFood = event => {
//   event.preventDefault()
//   const id = $(event.target).closest('section').data('id')
//   store.restaurantId = id
//   console.log(store.restaurantId)
//   const foodId = $(event.target).closest('div').data('food-id')
//   store.foodId = foodId
//   console.log(store.foodId)
//   $(`#food-${foodId}`).toggle()
//   const name = $(event.target).closest('div').data('food-name')
//   store.foodName = name
//   console.log(store.foodName)
//   const notes = $(event.target).closest('div').data('food-notes')
//   store.foodNotes = notes
//   console.log(store.foodNotes)
//   // $(`[data-id=${store.restaurantId}] > .update-restaurant-form`).toggle()
//   ui.fillUpdateFood()
// }
//
// const onUpdateFood = event => {
//   event.preventDefault()
//   const id = $(event.target).closest('div').data('food-id')
//   console.log(id)
//   const form = event.target
//   const formData = getFormFields(form)
//   api.updateFood(id, formData)
//     .then(res => {
//       restaurantsEvents.onIndex(event)
//     })
//     .catch(ui.onUpdateFoodFailure)
// }
//
// module.exports = {
//   onClickAddDish,
//   onCreateFood,
//   onClickUpdateFood,
//   onUpdateFood
// }
