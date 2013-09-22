#################################################
# Main script file for jszpila.github.com
# Author: Jan Szpila
#################################################

$ ->
  tblCntr = $('#TableContainer')
  curSection = null

  $('header').addClass('bg-' + Math.floor((Math.random() * 5) + 1))

  $('#EmailLink').click (e) ->
    e.preventDefault()
    curVal = null
    parts = [19, 28, 35, 25, 18, 21, 10, '@', 16, 22, 10, 18, 21, '.', 12, 24, 22]
    i = 0
    x = parts.length

    while i < x
      curVal = parts[i]
      parts[i] = curVal.toString(36)  if typeof curVal is 'number'
      i++

    window.open ['mailto:', parts.join(''), '?subject=Hi%2C%20Jan!'].join('')

  $('.exp-link').on 'click', (e) ->
    e.preventDefault()
    curSection = $('#' + $(this).attr('rel'))

    curSection.show()
    tblCntr.slideToggle()

  $('#ExpBack').on 'click', (e) ->
    e.preventDefault()
    tblCntr.slideToggle(() ->
      curSection.hide()
    )