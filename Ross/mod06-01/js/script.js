///////Condition 1
$( "button" ).click(function() {
  $( "div" ).slideToggle( 1000, function() {
    
  });
});

///////Condition 2

// $( "div" ).mouseenter(function() {
//   $("h1").text($(this).text());
//  });


// $( "div" ).mouseleave(function() {
//   $("h1").text("jQuery Effects");
//  });

$("div").hover(
function (){
	 $("h1").text($(this).text())},	
function (){
	$("h1").text("jQuery Effects")}
)



///////Condition 3

$( "div" ).click(function() {
  $(this).fadeOut( 1000);
});



