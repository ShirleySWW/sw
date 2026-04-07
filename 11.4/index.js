const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting,name,emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}` 
    
    //welcomeEl.textContent = greeting + ", Per Harald Borgen 👋"
}

greetUser("Welcome back","Shirley","👋")



function add(a,b) {

    const sum = a + b
    console.log(sum)

}

add(9,102)

function getFirst(arr) {
    console.log(arr[0])
}

getFirst([1,0,9])