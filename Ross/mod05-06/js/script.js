let bal = 500;

let load10 = document.getElementById("load10");
load10.addEventListener("click",function(){
	if(cell.value>0){
		if(bal > (10-1)){
			let cell = document.getElementById("cell").value;
			let newBal = bal - 10;
			console.log(newBal);
			cBal.innerHTML = "Php "	+ newBal;
			trans.innerHTML += "&#x20b1;" + 10 + " has been loaded to " + cell + "<br>";
			return bal = newBal;
		}else {
			alert("Insufficient Credit Balance")
		}
	}else {
		alert("Please input a mobile phone number")
	}
})

load50.addEventListener("click",function(){
	if(cell.value>0){
		if(bal > (50-1)){
			let cell = document.getElementById("cell").value;
			let newBal = bal - 50;
			console.log(newBal);
			cBal.innerHTML = "Php "	+ newBal;
			trans.innerHTML += "&#x20b1;" + 50 + " has been loaded to " + cell + "<br>";
			return bal = newBal;
		}else {
			alert("Insufficient Credit Balance")
		}
	}else {
		alert("Please input a mobile phone number")
	}
})

load100.addEventListener("click",function(){
	if(cell.value>0){
		if(bal > (100-1)){
			let cell = document.getElementById("cell").value;
			let newBal = bal - 100;
			console.log(newBal);
			cBal.innerHTML = "Php "	+ newBal;
			trans.innerHTML += "&#x20b1;" + 100 + " has been loaded to " + cell + "<br>";
			return bal = newBal;
		}else {
			alert("Insufficient Credit Balance")
		}
	}else {
		alert("Please input a mobile phone number")
	}
})



// 	newBal = "";
// 	parseInt(document.getElementById("newBal"));
// 	newBal = bal - 10;
// 	console.log(newBal);
// 	return newBal;
// })

// let load50 = document.getElementById("load50");
// load50.addEventListener("click",function(){
	
// 	bal = 500;
// 	newBal = "";
// 	parseInt(document.getElementById("newBal"));
// 	newBal = bal - 50;
// 	console.log(newBal);
// 	return newBal;
// })

// let load100 = document.getElementById("load100");
// load100.addEventListener("click",function(){
	
// 	bal = 500;
// 	newBal = "";
// 	parseInt(document.getElementById("newBal"));
// 	newBal = bal - 100;
// 	console.log(newBal);
// 	return newBal;
// })

// document.getElementById("history").innertHTML = 




// // let load50 = document.getElementById("load.50");
// // load10.addEventListener("click",load10())

// // let load100 = document.getElementById("load.100");
// // load10.addEventListener("click",load10())

// function reload10(){
// 	let x = document.getElementById("bal").value - 10;
// 	return x;
// }

// // function load50(){
// // 	let x = document.getElementById("bal").value + 50;
// // 	return x;
// // }

// // function load100(){
// // 	let x = document.getElementById("bal").value + 100;
// // 	return x;
// // }

// // let bal = load10();
// // let bal = load50();
// // let bal = load100();

// // document.getElementById("bal").innerHTML = bal;



