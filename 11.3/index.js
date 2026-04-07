// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
//const email = "Hey " + recipient + "! How is it going? Cheers Per"
const sender = "Shirley"


const email = `
Hey ${recipient}! 
How is it going? 
Cheers ${sender}
`

console.log(email)