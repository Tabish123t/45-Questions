// Names array
var Names = ["Aqib", "Farhan", "Ilyas", "Samir", "Usama"];
var firstANames = Names.find(function (Names) { return Names.startsWith('A'); });
console.log(firstANames); // PRINTS AQIB NAME 
var firstFNames = Names.find(function (Names) { return Names.startsWith('F'); });
console.log(firstFNames); // PRINTS FARHAN NAME 
var firstINames = Names.find(function (Names) { return Names.startsWith('I'); });
console.log(firstINames); // PRINTS ILYAS NAME 
var firstSNames = Names.find(function (Names) { return Names.startsWith('S'); });
console.log(firstSNames); // PRINTS SAMIR NAME 
var firstUNames = Names.find(function (Names) { return Names.startsWith('U'); });
console.log(firstUNames); // PRINTS USAMA NAME 
