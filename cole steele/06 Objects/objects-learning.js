// Accessing Properties in an object with dot operator
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
 // assigned to crewCount numCrew key from spaceship object which has a value of 5
 // did the same with planetArray, I assigend flightPath key to it
  const crewCount = spaceship.numCrew;
  const planetArray = spaceship.flightPath;
  console.log(crewCount);
  console.log(planetArray);

//--------------------------------------------------------------------------------------------------------------
// Accesing with Bracket notation []
  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  //Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. 
  //Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.
  let isActive = spaceship['Active Mission'];
  //Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.
  console.log(spaceship[propName])
  
  console.log(spaceship['Active Mission'])
//-----------------------------------------------------------------------------------------------------------------
// Property Assingment - adding items , reassignin new values 
    let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  //Reassign the color property of the spaceship object to have a value of 'glorious gold'
  spaceship.color = 'glorious gold';
  //Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
  spaceship.numEngines = 8;
  //Use the delete operator to remove the 'Secret Mission' property from the spaceship object.
  delete spaceship['Secret Mission'];
  console.log(spaceship);
//-----------------------------------------------------------------------------------------------------------------
// Methods
    let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

    //Below the retreatMessage variable in the code editor, create an alienShip object. 
    //It should contain a method .retreat() which will console.log() the retreatMessage.
    const alienShip = {
    retreat : function () {
        console.log(retreatMessage);
    }
    };
    //Add another method to your object literal. This method, .takeOff(), should console.log() 
    //the string 'Spim... Borp... Glix... Blastoff!'.
    alienShip.takeOff = function() {
    console.log('Spim... Borp... Glix... Blastoff!');
    }
    //Invoke your two methods: first .retreat() then .takeOff().
    alienShip.retreat()
    alienShip.takeOff()
//-----------------------------------------------------------------------------------------------------------------
//Nested Objects
    let spaceship = {
        passengers: null,
        telescope: {
          yearBuilt: 2018,
          model: "91031-XLT",
          focalLength: 2032 
        },
        crew: {
          captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') },
           'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
        },
        engine: {
          model: "Nimbus2000"
        },
        nanoelectronics: {
          computer: {
            terabytes: 100,
            monitors: "HD"
          },
          'back-up': {
            battery: "Lithium",
            terabytes: 50
          }
        }
      }; 
      //Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it.
      //Make sure to use bracket and dot notation to get the value of the food through nested access 
      const capFave = spaceship.crew.captain['favorite foods'][0];
      //Right now the passengers property has a value of null. Instead, assign as its value an array of objects. 
      //These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.
      spaceship.passengers = [{
        szabi: {
          gender: 'male',
          age: 30
        },
        nomi: {
          gender: 'female',
          age: 32
        }
      }];
      //Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). 
      //Make sure to use bracket and dot notation to get the passenger object through nested access 
      const firstPassenger = spaceship.passengers[0]
      
      console.log(firstPassenger)
//---------------------------------------------------------------------------------------------------------------
//Pass by reference
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' 
  //property to 'avocado oil'.
    const greenEnergy = obj => {
    obj['Fuel Type']= 'avocado oil';
    }
  //Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that 
  //object’s disabled property to true.
  const remotelyDisable = obj2 => {
    obj2.disabled = true
  }
  //Call your two functions with the spaceship object in the code editor, then console.log() 
  //the spaceship object to confirm those properties were changed/added.
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);

//---------------------------------------------------------------------------------------------------------------
// for...in Iteration through objects
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
//Using for...in, iterate through the spaceship.crew object in the code editor and console.log() 
//a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
for (let names in spaceship.crew) {
  console.log(`${names}: ${spaceship.crew[names].name}`)
};
//Using for...in, iterate through the spaceship.crew object in the code editor and console.log()
//a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.
for (const diploma in spaceship.crew) {
  console.log(`${spaceship.crew[diploma].name}: ${spaceship.crew[diploma].degree}`)
}
//---------------------------------------------------------------------------------------------------------------
// this Keyword
  //There is an object robot, add a property of model and assign to it a value of '1E78V2'. 
  //Add another property, energyLevel and assign to it a value of 100.
const robot = {
  model : '1E78V2',
  energyLevel : 100,
  //Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), 
  //return the following string by using interpolation:
  //I am MODEL and my current energy level is ENERGYLEVEL.  
  //Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!
  provideInfo () {
    return(`I am ${this.model} and my current energy level is ${this.energyLevel}`)
  }
};
  //Now to check .provideInfo() has access to the internal properties of robot. 
  //Log the result of calling .provideInfo() method on robot to the console. 
  //confused with invoking and console-ing!!!
console.log(robot.provideInfo())

//---------------------------------------------------------------------------------------------------------------
//Getters
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  //In robot, create a getter method named energyLevel using the get keyword. 
  //Leave function body blank for now.
  get energyLevel() {
//Inside the getter method, add an if statement to check if this._energyLevel is a number using the
//typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. 
//Replace ENERGYLEVEL with the value of this._energyLevel.
//Make sure you return the string and not logging it to the console.    
    if (typeof this._energyLevel === 'number'){
      return `My current energy level is ${this._energyLevel}`
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};
//Log the result of calling the getter method energyLevel on robot to the console.
//Notice that the method will return a formatted response rather than just accessing a property!
console.log(robot.energyLevel);
//---------------------------------------------------------------------------------------------------------------
// Setters
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
//Currently, in robot there is a getter method for numOfSensors but no setter method!
//What if we need to add or remove some sensors? Let’s fix that problem.
//Add a setter method named numOfSensors using the set keyword. Provide a parameter of num.  
  set numOfSensors(num) {
//There are a couple of things we should do in the setter method:
//Add a check to see if num is a number using the typeof operator.
//num should also be greater than or equal to 0.
//If both conditions are met, reassign this._numOfSensors to num.    
if(typeof num === 'number' && num >= 0) {
  this._numOfSensors = num;
} else { console.log('Pass in a number that is greater than or equal to 0');
}
  }
};
//Use the numOfSensors setter method on robot to assign _numOfSensors to 100.
robot.numOfSensors = 100;
//To check that the setter method worked, console.log() robot.numOfSensors.
console.log(robot.numOfSensors)

//---------------------------------------------------------------------------------------------------------------
// FACTORY FUNCTIONS
//Create a factory function named robotFactory that has two parameters model and mobile. 
//Make the function return an object. In the object, add a key of model with the value of the model parameter.
// Add another property that has a key of mobile with a value of the mobile parameter.
//Then add a method named beep without a parameter that will log 'Beep Boop' to the console.
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};
//Use your factory function by declaring a const variable named tinCan. 
//Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' 
//and the second argument of true.
const tinCan = robotFactory('P-500' , true);
//Let’s now check what tinCan can do! Call .beep() on tinCan.
//You should see 'Beep Boop' printed to the console which means the factory function produced a robot object!
tinCan.beep()