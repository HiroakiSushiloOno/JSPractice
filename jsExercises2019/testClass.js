const palin = class {
	constructor(word){
	this.word = word;
	this.randamNum = Math.random();
	}
	greet(){
	console.log("Hello!" + this.word);
	}
}

const firstWord = new palin("madam");
const secondWord = new palin("test");
console.log(firstWord.word);
console.log(firstWord.greet());
console.log(secondWord);
console.log(secondWord.greet());
