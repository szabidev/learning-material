//2. Variables/ Dog Years

// myAge valtozo az en korommal, ez lehet const mert nem fog valtozni
const myAge = 30;
// earlyYears valtozo let-el deklaralom mert valtozni fog/valtozhat
let earlyYears = 2;
// uj erteket adok az earlyYears-nek, mar nem emlekszem a logikara de igy kell szamolni, 
earlyYears *= 10.5;
// laterYears valtozo , ennek is erteket cserelek
let laterYears = myAge - 2;
laterYears *= 4;
// myAgeInDogYears valtozo, ez lesz majd az ertek amit kiirok a konzolba, ez a ket Years valtozonak az osszege
let myAgeInDogYears = earlyYears + laterYears;
// valtozo a nevemmel
let myName = 'Szabi'.toLowerCase;
//Kiirom az ertekeket a konzolba
console.log(`My name is ${myName} I am ${myAge} years old in human years, and ${myAgeInDogYears} old in dog years`);
// MIERT KESOBB VALTOZTATTAM MEG AZ ERTEKEKET?