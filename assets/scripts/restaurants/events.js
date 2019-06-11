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

const onClickDelete = event => {
  const id = $(event.target).data('id')
  $('.delete-modal').toggle()
  store.deleteId = id
  console.log(store.deleteId)
}

const onDelete = (event) => {
  console.log(store.deleteId)
  const id = store.deleteId
  $('.delete-modal').toggle()
  api.deleteRestaurant(id)
    .then(res => {
      onIndex(event)
    })
    .catch(ui.onDeleteFailure)
}

const hideFoodModal = event => {
  $('.deleteFood-modal').toggle()
}

const hideRestaurantModal = event => {
  $('.delete-modal').toggle()
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

  $('.card').each(function () {
    if (!$('.card').hasClass('hidden')) {
      $('.card').addClass('hidden')
    }
  })

  const id = $(event.target).closest('section').data('id')
  store.restaurantId = id

  $(`#restaurant-${id}`).toggleClass('hidden')

  $(document).mouseup(function (e) {
    const container = $(`#restaurant-${id}`)
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.addClass('hidden')
    }
  })
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
  // $('.create-food-form').toggle()
  const id = $(event.target).closest('section').data('id')
  // store.restaurantId = id
  $(`#restaurantfood-${id}`).toggleClass('hidden')

  $(document).mouseup(function (e) {
    const container = $(`#restaurantfood-${id}`)
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.addClass('hidden')
    }
  })

  $('.document').toggle()
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
  $(`#food-${foodId}`).toggleClass('hidden')

  $(document).mouseup(function (e) {
    const container = $(`#food-${foodId}`)
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.addClass('hidden')
    }
  })

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

const onClickDeleteFood = event => {
  const id = $(event.target).closest('div').data('food-id')
  $('.deleteFood-modal').toggle()
  store.deleteFoodId = id
  console.log(store.deleteFoodId)
}

const onDeleteFood = event => {
  console.log('ive been clicked')
  const id = store.deleteFoodId
  console.log(id)
  $('.deleteFood-modal').toggle()
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
  onDeleteFood,
  onClickDelete,
  onClickDeleteFood,
  hideFoodModal,
  hideRestaurantModal
  // showForms
}
