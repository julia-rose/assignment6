//How to select elements of a page in the JS console

$("body")
$(".wrapper")

//How to make sure your JS doesn't start running before all elements have loaded

$(document).ready( function() {
	//JS code goes here
})

//How to show and hide elements of the page

$("body").show();
$("body").hide();

//How to make elements fade in or fade out
//If you want, indicate time in milliseconds

$("body").fadeIn();
$("body").fadeOut(4000);  //this will take 4 seconds

//How to make elements slide
//You can also indicate time in milliseconds for this action

$("body").slideUp(1000);
$("body").slideDown();

//How to animate your CSS properties
//Indicate time in milliseconds

$("body").animate({
	opacity: 0.25,
	width: 70%
}, 2000 );

//How to make something happen when an element is clicked
$("body").click( function(){
	//JS code goes here
	alert("You clicked!");
})

