// console.dir(document);
document.body.children[1].children[0].children[1].children[0].href =
  "https://www.google.com";

const linkEl = document.querySelector("#external-link");
linkEl.href = "https://yahoo.com";

// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice
const h1 = document.body.children[0].children[0].children[0];
// console.dir(h1);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)
const h1Parent = h1.parentElement;
// console.dir(h1Parent);
const h1Sibling = h1.nextElementSibling;
// console.dir(h1Sibling);
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
const h1ID = document.getElementById("main-heading");
// console.dir(h1ID.innerText);
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice
const secondP = document.querySelector(".second");
// console.dir(secondP);
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
secondP.innerText = "The text of this paragraph was changed via JavaScript.";

// Insert new HTML element
// 1. Create a new element
const newAnchorEl = document.createElement("a");
newAnchorEl.href = "http://google.com";
newAnchorEl.innerText = "google";
// console.dir(newAnchorEl);

// 2. Get access to the parent element
const parentElement = document.querySelector(".first");
// console.dir(parentElement);

// 3. Insert the new element
parentElement.append(newAnchorEl);

// Remove elements
// 1. Select the element to be removed
const firstH1Element = document.querySelector("h1");
// 2. Remove it!
// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element);

// Move elements
const thirdP = document.querySelector(".third");
const containerEl = thirdP.parentElement;
// console.dir(secondP);
// console.dir(thirdP);
containerEl.insertBefore(thirdP, secondP);

// innerHTML
console.dir(secondP.innerHTML);
secondP.innerHTML = `Hi! this is <strong>important</strong>! Follow <a href="https://github.com/" target="_blank">this link</a>.`;
