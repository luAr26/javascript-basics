// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
const btn1 = document.querySelector("button");
const btn2 = document.querySelector("#add-bg-btn");
const firstParagraph = document.body.children[2].children[1];
const thirdParagraph = document.body.children[2].children[3];

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

const btn1Callback = () => {
  console.dir(btn1);
  thirdParagraph.remove();
};

const btn2Callback = (e) => {
  console.dir(e.target);
  // firstParagraph.style.backgroundColor = "blue"; (4)
  firstParagraph.classList.add("bg-blue");
};

btn1.addEventListener("click", btn1Callback);
btn2.addEventListener("click", btn2Callback);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

// See lines 8 and 9

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
