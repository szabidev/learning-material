//8. Conditionals with logical operators/ Racenumber exercise
// Declare raceNumber variable wich will be a random integer between 0 - 1000
let raceNumber = Math.floor(Math.random() * 1000);
// Declare registration variable wich is set to true (for earlyregistered people)
const registeredEarly = true;
// Declare age variable, wich will set the runners age
let age = 18;
// adding 1000 to the racenumber variable 
raceNumber += 1000;
// Declare if conditional wich will check the runners age and if its registered early, will return a value depending on the input (age, and registration)
if (age > 18 && registeredEarly) {
    console.log(`Run at 9:30 with number ${raceNumber}`);
} else if(age > 18 && !registeredEarly) {
    console.log(`Run at 11:00 with number ${raceNumber}`);
} else if(age < 18) {
    console.log(`Run at 12:30 with number ${raceNumber}`);
} else {
    console.log('See registration desk');
}