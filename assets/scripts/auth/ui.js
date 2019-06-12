'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('form').trigger('reset')
  $('#SignUpWindow').modal('hide')
  $('#sign-in-message').text('thanks for signing up, now sign in!')
  $('.signup-button').hide()
  setTimeout(() => $('#sign-in-message').text(''), 5000)
}

const onSignUpFailure = responseData => {
  $('#nosignup').text('sign up failed')
  $('form').trigger('reset')
  setTimeout(() => $('#nosignup').text(''), 5000)
}

const onSignInSuccess = responseData => {
  $('#signin-success').text('welcome! let\'s get to eating!')
  $('form').trigger('reset')
  store.user = responseData.user
  $('.showBody').removeClass('hidden')
  $('.jumbotron').addClass('hidden')
  $('#SignInWindow').modal('hide')
  $('#sign-in-message').text('')
  $('.navbar').removeClass('hidden')
  setTimeout(() => $('#signin-success').text(''), 5000)
}

const onSignInFailure = responseData => {
  $('#nosignin').text('sign in failed')
  $('form').trigger('reset')
  setTimeout(() => $('#nosignin').text(''), 5000)
}

const onUpdatePasswordSuccess = () => {
  $('#passwordmessage').text('password changed successfully!')
  $('form').trigger('reset')
  setTimeout(() => $('#passwordmessage').text(''), 5000)
}

const onUpdatePasswordFailure = () => {
  $('#passwordmessage').text('failed to update password')
  $('form').trigger('reset')
  setTimeout(() => $('#passwordmessage').text(''), 5000)
}

const onSignOutSuccess = () => {
  $('#goodbyemessage').text('sign out successfully! happy eating!')
  $('form').trigger('reset')
  $('.showBody').addClass('hidden')
  $('.jumbotron').removeClass('hidden')
  $('.signup-button').show()
  $('.navbar').addClass('hidden')
  $('.nav-auth').addClass('hidden')
  $('.content').empty()
  setTimeout(() => $('#goodbyemessage').text(''), 5000)
}

const onSignOutFailure = () => {
  $('#signin-success').text('failed to sign out')
  $('form').trigger('reset')
  setTimeout(() => $('#signin-success').text(''), 5000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onUpdatePasswordSuccess,
  onUpdatePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
