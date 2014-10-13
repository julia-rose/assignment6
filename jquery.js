$(document).ready(function(){

   $("li").click(function(){
    alert("You clicked!");
 });


   $("#sidebar").click(function(){
    $("div").slideUp(1000);
 });


   $(".article").click(function(){
   	$("#content").hide();
   	$("#content").fadeIn(4000);
   	});
	

	$("h1").click(function(){
	 $("h1").animate({left:'600px'},"slow");
		
	});

});