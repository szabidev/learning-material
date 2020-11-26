// .reverseArray() Challenge
//Write a function, reverseArray(), that takes in an array as an argument and returns a new array with 
//the elements in the reverse order.
//There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. 

const sentence = ['sense.','make', 'all', 'will', 'This'];
// Should print ['This', 'will', 'all', 'make', 'sense.'];

const reverseArray = (array) => {
    // declared newArray variable to store the reveresed array in it
    let newArray = [];
    //looping through the array backwards, (array.length-1 = last index(item) of the array)
    for (i = array.length -1; i >= 0; i--) {
    // push every item that looped in the newArray variable    
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray(sentence));


// NEM MUKODIK