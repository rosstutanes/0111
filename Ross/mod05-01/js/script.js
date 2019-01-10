let btn = document.querySelector('#btnAdd');
btn.addEventListener("click", addInput)



function addInput(){
	let num1 = document.querySelector("#input1").value;
	let num2 = document.querySelector("#input2").value;
	let result = Number(num1) + Number(num2)
	console.log(result);
	document.getElementById("result").innerHTML = result;
	document.getElementById("operation").innterHTML = "Addition"


}

let btn2 = document.querySelector('#btnSub');
btn2.addEventListener("click", subInput)

function subInput(){
	let num1 = document.querySelector("#input1").value;
	let num2 = document.querySelector("#input2").value;
	let result = Number(num1) - Number(num2)
	console.log(result);
	document.getElementById("result").innerHTML = result;
}

let btn3 = document.querySelector('#btnMult');
btn3.addEventListener("click", multInput)

function multInput(){
	let num1 = document.querySelector("#input1").value;
	let num2 = document.querySelector("#input2").value;
	let result = Number(num1) * Number(num2)
	console.log(result);
	document.getElementById("result").innerHTML = result;
}

let btn4 = document.querySelector('#btnDiv');
btn4.addEventListener("click", divInput)

function divInput(){
	let num1 = document.querySelector("#input1").value;
	let num2 = document.querySelector("#input2").value;
	let result = Number(num1) / Number(num2)
	console.log(result);
	document.getElementById("result").innerHTML = result;
}

let btn5 = document.querySelector('#btnMod');
btn5.addEventListener("click", modInput)

function modInput(){
	let num1 = document.querySelector("#input1").value;
	let num2 = document.querySelector("#input2").value;
	let result = Number(num1) % Number(num2)
	console.log(result);
	document.getElementById("result").innerHTML = result;
}