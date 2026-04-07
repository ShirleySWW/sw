//let firstCard = getRandomCard()
//let secondCard = getRandomCard()
//let thirdCard = 10
let cards = []
let sum = 0
//let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")


function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13)+1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}
//getRandomCard()

function renderGame() {
    //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    cardsEl.textContent = "Cards: "
    
    for (i = 0; i<cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
        sum += cards[i]
    }
    
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
    message = "Do you want to draw a new card?"  
    } else if (sum === 21) {
    message = "Blackjack! Start a new game?"
    hasBlackJack = true
    } else {
    message = "You are out of the game. Start a new game?"
    isAlive = false
    }
messageEl.textContent = message
}

//start the game by generating 2 random variables and set isAlive to true
function startGame() {
    


if ((isAlive === false && hasBlackJack ===false)||(isAlive === true && hasBlackJack === true)) {

    cards = []
    cardsEl.textContent = "Cards: "
    sum = 0
    
    isAlive = true
    let firstCard = getRandomCard()
    //let secondCard = getRandomCard()
    cards.push(firstCard)
    renderGame()
}   
}

function drawanewcard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    //sum += card
    cards.push(card)
    sum = 0
    renderGame()
    }

}

let player = {
    name:"SW",
    chips:145
}

//let playerName = "SW"
//let playerChips = 145

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips
//playerEl.textContent = playerName + ": $" + playerChips

