'use-strict';

// declare your functions here...

function paragraphSelector(){
  var paragraph = $('p');
  return paragraph;
}

function lastImageSelector(){
  var img = $('img:last');
  return img;
}

function ninjaBabySelector(){
  baby = $('#baby-ninja');
  return baby;
}

function divSelector(){
  return $('.pics');
}

function firstListItem(){
  return $('ul#pic-list li:first')
}
