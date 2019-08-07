'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const indexRestaurantsTemplate = require('../templates/restaurants-index.handlebars')

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
  const name = formData.restaurant.name.toString().toLowerCase()
  console.log(name)

  api.index()
    .then((responseData) => {
      console.log(responseData)
      console.log(name)
      const searchedRestaurants = []
      for (let i = 0; i < responseData.restaurants.length; i++) {
        console.log(responseData.restaurants[i].name)
        if (responseData.restaurants[i].name.toString().toLowerCase().includes(name)) {
          searchedRestaurants.push(responseData.restaurants[i])
        }
      }
      console.log(searchedRestaurants)
      if (searchedRestaurants.length !== 0) {
        $('#content').html(indexRestaurantsTemplate({ restaurants: searchedRestaurants }))
      } else {
        $('#content').text('restaurant doesn\'t exist - better go try it!')
      }
      $('form').trigger('reset')
      $('html,body').animate({
        scrollTop: $('.message').offset().top},
      'slow')
    })
    .catch(ui.onShowFailure)
}

const onSearch = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  console.log(formData)
  // const name =
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
}

const onDelete = (event) => {
  const id = store.deleteId
  $('.delete-modal').toggle()
  $('#message').text('deleted!')
  setTimeout(() => $('#message').text(''), 4000)
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
  const name = $(event.target).closest('section').data('name')
  store.restaurantName = name
  const city = $(event.target).closest('section').data('city')
  store.restaurantCity = city
  // $(`[data-id=${store.restaurantId}] > .update-restaurant-form`).toggle()
  ui.fillUpdateForm()
}

const onUpdate = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  $('#message').text('updated!')
  setTimeout(() => $('#message').text(''), 4000)
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

  $('#message').text('added!')
  setTimeout(() => $('#message').text(''), 4000)
  const restId = $(event.target).closest('section').data('id')
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData, restId)

  api.createFood(formData, restId)
    .then(res => {
      onIndex(event)
    })
    .catch(ui.onCreateFoodFailure)
}

const onClickUpdateFood = event => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  store.restaurantId = id
  const foodId = $(event.target).closest('div').data('food-id')
  store.foodId = foodId
  $(`#food-${foodId}`).toggleClass('hidden')

  $(document).mouseup(function (e) {
    const container = $(`#food-${foodId}`)
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.addClass('hidden')
    }
  })

  const name = $(event.target).closest('div').data('food-name')
  store.foodName = name
  const notes = $(event.target).closest('div').data('food-notes')
  store.foodNotes = notes
  // $(`[data-id=${store.restaurantId}] > .update-restaurant-form`).toggle()
  ui.fillUpdateFood()
}

const onUpdateFood = event => {
  event.preventDefault()
  const id = $(event.target).closest('div').data('food-id')
  const restId = $(event.target).closest('section').data('id')
  $('#message').text('updated successfully!')
  setTimeout(() => $('#message').text(''), 3000)
  const form = event.target
  const formData = getFormFields(form)
  api.updateFood(id, formData, restId)
    .then(res => {
      onIndex(event)
    })
    .catch(ui.onUpdateFoodFailure)
}

const onClickDeleteFood = event => {
  const id = $(event.target).closest('div').data('food-id')
  $('.deleteFood-modal').toggle()
  store.deleteFoodId = id
}

const onDeleteFood = event => {
  const id = store.deleteFoodId
  $('#message').text('deleted!')
  setTimeout(() => $('#message').text(''), 4000)
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
  hideRestaurantModal,
  onSearch
  // showForms
}
