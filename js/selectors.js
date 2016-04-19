'use-strict';

// $('img') element selector
// $('.pics') class selector
// $('#baby-ninja') id selector
// $('ul li') decendant selector
// $('div img:first-child') decendant selector first-child
// $("img[alt='the beatles']") alt tag selector
// $('div:last') last selector

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
  return $('.pics');
}

function firstListItem() {
  return $('ul#pic-list li:first');
}
