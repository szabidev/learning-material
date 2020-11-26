//Conditionals with Switch/Case
let athleteFinalPosition = 'first place';
// switch kondicio, ami a zarojelben van azt hasonlitom (if)
switch (athleteFinalPosition) {
    // ha az athleteFinalPosition === 
    case 'first place' : console.log(`You get gold medal!`);
    // break - folytassa a kovetkezo kondicioval
    case 'second place' : console.log(`You get silver medal!`);
    break;
    case 'third place' : console.log(`You get bronze medal!`);
    break;
    //ha egyik sem igaz akkor legyen egy deafult ertek (else)
    default : console.log(`No medal awarded!`);
    break;
    // ebbol is ki kell lepni, MASKEPP UJRA KEZDI A HASONLITAST?
};