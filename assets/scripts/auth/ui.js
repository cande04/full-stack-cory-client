'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#SignUpWindow').modal('hide')
  $('#sign-in-message').text('Thanks for signing up, now sign in!')
  $('.signup-button').hide()
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign up failed')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
  store.user = responseData.user
  $('.showBody').removeClass('hidden')
  $('.jumbotron').addClass('hidden')
  $('#SignInWindow').modal('hide')
  $('#sign-in-message').text('')
  $('.navbar-toggler').removeClass('hidden')
}

const onSignInFailure = responseData => {
  $('#message').text('Sign in failed :(')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onUpdatePasswordSuccess = () => {
  $('#message').text('Password changed successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onUpdatePasswordFailure = () => {
  $('#message').text('Update password failed :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('.showBody').addClass('hidden')
  $('.jumbotron').removeClass('hidden')
  $('.signup-button').show()
  $('.navbar').addClass('hidden')
  $('.navbar-toggler').addClass('hidden')
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failed :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
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
