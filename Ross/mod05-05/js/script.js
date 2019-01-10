//while
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let go = document.getElementById("go");

document.getElementById("go")
.addEventListener("click", function (){
	if(input1.value > input2.value ){
		alert("1st number is greater than the second number")
	}else{
		let output1 = "";
		let count1 = input1.value;
			while (count1 <= input2.value){
			output1 += "<br>"+ count1;
			count1++;
			document.getElementById("doWhileLoop").innerHTML = output1;
			}
	}
})
//do while
// document.getElementById("go")
// .addEventListener("click", function (){

// 	if(input1.value > input2.value ){
// 		alert("1st number is greater than the second number")
// 	}else{
// 		let output2 = "";
// 		let count2 = input1.value;
// 		do {
//   		output2 += "<br>"+  count2;
//   		console.log(input1.value);
//   		count2++;
// 		}
// 		while (count2 <= input2.value);  
		
// 		document.getElementById("doWhileLoop").innerHTML = output2;
// 	} 
// })



//do while
// let output2 = ""
// let count2 = 0;

// do {
//   output2 += count2;
//   output2++;
// }
// while (count2 < 10);  

// document.getElementById("doWhileLoop").innerHTML = output2;

// document.getElementById("go")
// .addEventListener("click", function (){

	
// })

