//4. Conditionals/ Short circuit evaluation

// tool variable erteke, ures string
let tool = '';
// megvaltoztatom a tool erteket
tool = 'marker';
// uj valtozot hozok letre amiben futni fog a kondiciom.
// ha a tool valtozom erteke ures string marad(tehat false) , akkor a masik erteket fogja ki irni (or ||) azt hogy 'pen'
let writingUtensil = tool || 'pen';
// ki irom a konzolba az erteket
console.log(`The ${writingUtensil} is mightier than the sword`)