// Condition 1
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",compare1)
	function compare1(){
		let input1 = Number(document.querySelector("#input1").value);
		let input2 = Number(document.querySelector("#input2").value);
		if(input1 > input2){
			document.getElementById("result1").innerHTML = input1;
		}else{
			document.getElementById("result1").innerHTML = input2;
		}
	}
//Condition 2
document.getElementById("btn2").addEventListener("click", function(){
	let input3 = document.getElementById("input3").value;
	let result2 = document.getElementById("result2");
	if (input3 >= 90){
		result2.innerHTML = "A";
	}else if (input3 >= 80){
		result2.innerHTML = "B";
	}else if (input3 >= 70){
		result2.innerHTML = "C";
	}else if (input3 >= 65){
		result2.innerHTML = "D";
	}else {
		result2.innerHTML = "F";
	}
})
//Condition 3
document.getElementById("btn3").addEventListener("click", function(){
	let input4 = document.getElementById("input4").value;
	let result3 = document.getElementById("result3");
	if (input4 == 1) {
		result3.innerHTML = '"Kamusta Mundo"';
	}else if(input4 == 2){
		result3.innerHTML = '"Annyeong Sesang"';
	}else if(input4 == 3){
		result3.innerHTML = '"Kon\'nichiwa sekai"';
	}else if(input4 == 0){
		result3.innerHTML = '"Hello World!"';
	}
})
//Condition 4 -- CLEAR ENTRIES
document.getElementById("clear1")
.addEventListener("click",function(){
	document.getElementById("input1").value = "";
	document.getElementById("input2").value = "";
	document.getElementById("result1").innerHTML = "";
})
document.getElementById("clear2")
.addEventListener("click",function(){
	document.getElementById("input3").value = "";
	document.getElementById("result2").innerHTML = "";
})
document.getElementById("clear3")
.addEventListener("click",function(){
	document.getElementById("input4").value = "0";
	document.getElementById("result3").innerHTML = '"Hello World!"';
})