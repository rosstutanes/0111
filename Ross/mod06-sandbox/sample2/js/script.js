// $("button").on("click", function (){
// 	$("div").fadeOut(1000), function (){
// 	console.log("Fade out effect");
// 	$(this).remove();
// 	};
// });





$( "button" ).click(function() {
  $( "div" ).slideToggle( 2000, function() {
    // Animation complete.
  });
});