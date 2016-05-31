// declare your functions here...
//select all p tags (paragraph)
function paragraphSelector(){
  return $('p');
}
//return last image on the page
function lastImageSelector(){
  return $('img:last');
}

//select the img id using #, to get the baby
function ninjaBabySelector(){
  return $('#baby-ninja');
}

//select last 2 divs. Use " . " to select classes
function divSelector(){
  return $('.pics');
}

//return the first child in unordered list of pic-list
function firstListItem(){
  return $('ul#pic-list li:first');
}
