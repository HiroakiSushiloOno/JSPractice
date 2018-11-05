var obj1 = {
	name : "hiroaki",
	age : "31"
};
var obj2 = {
	name : "hiroaki",
	age : 31
};

function compare2Objects1(obj1, obj2){
if(obj1 === obj2){
	return "Those are the same.";
}else{
	return "Those are not the same.";
}
}
console.log(compare2Objects1(obj1, obj2));

function compare2Objects2(obj1, obj2){
if(obj1 == obj2){
	return "Those are the same.";
}else{
	return "Those are not the same.";
}
}
console.log(compare2Objects2(obj1, obj2));
