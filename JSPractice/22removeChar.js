let someString = "welcome to the jugle!";
let charPosition = 2;

function removeChar(someString, charPosition){
	let someString1 = someString.substring(0, charPosition);
	let someString2 = someString.substring(charPosition + 1, someString.length);
	return someString1 + someString2;
}

console.log(removeChar(someString, charPosition));
