'use-strict';


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
  return $('div .pics');
}

function firstListItem() {
  return $('ul#pic-list li:first-child');
}

// Element selector
$('img');
// Class Selector
$('.pics');
// id selector
$('#baby-ninja');
// dependent selector
$('ul li');
// first child
$('div img:fist-child');
// alt tag selector
$("img[alt='the beatles making faces']");
// last selector
$('div:last');