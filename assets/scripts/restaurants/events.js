'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onIndex = (event) => {
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShow = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.show(formData)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

module.exports = {
  onIndex,
  onShow
}
