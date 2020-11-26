function average(array) {
    let total = 0;
    array.forEach(score => {
        total += score
    })
    let avg = total / array.length
    return Math.round(avg)
}

let scores = [90,98,89,100,100,86,94]
console.log(average(scores));

let scores2 = [40,65,77,82,80,54,73,63,95,49]
console.log(average(scores2));