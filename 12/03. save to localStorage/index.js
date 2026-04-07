// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

localStorage.setItem("01",JSON.stringify([1,2,3,4,5]))
const a = JSON.parse(localStorage.getItem("01"))
console.log(a)
console.log(a[0])



localStorage.setItem("02",JSON.stringify([1,2,3,4,5]))
const b = localStorage.getItem("02")
console.log(b)
console.log(b[0])



localStorage.setItem("03","[1,2,3,4,5]")
const c = localStorage.getItem("03")
console.log(c)
console.log(c[0])

localStorage.setItem("04","[1,2,3,4,5]")
const d = JSON.parse(localStorage.getItem("04"))
console.log(d)
console.log(d[0])