'use strict'
// Click on item to select
// If click on another item, it de-selects the first
// Select is red border
//
$(document).ready(init)

function getRandomColor() {
  var temp = '000000' + Math.floor(Math.random() * 16777215).toString(16)
  temp = '#' + temp.substr(temp.length-6)
  console.log('tl:' + temp.length + ' temp:' + temp);
  return temp
}

function init() {

  console.log('grc:' + getRandomColor())
  console.log('grc:' + getRandomColor())
  console.log('grc:' + getRandomColor())
  console.log('grc:' + getRandomColor())
  console.log('grc:' + getRandomColor())
  console.log('grc:' + getRandomColor())
  console.log('grc:' + getRandomColor())
  console.log('grc:' + getRandomColor())
  return

  $('#IdHost1').on('click', 'div', function(e) {

    e.target.style.backgroundColor = getRandomColor()
    // var $temp = $(e.target).detach()
    //$('#IdHost2').append($temp)
  })

  $('#IdHost2').on('click', 'div', function(e) {
    var red = getRandomColor()
    var green = getRandomColor()
    var blue = getRandomColor()
    //debugger
    e.target.style.backgroundColor = '#' + red + green + blue
    //console.log('clicked:' + e);
    var $temp = $(e.target).detach()
    //$('#IdHost1').append($temp)
  })

  $('#IdHost3').on('click', 'div', function(e) {
    var red = getRandomColor()
    var green = getRandomColor()
    var blue = getRandomColor()
    //debugger
    e.target.style.backgroundColor = '#' + red + green + blue
    //console.log('clicked:' + e);
    var $temp = $(e.target).detach()
    //$('#IdHost1').append($temp)
  })
  // Two options for click events
  // $().click()
  // $().on('click')
  $('#IdAddCup').click(addCup)
}

function g() {
  return document.getElementById(arguments[0])
}



function addCup() {
  var numOfCups = g('IdCupQty').value
  if ((numOfCups === '') || (numOfCups === 0)) {
    // The way to add single cup
    var $newElement = $('<div>')
    //console.log('rc:' + getRandomColor());
    $newElement.css('background-color', getRandomColor())
    //console.log('gc=' + $newElement.style.backgroundColor);
    //debugger

    $newElement.addClass('cCup')
    $('#IdHost1').append($newElement)
    //console.log('cup add called');
  } else {
    // The way to add multiple cups
    var $cups = []
    for (var i = 0; i < numOfCups; i++) {
      var $newElement = $('<div>').addClass('cCup')
      $newElement.css('background-color', getRandomColor())
      //console.log('gc=' + getColor());
      //debugger
      //$newElement.css('background-color', getColor())
      $cups.push($newElement)
    }
    $('#IdHost1').append($cups)
  }
}

function doClick(e) {
  var red = getRandomColor()
  var green = getRandomColor()
  var blue = getRandomColor()
  //debugger
  e.target.style.backgroundColor = '#' + red + green + blue
  //console.log('clicked:' + e);
}
