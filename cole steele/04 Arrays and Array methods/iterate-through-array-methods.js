//.forEach()
const fruits = ['mango', 'papaya', 'pineapple', 'apple' , 'orange'];

//with arrow function
// iterate over the fruits array to log I want to eat a + the name of each fruit to the console. 
//For example I want to eat a mango.
fruits.forEach(gyumolcs =>  
 console.log('I want to eat a ' + gyumolcs)
); 

// with function declaration
function print(gyumolcs) {
  console.log('I want to eat a ' +  gyumolcs);
}
fruits.forEach(print);



// .map()
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

//Use .map() to create a new array that contains the first character of each string in the animals array.
//Save the new array to a const variable named secretMessage.
const secretMessage = animals.map(letters => {
  return letters[0];
})
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
//Use .map() to divide all the numbers in bigNumbers by 100. 
//Save the returned values to a variable declared with const called smallNumbers
const smallNumbers = bigNumbers.map(calc => {
  return calc / 100;
});

console.log(smallNumbers)



// .filter()
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call the .filter() method on randomNumbers to return values that are less than 250. 
//Save them to a new array called smallNumbers
const smallNumbers = randomNumbers.filter(kicsiSzam => {
// Ne felejtsem el mindig a parametert adom meg a callback function - ban , nem a variablet amit filterelek
  return kicsiSzam < 250;
});
console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Invoke .filter() on the favoriteWords array to turn elements that have more than 7 characters.
//Save the returned array to a const variable named longFavoriteWords
const longFavoriteWords = favoriteWords.filter(szavak => {
  return szavak.length > 7;
});
console.log(longFavoriteWords);


// .findIndex()
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
//Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' 
//and save the returned value to a const variable named foundAnimal.
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
//Let’s see if we can find the index of the first animal that starts with the letter 's'.
//Call .findIndex() on the animals array return the index of the first element that starts with 's'. 
//Assign the returned value to a const variable named startsWithS.
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

console.log(startsWithS)



// .reduce()
const newNumbers = [1, 3, 5, 7];

//declare a variable with a value of calling reduce() on newNumbers 
//Provide an argument of a callback function with 2 parameters.
const newSum = newNumbers.reduce((accumulator, currentValue) => {
//console.log('The value of accumulator: ', accumulator);
//console.log('The value of currentValue: ', currentValue);
//a return statement that adds accumulator to currentValue.
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue)
  return accumulator + currentValue;
}, );

//The second argument acts as an initial value for the accumulator.
//Add a second argument of 10 to .reduce().
console.log(newSum);


// Right iterator choosing exercise
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array with only those elements longer than 7 characters.
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);



//Mini Linter Project
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//In the code editor, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s split the string into individual words and save them in a new array called storyWords.

let storyWords = story.split(' ');
//console.log(storyWords.length);

const betterWords = storyWords.filter(word => {
 return !unnecessaryWords.includes(word)
})
//console.log(betterWords)

//There is an array of words called overusedWords. These are words overused in this story.
//You want to let the user of your program know how many times they have used these overused words. 
//There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;
for (word of storyWords) {
  if (word === 'really') {
    reallyCount +=1;
  } else if (word === 'very') {
      veryCount +=1;
  } else if (word === 'basically') {
    basicallyCount +=1;
  }
}
//console.log(reallyCount, veryCount, basicallyCount)

//Now, count how many sentences are in the paragraph.
//This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) 
//or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable 
//for each word that has a period or exclamation mark as its final character.

let sentences = 0;

storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences +=1;
  }
});
//console.log(sentences)


//Now, log the betterWords array to the console as a single string.
console.log(betterWords.join(''))

//Congratulations! You’ve improved the original paragraph and given the user some important information 
//about his or her work. Think about ways in which you can extend this project, potentially by using other 
//JavaScript knowledge you have.
//Here are some ideas:
//For the overused words, remove it every other time it appears.
//Write a function that finds the word that appears the greatest number of times.
//Replaced overused words with something else.
