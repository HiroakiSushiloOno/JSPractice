var someString = "welcome to the jungle!";
function replaceText(someString){
	if(someString.length < 2){
		return "It should be longer than 2 charcters.";
	}else{
		let tempString = 
		someString.substring(someString.length - 1, someString.length) + someString.substring(1, someString.length - 1)
		+ someString.substring(0, 1);
		return tempString;
	}
}
console.log(replaceText(someString));

