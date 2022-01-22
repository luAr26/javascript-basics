const myName = "Max";
let isLoggedIn = true;

if (myName === "Max") {
  console.log("Hello from conditional!");
} else {
  console.log("Your name is not Max!");
}

if (isLoggedIn) {
  console.log("The user is logged in!");
}

const enteredUserName = "Maximilian";

// Truthy and falsy values
// falsy values 0, '', undefined, null, false, -0, 0n, NaN, document.all
if (enteredUserName) {
  console.log("Input is valid");
} else {
  console.log("Input is not valid");
}
