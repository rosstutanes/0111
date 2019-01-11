// This line creates an alert box.
alert('Hello!');
// This line prints the words Hello from the console.
console.log('Hello from the console');
// This will select the element with an ID of mainHeading and save the result in
// a variable called name.
let name  = document.getElementById('mainHeading');
// This will access the innerHTML property of the name and display it in the console.
console.log(name.innerHTML);
// This will access the innerHTML property of name.
name.innerHTML;
console.log(name.innerHTML);
name.innerHTML = 'Tuitt Coding Bootcamp';



let heading = document.getElementById('mainHeading');
// This will set the color to red.
heading.style.color = 'Red';

// This will set the background to color yellow.
heading.style.background = 'Yellow';

// Add an Event Listener. The first parameter is the kind of
// event it will listen to
heading.addEventListener('dblclick', function(){
	console.log('You clicked me');
	heading.style.color = 'Green';
});