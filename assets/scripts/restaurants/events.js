'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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

module.exports = {
  onIndex,
  onShow,
  onDelete,
  onCreate
}