'use strict'
// Click on item to select
// If click on another item, it de-selects the first
// Select is red border
//

var nameRef
var valueRef

$(document).ready(init)

function getRandomColor() {
  var temp = '000000' + Math.floor(Math.random() * 16777215).toString(16)
  temp = '#' + temp.substr(temp.length-6)
  console.log('tl:' + temp.length + ' temp:' + temp);
  return temp
}

function init() {
  nameRef = g('IdItemName')
  valueRef = g('IdItemValue')

  $('#IdUnsortedHost1').on('click', 'div', function(e) {

    e.target.style.backgroundColor = getRandomColor()
    // var $temp = $(e.target).detach()
    // $('#IdHost2').append($temp)
  })
  $('#IdSortedHost1').on('click', 'div', function(e) {

  })

  $('#IdSortedHost2').on('click', 'div', function(e) {

  })

  $('#IdSortedHost3').on('click', 'div', function(e) {

  })

  // Two options for click events
  // $().click()
  // $().on('click')
  $('#IdAddItem').click(addItem)
}

function g() {
  return document.getElementById(arguments[0])
}

function addItem() {
  var name = nameRef.value
  if (name.trim() === '') {
    nameRef.focus()
    return
  }

  var value = valueRef.value
  if (value.trim() === '') {
    valueRef.focus()
    return
  }

  g('IdItemName').value = ''
  g('IdItemValue').value = ''
  //var numOfItems = g('IdItemQty').value
  /*if ((numOfItems === '') || (numOfItems === 0)) {*/
    var $newElement = $('<div>')
    $newElement.css('background-color', getRandomColor())
    $newElement.addClass('cItem')
    $newElement.CPH_itemName = name
    $newElement.CPH_itemValue = value
    $('#IdUnsortedHost').append($newElement)
  /*} else {
    var $items = []
    for (var i = 0; i < numOfItems; i++) {
      var $newElement = $('<div>').addClass('cItem')
      $newElement.css('background-color', getRandomColor())
      $cups.push($newElement)
    }
    $('#IdUnsortedHost').append($items)
  }*/
  //console.log('Add item')
  // add to unsort
  // 1) Clear inputs
  /*
  By clicking to select, and then clicking another group, you can move items.
  (you should only be able to select one item at a time, and items should
  unselect after they are moved)
  Each group should show a current total of all of the numerical values of the items inside.
  */
}

function doClick(e) {

  e.target.style.backgroundColor = '#' + red + green + blue

}
