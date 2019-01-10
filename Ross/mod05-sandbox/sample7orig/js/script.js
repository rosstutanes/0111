let username = prompt("Please enter your name", "---");
document.getElementById("username").innerHTML = "Hello " + username + "! <br>How are you today?";

contact()

function contact(){
	let address = prompt("Please enter your address: ");
	let landline = prompt("Please enter your landline #: ");
	let mobile = prompt("Please enter your mobile #: ");
	if ((address.length == 0) || (landline.length == 0) || (mobile.length == 0)){
		contact();
	}else{
		document.getElementById("contact").innerHTML = "Contact Information: " + "<br>" + "<br>" +"Address: " + address + "<br>" + "Landline #: " + landline + "<br>" + "Mobile #: " + mobile;
	}
}





  

