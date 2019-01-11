let div = document.querySelectorAll('div');
let input = document.querySelector('input');

for(i=0; i<div.length; i++) {
	div[i].addEventListener('click', clicker);
	function clicker(e) {
	let type = e.target.innerHTML;
	input.value += type;
	console.log(e.path[0]);
}}


