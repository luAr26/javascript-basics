const inputEl = document.querySelector("#product-name");
const productNameLengthEl = document.querySelector("#product-name-length");
const maxCharsAllowed = inputEl.getAttribute("maxlength");
// console.log(typeof +maxCharsAllowed);
productNameLengthEl.innerHTML = `${maxCharsAllowed}/${maxCharsAllowed}`;

inputEl.addEventListener("input", (e) => {
  const valueLength = e.target.value.length;
  const remainingChars = +maxCharsAllowed - valueLength;
  productNameLengthEl.innerHTML = `<span>${remainingChars}</span>/${maxCharsAllowed}`;
  if (remainingChars < 10) {
    inputEl.style.backgroundColor = "rgb(251, 208, 168)";
    productNameLengthEl.children[0].style.color = "red";
  } else {
    inputEl.style.backgroundColor = "white";
    // productNameLengthEl.children[0].style.color = "#000";
  }
});

const retrieveUserInput = () => {
  const enteredText = inputEl.value;
};
