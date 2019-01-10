

var aList = [];

document.getElementById("addItem")
.addEventListener("click", function(){
	let input = document.getElementById("input");
	aList.push(input.value);
	document.getElementById("arrList").innerHTML += "<li> "+ input.value + "</li>"
	document.getElementById("arrLength").innerHTML = aList.length;
	document.getElementById("arrLast").innerHTML = aList[aList.length-1];
	document.getElementById("arrFirst").innerHTML = aList[0];
})