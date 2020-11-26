// 1. Variables/ Temperature 

// kelvin hofok variable
const kelvin = 0;
// celsius hofok variable
const celsius = kelvin - 273;
// fahrenheit hofok variable
let fahrenheit = celsius *(9/5) + 32;
// lekerekitem a fahrenheit variable erteket egy egesz szamra
fahrenheit = Math.floor(fahrenheit);
// newton hofok variable
let newton = celsius * (33/100);
// lekerekitem a newton variable erteket egy egesz szamra
newton = Math.floor(newton);
// kiirom az ertekeket a konzolba
console.log(`Kelvin: ${kelvin}, Celsius: ${celsius}, Fahrenheit: ${fahrenheit}, Newton: ${newton}`)
//  MAR MEGADTAM AZ KELVIN ERTEKET UGYHOGY MINDIG EZZEL A SZAMMAL FOG DOLGOZNI. 
// HOGYAN TUDOM KICSERELNI AZ ERTEKEKET HOGY KULONBOZO ERTEKEKET KAPJAK VISSZA. PL KELVIN 30, STB