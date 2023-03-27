//initialising a variable name data

var data = 0;

//printing default value of data 
document.getElementById("count").innerText = data;

//creation of increment function
function increment() {
	data +=  1;
	document.getElementById("count").innerText = data;
}
//creation of decrement function
function decrement() {
	data -=  1;
	document.getElementById("count").innerText = data;
}
function reset() {
	data = 0;
	document.getElementById("count").innerText = data;
}

