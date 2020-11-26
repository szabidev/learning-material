// Another Loop exercise 
//Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, 
//returns a new array with each string in the array prepended with 'baby '.

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = (array) => {
    let newArray = [];
    for (let i = 0; i < animals.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(convertToBaby(animals));