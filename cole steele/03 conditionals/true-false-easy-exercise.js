//3. Conditionals/ true false comparison

// hungerLevel valtozo, ezt fogom leellenorizni hogy true vagy false
let hungerLevel = 7;
// a kondiciom, ha a zarojelben levo kondiciom true az if code block-bol fog futni a kod, ha false akkor az else code block-bol
if(hungerLevel > 7) {
    console.log('Time to eat');
} else {console.log('We can eat later')}
// mood es tirednessLevel valtozo, itt ket erteket fogok osszehasonlitani es megnezni hogy true vagy false
let mood = 'sleepy';
let tirednessLevel = 6;
// a kondiciom amit ellenorzok hogy true vagy false, itt mindeket kondiciom true kell legyen (&& operator miatt)
if (mood === 'sleepy' && tirednessLevel > 8) {
    // ha true ez fog futni
    console.log('Time to sleep')
} else {
    //ha false akkor ez fog futni
    console.log('Do some work')};