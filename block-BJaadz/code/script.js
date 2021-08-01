// Select the h1 element and store it in a variable named heading.

let heading = document.querySelector('h1');

// Check the typeof heading and log it.

console.log(typeof 'heading');

// Change the color of heading to black.

heading.style.color = "black";

// Select all the hr elements and store it in a variable named allHrs using querySelectorAll

let allHrs = document.querySelectorAll("hr");

/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray

Array.from converts an array kind of data into array so we can use methods like map, reduce

HINT:
let allHrsArray = Array.from(allHrs)
*/
let allHrsArray = Array.from(allHrs);

// Set the border of the all the hr elements to "1px solid tomato"

allHrsArray.map(hr => hr.style.border = "1px solid tomato");

// Change the background of all the hr to "antiquewhite" using for of loop.

for(let hr of allHrs){
  hr.style.background = "antiquewhite"
};

// Change the 'border-radius' of all the hr to "5px" using array.

allHrsArray.map(hr => hr.style.borderRadius = "5px");

// Change the alignment of the heading(h1) to center.

heading.style.textAlign = "center";

// Change the font size of the heading to 3rem.

heading.style.fontSize = "3rem";

// Change the border of hr with class 'image' to `2px solid purple`.

let image1 = document.querySelector('.image');
image1.style.border = "2px solid purple";

// Hide the box number 17 (last box).

let box17 = document.querySelector(".seventeen");
box17.style.display = "none";

// Change the border of all the hr element from solid to dashed type

allHrsArray.map(hr => hr.style.border = "dashed");

// Create a pragraph element and store it in variable named 'para' using `createElement`

let para = document.createElement("p");

// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."

para.innerText = "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure.";

// Remove all the elements from box 1

let rm = document.querySelector('.one');
rm.innerText = "";
// Replace all the elements inside box 1 with the para (you created above)

let rem = document.querySelector('.one');
rem.append(para);

/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16

  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild

  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild

  - Focus on the difference between element and node
*/
let box16 = document.querySelector(".sixteen");

// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.

let div2 = document.querySelector(".two");
div2.append("Append inserts as last child");

// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.

let div3 = document.querySelector(".three");
div3.prepend("Prepend inserts as first child");


// Change the border of box 4 to '1px solid black'

let div4 = document.querySelector(".four");
div4.style.border = '1px solid black'

// Change the border radius of box 5 to 10px.

let div5 = document.querySelector(".five");
div5.style.borderRadius = '10px';


// Change the text color of box 6 to black.

let div6 = document.querySelector(".six");
div6.style.textColor = 'black';

// Change the font size of the para inside box 1 to 0.8rem.

let div1 = document.querySelector(".one");
div1.style.fontSize = '0.8rem';

// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue

let allBox = document.querySelectorAll(".box");
allBox.forEach((box,index) => {
  if((index + 1) % 2 !== 0){
    box.style.backgroundColor = "aliceblue"
  }
});

// add a class named "awesome-box" to the box 6 using classList property of DOM element.

let div6 = document.querySelector(".six");
div6.classList.add("awesome-box");

// Using the toggle classList property toggle the class `awesome-box` from box 2

let div2 = document.querySelector(".two");
div2.classList.toggle("awesome-box");

// Using the remove classList proeprty remove the class `awesome-box` from box 4

let div4 = document.querySelector(".four");
div4.classList.remove("awesome-box");

// Change the background of the body to bisque

document.body.style.background = 'bisque';

// Create a button and store it in a variable named 'btn'

let btn = document.createElement('button');

// textContent of the button should be 'Click Me'

btn.textContent = "Click Me"

// Change the background of the btn to 'oldlace'

btn.style.backgroundColor = "oldlace";

// Change the font size of the btn to 1rem

btn.style.fontSize = "1rem";

// Change the border of the btn to '1px solid black'

btn.style.border = "1px solid black";

// Add the padding of '0.5rem 1rem' to btn

btn.style.padding = "0.5rem 1rem";

// Append the btn in box number 9

let div9 = document.querySelector(".nine");
div9.append(btn);


// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm

let imgElm = document.createElement('img');
imgElm.src = "https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"; 

// Select the box 7 using class seven

let box7 = document.querySelector('.seven');

// Remove all the elements form box seven

box7.innerHTML = "";

// Append the imgElm to the box no 7

box7.append(imgElm);

// Change the width and height of the image to `100%`

imgElm.style.width = "100%";
imgElm.style.height = "100%";

// Select the box 5 using class five

let box5 = document.querySelector('.five');

// Create an input element

let input = document.createElement('input');

// Change the placeholder property of the input element to "Enter your email!"

input.placeholder = "Enter your email!";

// Append the input element to the box 5 you selected above

box5.append(input);

// Create two anchor (a) element with  the text of `AltCampus` and `Google`

let anchorOne = document.createElement('a');
anchorOne.innerText = "AltCampus"

let anchorTwo = document.createElement('a');
anchorTwo.innerText = "Google";


// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`

anchorOne.href = "https://altcampus.school";

anchorTwo.href = "https://google.com";

// Append both the elements to box 5 you selected above.

box5.append(anchorOne,anchorTwo);