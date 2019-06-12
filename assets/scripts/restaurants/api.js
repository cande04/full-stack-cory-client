'use strict'

const config = require('../config')
const store = require('../store')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = (restId) => {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + restId,
    method: 'GET',
    data: restId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const show = (formData) => {
//   return $.ajax({
//     url: config.apiUrl + '/restaurants/' + formData.restaurant.id,
//     method: 'GET',
//     data: formData,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const deleteRestaurant = (id) => {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const create = formData => {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRestaurant = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createFood = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/foods`,
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateFood = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + '/foods/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteFood = (id) => {
  return $.ajax({
    url: config.apiUrl + '/foods/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  show,
  deleteRestaurant,
  create,
  updateRestaurant,
  createFood,
  updateFood,
  deleteFood
}
