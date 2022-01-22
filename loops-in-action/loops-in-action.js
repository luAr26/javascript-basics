// console.log("Loops in action");
// First Example: Sum numbers

const calcSumBtnEl = document.querySelector("#calculator button");

const calculateSum = () => {
  const userNumberInputEl = document.querySelector("#user-number");
  const enteredNumber = userNumberInputEl.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber += i;
  }

  const outputResultEl = document.querySelector("#calculated-sum");
  outputResultEl.innerText = sumUpToNumber;
  outputResultEl.style.display = "block";
};

calcSumBtnEl.addEventListener("click", calculateSum);

// Second Example: For-of loop
const highlightLinksBtnEl = document.querySelector("#highlight-links button");

const highlightLinks = () => {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
};

highlightLinksBtnEl.addEventListener("click", highlightLinks);

// Third Example: For-in loop
const dummyUserData = { firstName: "Max", lastName: "Schwarzmuller", age: 32 };
const displayUserDataBtnEl = document.querySelector("#user-data button");

const displayUserData = () => {
  const outputDataEl = document.querySelector("#output-user-data");
  outputDataEl.innerHTML = "";
  for (const key in dummyUserData) {
    const newUserDataListItemEl = document.createElement("li");
    const outputText = `${key.toUpperCase()}: ${dummyUserData[key]}`;
    newUserDataListItemEl.innerText = outputText;
    outputDataEl.append(newUserDataListItemEl);
  }
};

displayUserDataBtnEl.addEventListener("click", displayUserData);

// Forth example: While loop

const rollDiceBtnEl = document.querySelector("#statistics button");

const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const deriveNumberOfDiceRolls = () => {
  const targetNumberInputEl = document.querySelector("#user-target-number");
  const diceRollsListElement = document.querySelector("#dice-rolls");
  const enteredNumber = +targetNumberInputEl.value;

  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber === enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollListEl = document.createElement("li");
    const outputText = `Roll ${numberOfRolls}: ${rolledNumber}`;
    newRollListEl.innerText = outputText;
    diceRollsListElement.append(newRollListEl);
    hasRolledTargetNumber = rolledNumber === enteredNumber;
  }

  const outputTotalRollsEl = document.querySelector("#output-total-rolls");
  const outputTargetNumberEl = document.querySelector("#output-target-number");

  outputTotalRollsEl.innerText = numberOfRolls;
  outputTargetNumberEl.innerText = enteredNumber;
};

rollDiceBtnEl.addEventListener("click", deriveNumberOfDiceRolls);
