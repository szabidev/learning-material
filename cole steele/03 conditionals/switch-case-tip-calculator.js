/*Create a function, tipCalculator(), that has two parameters,
Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18% */

const tipCalculator = (quality, tip) => {
    switch (quality) {
        case 'bad' :
        return tip * 0.05
        case 'ok' : 
        return tip * 0.15
        case 'good' : 
        return tip * 0.2
        case 'excellent' : 
        return tip * 0.3
        default :
        return tip * 0.18
    }
}
console.log(tipCalculator('good', 200))