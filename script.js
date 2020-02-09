$(document).ready(function(){

$(".citySearch").on("click", function(){
    event.preventDefault();
    let city = $(".cityInput").val();
  let newCity = $("<li>").text(city);
  newCity.attr("class","list-group-item");
  $(".cityList").prepend(newCity);
  $(".cityInput").val("");
});





});