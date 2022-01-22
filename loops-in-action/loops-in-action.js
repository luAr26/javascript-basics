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
