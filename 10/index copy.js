const characters = [
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

const character = [];

const letters = [
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

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
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

const numbersToggle = document.getElementById("numbersToggle");
const symbolsToggle = document.getElementById("symbolsToggle");

const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const pswlen  = document.getElementById("pswlen");

function generatePassword() {
 // console.log("Generating passwords...");
  let r1 = "";
  let r2 = "";
  let len = Number(pswlen.value) || 15;

  // Build a fresh, flat pool each time (do not mutate `letters`)
  const pool = [...letters];
  if (numbersToggle && numbersToggle.checked) pool.push(...numbers);
  if (symbolsToggle && symbolsToggle.checked) pool.push(...symbols);

  // Fallback to full `characters` if for some reason pool is empty
  if (pool.length === 0) pool.push(...characters);

  for (let i = 0; i < len; i++) {
    r1 += pool[Math.floor(Math.random() * pool.length)];
    r2 += pool[Math.floor(Math.random() * pool.length)];
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
