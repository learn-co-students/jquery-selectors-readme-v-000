'use-strict';
// declare your functions here...
function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  return $('div.pics');
}

function firstListItem() {
  // The function should use a first-child selector to return the first list item in the ul with the ID pic-list.
  return $('ul#pic-list li:first-child ');
}
