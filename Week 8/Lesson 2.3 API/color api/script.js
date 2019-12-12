/* global $ */

const app = {}

app.init = () => {
  $('.form').on('submit', e => {
    e.preventDefault()
    const userInput = $('.form-input').val()
    app.getColourID(userInput)
  })
}

app.getColourID = (userInput) => {
  $.ajax({
    url: `https://fun-fun-colors.herokuapp.com/colorcheck`,
    method: 'GET',
    dataType: 'json',
    data: {
      q: userInput
    }
  }).then(res => {
    if (res.colorIndex === `doesnt exist`) {
      window.alert(`Color doesn't exist!`)
    } else {
      app.getColourByID(res.colorIndex)
    }
  }).catch(err => {
    console.error(err)
  })
}

app.getColourByID = (id) => {
  $.ajax({
    url: `https://fun-fun-colors.herokuapp.com/color/${id}`,
    method: 'GET',
    dataType: 'json'
  }).then(res => {
    app.printColour(res.color)
  }).catch(err => {
    console.error(err)
  })
}

app.printColour = (color) => {
  const colourCard = `<div class="colour-wrapper">
      <div class="colour-display" style="background-color: ${color};"></div>
      <h5 class="colour-name">${color}</h5>
  </div>`

  $('.wrapper').append(colourCard)
}

$(document).ready(() => {
  app.init()
})
