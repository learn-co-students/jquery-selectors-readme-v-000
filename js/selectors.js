// declare your functions here...
function paragraphSelector() {
var pTags =  $('p')
return pTags
}
function lastImageSelector() {
  var lastImage = $('img:last')
  return lastImage
}
function ninjaBabySelector() {
  var ninjaBaby = $('#baby-ninja')
  return ninjaBaby
}
function divSelector() {
  var picsDivs = $('.pics')
  return picsDivs
}
function firstListItem() {
  var firstItem = $("#pic-list li:first-child")
  console.log(firstItem)
  return firstItem
}
