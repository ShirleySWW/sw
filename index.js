let homescoreEl = document.getElementById("homescore-el")
let guestcoreEl = document.getElementById("guestscore-el")

let periodEl = document.getElementById("period-el")

let homeFoulEl = document.getElementById("homefoul-el")
let guestFoulEl = document.getElementById("guestfoul-el")

let homescore = 0
let guestscore = 0

let periodcount = 0

let homefoulCount = 0
let guestfoulCount = 0

function home1() {   
    homescore += 1
    homescoreEl.textContent = homescore

}

function home2() {   
    homescore += 2
    homescoreEl.textContent = homescore

}

function home3() { 
    homescore += 3
    homescoreEl.textContent = homescore
}

function guest1() {   
    guestscore += 1
    guestcoreEl.textContent = guestscore

}

function guest2() {   
    guestscore += 2
    guestcoreEl.textContent = guestscore

}

function guest3() {   
    guestscore += 3
    guestcoreEl.textContent = guestscore

}

function newGame() {
    homescore = 0
    guestscore = 0
    periodcount = 0
    homefoulCount = 0
    guestfoulCount = 0
    
    homescoreEl.textContent = 0
    guestcoreEl.textContent = 0
    periodEl.textContent = 0
    homeFoulEl.textContent = 0
    guestFoulEl.textContent = 0
}

function period() {
    periodcount += 1
    periodEl.textContent = "Period: " + periodcount

}

function homefoul() {
    homefoulCount += 1
    homeFoulEl.textContent = homefoulCount
}

function guestfoul() {
    guestfoulCount += 1
    guestFoulEl.textContent = guestfoulCount
}

