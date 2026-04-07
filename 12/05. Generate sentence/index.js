// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

/*function generateSentence(desc, arr) {
    const n = arr.length
    let result = `The ${n} ${desc} are ${arr[0]}`
    for (let i = 1; i < n; i++) {
    const a = arr[i]
    result += ", " + a  
    }
    console.log(result)
}
generateSentence("largest countries", ["China", "India", "USA"])*/



function generateSentence(desc, arr) {
    
    let result = `The ${arr.length} ${desc} are `
    const lastI = arr.length - 1
    
    for (let i = 0; i < arr.length; i++) {
        if (i < lastI) {result += arr[i] + ", "}
        else result += arr[i]
    }
    console.log(result)
}
generateSentence("largest countries", ["China", "India", "USA"])