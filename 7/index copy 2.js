let person = {
    name: "Shirley",
    age: 34,
    country: "China"
}

function logData() {
    //return person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()


let age = 15
if (age < 6) {
    console.log("free") 
}
else if (age <= 17) {
    console.log("child discount") 
}
else if (age <= 26) {
    console.log("student discount") 
}
else if (age <= 66) {
    console.log("full price") 
}
else {
    console.log("senior citizen discount") 
}

//let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
//let output = "The 5 largest countries in the work:"
console.log("The 5 largest countries in the work: ")
//for  (let i = 0; i < largeCountries.length; i +=1) {
for  (let i = 0; i < largeCountries.length; i ++) {
    //output += " - " + largeCountries[i]
    console.log("- " + largeCountries[i])
} 

//console.log(output)


let largeCountries = ["Tuvalu","India","USA","Indonesia","Manaco"]
//largeCountries.pop(0)
//largeCountries.pop("Manaco")
//largeCountries.push("China","Pakistan")

//console.log(largeCountries)
//console.log(largeCountries.pop(0)) --- will also remove the last even is in console.log
//console.log(largeCountries)
//console.log(largeCountries.pop(0))

largeCountries.pop()
largeCountries.shift()

largeCountries.push("Pakistan")
largeCountries.unshift("China")
console.log(largeCountries)

let dayOfMonth = 11
let weekday = "Friday"

if (dayOfMonth === 31 && weekday === "Friday") {
    console.log("face")
}

let hands = ["rock", "paper", "scissor"]
//let randomnumber = Math.random() * 3
//let i = Math.floor(randomnumber)
//console.log(hands[i])

function returnRandomItem() {
    //let randomnumber = Math.random() * 3
    //let i = Math.floor(randomnumber)

    let i = Math.floor(Math.random() * 3)
    return hands[i]
}
console.log(returnRandomItem())


