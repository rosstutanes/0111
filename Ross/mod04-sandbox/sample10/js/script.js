let body = document.getElementById('body');

// function myFunction(){
// 	body.style.background = 'blue';
// }

// function changeBodyToRed(){
// 	body.style.background = 'red';

// }

// let x; // initiate
// let y;

// function add(x,y){
// 	x = 6; //declaration
// 	y = 1;

// console.log(x + y);
// }

// add();

document.getElementById('changeBodyColor').addEventListener('click', function myFunction(){
	body.style.background = 'blue';
})


let red = document.querySelector('#toRed');
red.addEventListener('click',function changeBodyToRed(){
	body.style.background = 'red';

}
)