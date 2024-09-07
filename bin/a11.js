"use strict";
// Names array
Object.defineProperty(exports, "__esModule", { value: true });
let Names = ["Aqib", "Farhan", "Ilyas", "Samir", "Usama"];
let firstANames = Names.find(Names => Names.startsWith('A'));
console.log(firstANames); // PRINTS AQIB NAME 
let firstFNames = Names.find(Names => Names.startsWith('F'));
console.log(firstFNames); // PRINTS FARHAN NAME 
let firstINames = Names.find(Names => Names.startsWith('I'));
console.log(firstINames); // PRINTS ILYAS NAME 
let firstSNames = Names.find(Names => Names.startsWith('S'));
console.log(firstSNames); // PRINTS SAMIR NAME 
let firstUNames = Names.find(Names => Names.startsWith('U'));
console.log(firstUNames); // PRINTS USAMA NAME 
