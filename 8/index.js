let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

    let index1 = Math.floor(Math.random() * fighters.length)
    let index2 = Math.floor(Math.random() * fighters.length)

    //let result1 = fighters[index1]
    //let result2 = fighters[index2]

    //let result = fighters[index1] + " vs " + fighters[index2]

    //let result = fighters[index1] & " vs " & fighters[index2]  & is NOT a string concatenation operator is a bitwise AND operator

    //console.log(result1) 
    //console.log(result2)
    //console.log(result) 
    stageEl.textContent = fighters[index1] + " vs " + fighters[index2]
})
