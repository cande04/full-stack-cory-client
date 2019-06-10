'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onIndex = (event) => {
  event.preventDefault()

  api.index()
    .then(ui.indexRestaurantsSuccess)
    .catch(ui.onIndexFailure)
}

const onShow = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const restId = formData.restaurant.id

  api.show(restId)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

// const onShow = (event) => {
//   event.preventDefault()
//
//   const form = event.target
//   const formData = getFormFields(form)
//
//   api.show(formData)
//     .then(ui.onShowSuccess)
//     .catch(ui.onShowFailure)
// }

const onDelete = (event) => {
  const id = $(event.target).data('id')
  api.deleteRestaurant(id)
    .then(res => {
      onIndex(event)
    })
    .catch(ui.onDeleteFailure)
}

const onCreate = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onClickUpdate = event => {
  event.preventDefault()

  const id = $(event.target).closest('section').data('id')
  store.restaurantId = id
  $(`#restaurant-${id}`).toggle()
  console.log(store.restaurantId)
  const name = $(event.target).closest('section').data('name')
  store.restaurantName = name
  console.log(store.restaurantName)
  const city = $(event.target).closest('section').data('city')
  store.restaurantCity = city
  console.log(store.restaurantCity)
  // $(`[data-id=${store.restaurantId}] > .update-restaurant-form`).toggle()
  ui.fillUpdateForm()
}

const onUpdate = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  console.log(id)
  const form = event.target
  const formData = getFormFields(form)
  api.updateRestaurant(id, formData)
    .then(res => {
      onIndex(event)
    })
    .catch(ui.onUpdateFailure)
}
// const showForms = event => {
//   $('.update-restaurant').click(function () {
//     $('.update-restaurant-form').toggle()
//   })
// }

const onClickAddDish = (event) => {
  event.preventDefault()
  $('.create-food-form').toggle()
}

const onCreateFood = (event) => {
  event.preventDefault()

  // const restId = $(event.target).closest('section').data('id')
  const form = event.target
  const formData = getFormFields(form)

  api.createFood(formData)
    .then(res => {
      onIndex(event)
    })
    .catch(ui.onCreateFoodFailure)
}

const onClickUpdateFood = event => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  store.restaurantId = id
  console.log(store.restaurantId)
  const foodId = $(event.target).closest('div').data('food-id')
  store.foodId = foodId
  console.log(store.foodId)
  $(`#food-${foodId}`).toggle()
  const name = $(event.target).closest('div').data('food-name')
  store.foodName = name
  console.log(store.foodName)
  const notes = $(event.target).closest('div').data('food-notes')
  store.foodNotes = notes
  console.log(store.foodNotes)
  // $(`[data-id=${store.restaurantId}] > .update-restaurant-form`).toggle()
  ui.fillUpdateFood()
}

const onUpdateFood = event => {
  event.preventDefault()
  const id = $(event.target).closest('div').data('food-id')
  console.log(id)
  const form = event.target
  const formData = getFormFields(form)
  api.updateFood(id, formData)
    .then(res => {
      onIndex(event)
    })
    .catch(ui.onUpdateFoodFailure)
}

const onDeleteFood = event => {
  const id = $(event.target).data('id')
  api.deleteFood(id)
    .then(res => {
      onIndex(event)
    })
    .catch(ui.onDeleteFoodFailure)
}

module.exports = {
  onIndex,
  onShow,
  onDelete,
  onCreate,
  onUpdate,
  onClickUpdate,
  onClickAddDish,
  onCreateFood,
  onClickUpdateFood,
  onUpdateFood,
  onDeleteFood
  // showForms
}
