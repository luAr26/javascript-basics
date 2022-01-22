// For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// The for-of loop
const users = ["Max", "Anna", "Joel"];

console.log(`--- For-of loop ---`);

for (const user of users) {
  console.log(user);
}

// The for-in loop
const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

console.log(`--- For-in loop ---`);

for (const propertyName in loggedInUser) {
  console.log(`${propertyName}: ${loggedInUser[propertyName]}`);
}

// The while loop

console.log(`--- While loop ---`);

let n = 0;
while (n < 10) {
  console.log(n);
  n++;
}
