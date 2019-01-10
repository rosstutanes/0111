let btn = document.querySelector('#btn');
btn.addEventListener("click",getInput);
// function getInput() {
// 	let input = document.querySelector("#input").value;	
// 	if((input +0) % 4 == 0){
// 		console.log("The year is a leap year");
// 		document.getElementById("result").innerHTML = "The year is a leap year";
// 	}else if (isNaN(input) || input == null)  {
// 		console.log("Invalid");
// 		document.getElementById("result").innerHTML = "Invalid date entry";
// 	}else{
// 			console.log("The year is not a leap year");
// 			document.getElementById("result").innerHTML = "The year is not a leap year";
// 	}
// }


function getInput() {
	let input = document.querySelector("#input").value;	
	if(input.length >= 1){
		if((input +0) % 4 == 0){
			console.log("The year is a leap year");
			document.getElementById("result").innerHTML = "The year is a leap year";
		}else if (isNaN(input) || input == null)  {
			console.log("Invalid");
			document.getElementById("result").innerHTML = "Invalid date entry";
		}else{
				console.log("The year is not a leap year");
				document.getElementById("result").innerHTML = "The year is not a leap year";
		}
	}else{
		console.log("Invalid");
		document.getElementById("result").innerHTML = "Invalid date entry";
	}
}
