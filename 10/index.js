let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "?",
  "/",
];

//const character = [];

let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "?",
  "/",
];

let numbersToggle = document.getElementById("numbersToggle");
let symbolsToggle = document.getElementById("symbolsToggle");

let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let pswlen  = document.getElementById("pswlen");
let btn = document.getElementById("clickbutton");

function generatePassword() {
 // console.log("Generating passwords...");
  let r1 = "";
  let r2 = "";
  
  let len = Number(pswlen.value) || 15 ;

// "||" or, returns the first truthy value; in JS, 0 is also a falsy value

//console.log("Requested password length:", len);

//  if (len === 0) {
//    len = 15;
//  } else {
//    len;
//  }

  let character = [...letters]; // Start with letters by default

  //if (numbersToggle.checked && symbolsToggle.checked) {
  if (numbersToggle.checked && symbolsToggle.checked) {    
    character.push(...numbers, ...symbols);
  } else if (symbolsToggle.checked) {
    character.push(...symbols);
  } else if (numbersToggle.checked) {
    character.push(...numbers);
  }
//console.log("Character set length:", len);
  for (let i = 0; i < len; i++) {
    let index1 = Math.floor(Math.random() * character.length);
    let index2 = Math.floor(Math.random() * character.length);
    r1 += character[index1];
    r2 += character[index2];
  }

  result1.textContent = r1;
  result2.textContent = r2;
}

function copy1() {
  let copyText1 = document.getElementById("result1");
  navigator.clipboard.writeText(copyText1.textContent);
}

function copy2() {
  let copyText2 = document.getElementById("result2");
  navigator.clipboard.writeText(copyText2.textContent);
}

btn.addEventListener("pointerdown", function() {
    btn.style.backgroundColor = "rgba(93, 145, 114, 0.61)";
});

btn.addEventListener("pointerup", function() {
    btn.style.backgroundColor = "rgba(13, 235, 105, 0.61)";
})

