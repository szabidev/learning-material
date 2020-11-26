// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

const average = (avgValue) => {
    let total = 0;
    //loop over each num
    for (let nums of avgValue) {
    //add them together
    total += nums;
    }
    //divide by number of nums
    return total / avgValue.length;
};