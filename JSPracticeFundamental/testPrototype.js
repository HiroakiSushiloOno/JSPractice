function Person(first, last, age, eyecolor){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyecolor;
}
Person.prototype.nationality = "Japanese";
var hiroaki = new Person("Hiroaki", "Ono", 31, "black");

console.log(hiroaki);
console.log(Person);
