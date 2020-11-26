//Number Guesser
//create secret number
// let secretNumber = 4;
// //ask user for guess
// let guess = Number(prompt("Guess a number"));
// alert(guess);
// //check guess
// if (guess === secretNumber) {
//     alert("You got it right");
// } else if(guess > secretNumber){
//     alert("Too high guess again");
// } else {
//     alert("Too low, guess again")
// };


//*******************************WHILE LOOPS************************

let count = 2;

//while this condition is true run the code
while (count < 20) {
    console.log("count is: " + count);
    count+=2;
}


// let str = "hello";
// let count = 0; //index
// while(count < str.length) {
//     console.log(str[count],count)
//     count++;
// };
// INFINITE LOOPS OCCUR WHEN THE TERMINATING CONDITION IN A LOOP IS NEVER TRUE


//WHILE LOOP EXERCISE

//Print all numbers between -10 and 19
// let counter = -10;
// while (counter < 20) {
//     console.log(counter);
//     counter++;
// }

//Print all even numbers between 10 and 40
// let count = 10;
// while (count <= 40) {
//     if(count % 2 === 0) {
//         console.log(count);
//     }
//     count++;
// }

// //Print all odd numbers between 300 and 333
// let threeHundred = 300;
// while (threeHundred <= 333) {
//     if (threeHundred % 2 === 1) {
//         console.log(threeHundred);
//     }
//     threeHundred++;
// }

// //Print all divisible numbers by 5 and 3 between 5 and 50
// let divisible = 5;
// while (divisible <= 50) {
//     if (divisible % 5 === 0 && divisible % 3 === 0) {
//         console.log(divisible);
//     }
//     divisible++;
// }


//Annoy-omatic Exercise
//ask the use "are we there yet"
//keep asking until they respond "yes" or "yeah"
//Alert "yay we finally made it"

// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah") { // answer.indexOf("yes") === -1 does not exist inside the string
//     var answer = prompt("Are we there yet?");
// }
// alert("Yay we made it");

//*******************************FOR LOOPS**********************

// let str = "hello";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i],i)
// }

// let str = "ahceclwlxo";
// for (let i = 1; i < str.length; i+=2) {
//     console.log(str[i], i )
// }

// //Print all numbers between -10 and 19

// for (let i = -10; i <= 19; i++) {
//     console.log(i)
// }

// //Print all even numbers between 10 and 40

// for (let i = 10; i <= 40; i+=2) {
//     console.log(i);
// }

// //Print all odd numbers between 300 and 333

// for (let i = 301; i <= 333; i+=2) {
//     console.log(i);
// }

// //Print all divisible numbers by 5 and 3 between 5 and 50

// for (let i = 5; i <= 50; i++) {
//     if(i % 5 === 0 && i % 3 === 0) {
//         console.log(i);
//     }
// }
//*******************************FUNCTIONS***********************

//write a function isEven() which takes a number argument and returns true if the number is even and false otherwise

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// //write a function factorial() which takes a number argument and returns the factorial of that number ex. 4! 4x3x2x1

// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     for (let i = num - 1; i >= 1; i--){
//         num = num * i
//     }
//     return num;
// }

// //write a function kebabToSnake which takes a single kebab-cased string argument and returns the snake_cased version

// function kebabToSnake(kebab){
//     let string = kebab.replace(/-/g,'_');
//     return string;
// }

// function calculateAge(birthYear) {
//     return 2020 - birthYear
// }
// let en = calculateAge(1989);
// let apa = calculateAge(1952);
// let anya = calculateAge(1954);
// let zsoltika = calculateAge(1979);
// let nomi = calculateAge(1988);
// console.log(anya,apa,nomi,zsoltika,en);

//*******************************ARRAYS*********************

// push,pop,unshift,shift,slice, splice methods are important
                        //TODO LIST
// let todos = [];
// let input = prompt("What would you like to do");

// while (input !== "quit") {
//     // handle input
//             if (input === "list") {
//                 console.log("**********")
//                 todos.forEach((todo,index) => {
//                     console.log(index + ": " + todo)
//                 })
//                 console.log("**********")
//             } else if (input === "new") {
//                 //ask for new todo
//                 let newTodo = prompt("Enter new Todo");
//                 //add to todos array
//                 todos.push(newTodo);
//                 console.log("Added ToDo"); 
//             } else if (input === "delete") {
//                 // ask for index to be deleted
//                 let index = prompt("Enter index of ToDo to delete");
//                 //delete that ToDo / splice() method
//                 todos.splice(index, 1);
//                 console.log("Deleted ToDo")
//             }
//     //ask again for input
//     input = prompt("What would you like to do");
// }
// console.log("ok you quit the app")
// can make 3 functions here for the statements and place the statement in the function , and then in the main function I just execute the other 3 functions

//*******************************ARRAY ITERATION

// With regular for loop

// let colors = ["red", "orange", "green", "yellow"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// Using forEach built in method

// colors.forEach( color => {
//     console.log(color)
// });

//Exercise

// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order
// function printReverse(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         console.log(array[i]);
//     }
// }

// //Write a function isUniform which takes an array as an argument and returns true if all elements in the array are identical
// function isUniform(array) {
//    return array.every(element => element === array[0])

// //******* With a for loop *******/
// //    let first = array[0]
// //    for (let i = 0; i < array.length; i++) {
// //        if (arr[i] !== first) {
// //            return false
// //        }
// //    }
// //     return true
// //};

//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers
// function sumArray(numArray) {
//     return numArray.reduce((total,currVal) => {
//         return total + currVal;
//     });

//  //With a forEach loop
//  let total = 0;
//  numArray.forEach(element => {
//      total += element;
//  });
//  return total;
//  //**********    
// };

//Write a function max() that accepts an array of numbers and returns the maximum number in the array
// function max(numArray) {
//     //using spread, so that the array can take multiple elements - not sure why tho
//     // return Math.max(...numArray);

//     // With a loop
//     let currentMax = numArray[0];
//     for (let i = 0; i < numArray.length; i++) {
//         if(currentMax < numArray[i]) {
//             currentMax = numArray[i]
//         }
//     }
//     return currentMax;
// }

//**********************************OBJECTS********************

// Create an array of movie objects.Each movie should have a title,rating and hasWatched properties.Iterate
//through the array and print out a string 
// const movieDB = [
//     {
//         title: "A series of Unfortunate events",
//         rating: 4.2,
//         hasWatched: true
//     },
//     {
//         title: "Shawshank Redemption",
//         rating: 5,
//         hasWatched: true
//     },
//     {
//         title: "Mad Max Fury Road",
//         rating: 3.8,
//         hasWatched: false
//     },
//     {
//         title: "Les Miserables",
//         rating: 4.6,
//         hasWatched: false
//     }
// ]
// movieDB.forEach( movie => {
//     if(movie.hasWatched === true){
//         console.log(`You have seen "${movie.title}" - ${movie.rating}`)
//     } else if(movie.hasWatched === false) {
//         console.log(`You have not seen "${movie.title}" - ${movie.rating}`)
//     }
// })
// OBJECT METHODS
// let obj = {
//     name: "Chuck",
//     age: 45,
//     isCool: false,
//     friends: ["bob","tina"],
//     add: function (friend) {
//         return this.friends.push(friend);
//     },
//     speak() {
//         console.log("I hate you")
//     }
// }

//*************************** DOM Select and Manipulate
// getElementById
// getElementByClassName
// getElementByTagName
// querySelector
// querySelectorAll

//**************************** DOM Events 

// We select an element and then add an event listener
//   addEvenetListener(typeOfEvent as a string, codeToRun when Event happens)
//   we can add more eventlisteners to the same element