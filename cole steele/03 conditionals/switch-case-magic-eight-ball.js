//7. Swich/Case Magic eight ball
// userName valtozo
let userName = 'Szabi';
// userName condition with ternary operator
// ha nincs megadva userName akkor a masik uzenetet irja ki
userName ? console.log('Hello Szabi') : console.log('Hello')
//
let userQuestion = 'Can you answer my question?'
//
console.log(`The user asked: ${userQuestion}`);
// randomNumber valtozo, random szam 0 es 7 kozott, integer, nemtudom miert nem mukodik konzolban
const randomNumber = Math.floor(Math.random() * 8);
// eightball valtozo aminek az erteke egy ures string es a switch-tol kapja majd az ertket attol fuggoen hogy milyen szamot generalok random
switch (randomNumber) {
    case 0 : 'It is certain';
    break;
    case 1 : 'It is decidedly so';
    break;
    case 2 : 'Reply hazy try again';
    break;
    case 3 : 'Cannot predict now';
    break;
    case 4 : 'Do not count on it';
    break;
    case 5 : 'My sources say no';
    break;
    case 6 : 'Outlook not so good';
    break;
    case 7 : 'Signs point to yes';
    break;
};
console.log(eightBall);