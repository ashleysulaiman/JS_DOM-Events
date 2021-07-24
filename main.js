/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

document.getElementById("node1").innerText = 
'I used the getElementByID("node1") method to access this';
document.getElementsByClassName("node2")[0].innerText =
'I used the getElementsByClassName("node2") to access this';
const h3Nodes = document.getElementsByTagName("h3");
for (let node of h3Nodes) 
{
    node.innerText = 
    'I used the getElementByTagName("h3") method to access of these';

}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
// BONUS: Add a link href to the <a>

const p = document.createElement("p");
p.innerText = "I am a p element";

const parent = document.getElementById("parent");
parent.appendChild(p);

const small = document.createElement("small");
small.innerText = "I am small";

parent.insertBefore(small, p);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// TODO: Remove the "New Child Node"

const newP = document.createElement("p");
newP.innerText = "New Child Node";
const exercise3 = document.getElementById("exercise3");
exercise3.replaceChild(newP, document.getElementById("oldNode"));
/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */

const box = document.getElementById("box");

let x = 0;
const inerval = setInterval(move, 10);

function move()
{
    x++;
    if (x >= 150) {
        
        clearInterval(interval);
    } else {
        box.style.left = x + "px";
    }
}
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

const btn = document.getElementById("btn");
function randomRGB() {
    return.Math.floor(Math.random() * 256);
}

btn.addEventListener("click", function( {
    box.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}), ${randomRGB()}`;
});