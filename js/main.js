// Variables
let greeting = "Hi my name is Max";
let myNumber = 32;
console.log(greeting);
console.log(myNumber);

// Arrays
let hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

// Objects
let job = { title: "Web developer", place: "Munich", salary: 50000 };
console.log(job.title);

// Performing Operations
let adultYears = myNumber - 18;
console.log(adultYears);

// Functions
// function calculateAdultYears(age) {
//   return age - 18;
// }

// const calculateAdultYears = function (age) {
//   return age - 18;
// };

const calculateAdultYears = (age) => age - 18;

console.log(calculateAdultYears(42));
