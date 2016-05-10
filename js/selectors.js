'use-strict';

// declare your functions here...
function paragraphSelector(){
  var paragraph = $('p');
  return paragraph;
}

function lastImageSelector(){
  var lastImage = $('img:last');
  return lastImage;
}

function ninjaBabySelector(){
  var babyNinja = $('#baby-ninja');
  return babyNinja;
}

function divSelector(){
  return $('.pics');
}

function firstListItem(){
  return $('ul#pic-list li:first-child');
}