let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

//let appleShelfEl = getElementById("apple-shelf")
//let orangeShelfEl = getElementById("orange-shelf")

function shelf() {
    for (let i=0; i<fruit.length;i++) {
        //let pickedFruit = fruit[i]
        if (fruit[i] === "🍎") {
            appleShelf.textContent += fruit[i]
        } else {orangeShelf.textContent += fruit[i]}
    }
}
//console.log(shelf())
shelf()