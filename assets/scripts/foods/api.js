// 'use strict'
//
// const config = require('../config')
// const store = require('../store')
//
// const createFood = (formData) => {
//   console.log(formData)
//   return $.ajax({
//     url: config.apiUrl + `/foods`,
//     method: 'POST',
//     data: formData,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const updateFood = (id, formData) => {
//   console.log(id, formData)
//   return $.ajax({
//     url: config.apiUrl + '/foods/' + id,
//     method: 'PATCH',
//     data: formData,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// module.exports = {
//   createFood,
//   updateFood
// }
