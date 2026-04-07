let player1 = 102
let player2 = 107

function getFastestRaceTime() {
    if (player1 < player2) {
        return player1
    }
    else if (player1 > player2) {
        return player2
    }
    else {
        return player1
    }
}

function getTotalRaceTime() {
    return player1 + player2
}

//let totalRaceTime = getTotalRaceTime()
//console.log(totalRaceTime)


let fastestRase = getFastestRaceTime()
console.log(fastestRase)


let hasCompletedCourse = true
let givesCertificate = true

// only call if both conditions are true
if (hasCompletedCourse === true && givesCertificate === true) {
    //if (givesCertificate === true) {
        return "Yes"
    //}
}

if (hasCompletedCourse && givesCertificate) {
        return "Yes"
}


let course = {
    title: "learn CSS Grid for free",
    lessons: 16,
    creator: "SW",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html","CSS"]
}








