var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
	if (currentUser == "Mario") { 	//con doble ==, compruebo valor
		currentUser = "Juan";		//con = , asigno valor
	} else if(currentUser == "Juan"){
		currentUser = "Josh";
	}else{
		currentUser = "Mario";
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

//funciona!