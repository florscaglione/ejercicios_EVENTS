window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

//segundo botón (sin usar la misma funcion que en
//el primer botón, lo hago de la otra forma para 
//saber utilizar las dos):
let button = document.querySelector("#button2");
button.addEventListener("click", function() {
	alert("Your second function!");
});

//funciona!