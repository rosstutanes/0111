let btn = document.querySelector('#btn');
btn.addEventListener("click",getInput);
function getInput() {
	let input = document.querySelector("#input").value;	
	if(input % 2 == 0){
		console.log("It's an even number !!");
		document.getElementById("result1").innerHTML = "It's an even number";
	}else{
			console.log("It's an odd number !!");
			document.getElementById("result1").innerHTML = "It's an odd number";
	}
}

