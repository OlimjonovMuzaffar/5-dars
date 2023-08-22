"use strict";

const inpWidth = document.querySelector(".input__width");
const inpheight = document.querySelector(".input__height");
const inpName = document.querySelector(".input__name");
const inpColor = document.querySelector(".input__color");
const formEl = document.querySelector("form");
const btn = document.querySelector("button");
const trainEl = document.querySelector(".train");

let randomArray = [
  "triancle",
  "trepazoid",
  "parallelogram",
  "rhombus",
  "pentagon",
  "hexagon",
  "heptagon",
  "octagon",
  "nonagon",
  "decagon",
  "bevel",
  "rabbet",
  "left__arrow",
  "right__arrow",
  "left__point",
  "right__point"
];

btn.addEventListener("click", (e) => {
  trainEl.style.background = inpColor.value;
  trainEl.style.width = inpWidth.value;
  trainEl.style.height = inpheight.value;

  for (let i = 0; i < randomArray.length; i++) {
      if (inpName.value === randomArray[i]) {
        trainEl.classList.toggle(randomArray[i]);
      }
    
  }
});
