'use-strict';

// declare your functions here...

//$('img')

//$('.pics')

//$('#baby-ninja')

//$('ul li')

//$('div img:first-child')

//$("img[alt='the beatles making faces']")

//$('div:last')

function paragraphSelector() {
//select and return all p elements in document
  return $('p');
}

function lastImageSelector() {
//select and return the last image
  return $('img:last')
}

function ninjaBabySelector() {
//select and return the element with #baby-ninja
  return $('#baby-ninja');
}

function divSelector() {
  return $('.pics');    
}

function firstListItem() {
  //general form of: parent-tag child-tag: nth-child
  //but adding attribute of parent-tag
  return $("ul[id='pic-list'] li:first-child");
}