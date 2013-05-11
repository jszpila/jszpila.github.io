###
Main script file for jszpila.github.com
Author: Jan Szpila
###
$ ->
  hour = new Date().getHours()
  theme = "dark"
  theme = "light"  if hour > 6 and hour < 18
  $("body").addClass theme
  $("nav a").tooltip placement: "bottom"
  $("#EmailLink").click (e) ->
    e.preventDefault()
    curVal = null
    parts = [19, 28, 35, 25, 18, 21, 10, "@", 16, 22, 10, 18, 21, ".", 12, 24, 22]
    i = 0
    x = parts.length

    while i < x
      curVal = parts[i]
      parts[i] = curVal.toString(36)  if typeof curVal is "number"
      i++
    window.open ["mailto:", parts.join(""), "?subject=Hi%2C%20Jan!"].join("")
    false