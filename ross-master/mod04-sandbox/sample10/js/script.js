let body = document.body;

document.getElementById('changeBodyColor').
addEventListener('click', function myFunction() {

	body.style.background = 'blue';

})

let red = document.querySelector('#toRed');

red.addEventListener('click', function changeBodyToRed () {

	body.style.background = 'red';

})