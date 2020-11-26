const plantNeedsWater = function (day) {
    // my condition that will be checked inserted in the code block
    if(day === 'wednesday') {
     // if day = wednesday, will return true - water the plant
        return true;
    } else {
        // any other day will return false - don't water the plant
        return false;
    }
};
// calling plantNeedsWater function and logging it to the console - will return false because the argument is tuesday
console.log(plantNeedsWater('tuesday'))