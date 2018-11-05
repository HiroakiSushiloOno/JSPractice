const testCSV = "Name, Age, From\n, Hiroaki, 31, Hokkaido";
let titleRow = [];
let valueRow = [];
let countNextLine = 0;
let commaPosition = [];
let position = 0;
for(let i = 0; i < testCSV.length; i++){
	if(i == ","){
	commaPosition.push(i);
	}else if(i == "\n"){
	countNextLine = 1;
	}
}


if(countNextLine == 0){
	
}else{
}

for(let i = 0; i < commaPosition.length + 1){
titleRow[i] = testCSV.substring(position, commaPosition[i]);
position = commaPosition + 1;
}
