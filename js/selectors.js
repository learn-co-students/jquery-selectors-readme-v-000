// declare your functions here...

/*$('img') //tag 

$('.pics') //class 

$('#baby-ninja') //id

$('ul li')

$('div img:first-child')

$("img[alt='the beatles making faces']")

$('div:last')*/

function paragraphSelector(){
  return $('p');
}

function lastImageSelector(){
  return $('img:last');
}

function ninjaBabySelector (){
  return $('#baby-ninja');
}

function divSelector(){
  return $('.pics');
}

function firstListItem(){
  return $('ul#pic-list li:first-child'); 
}