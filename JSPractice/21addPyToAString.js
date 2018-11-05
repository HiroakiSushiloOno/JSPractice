let someString = "thon";
function addPY(someString){
	if(someString === null || someString === undefined || someString.substring(0, 2) === "Py"){
		return someString;
	}else{
		return "Py" + someString;
	}
}
console.log(addPY(someString));
