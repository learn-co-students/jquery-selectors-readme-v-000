// declare your functions here...

function paragraphSelector() {
  return $('p')
}

function lastImageSelector() {
  return $('div img:last')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('.pics')
}

function firstListItem() {
  return $('ul li:first')
}

  // 5) Selectors firstListItem() should return the first list item in the unordered list:
  //    ReferenceError: firstListItem is not defined
  //     at Context.<anonymous> (test/index-test.js:23:12)

