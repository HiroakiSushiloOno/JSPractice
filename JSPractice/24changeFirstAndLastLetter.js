let someString = "Change me!";
let temp;

function change1stAndLast(someString){
	temp = someString.substring(someString.length - 2, someString.length -1)
	+ someString.substring(1, someString.length - 2)
	+ someString.substring(0, 1);
	console.log(temp);
}
change1stAndLast(someString);
