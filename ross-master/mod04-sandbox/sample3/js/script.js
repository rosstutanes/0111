// Gets the user button with an id of btn1 using querySelector
let btn1 = document.querySelector('#btn1');
// Add an EventListener that calls a prompt box
btn1.addEventListener('click', function() {
	// The value entered in the prompt is saved in userInput
	let userInput = prompt('Enter Name');

	// Get the element with an id of output and write the value of userInput
	document.querySelector('#output').innerHTML = userInput;
})

// Create a button that will change the color of body background to green.
let greenBtn = document.querySelector('#greenBtn');

greenBtn.addEventListener('click', function() {
	document.body.style.background = 'green';
})