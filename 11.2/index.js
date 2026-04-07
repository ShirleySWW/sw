// Use .innerHTML to render a Buy! button inside the div container


/*const containerEl = document.getElementById("container");

containerEl.innerHTML = `
  <button>Buy!</button>
  <p id="message"></p>
`;
const messageEl = document.getElementById("message");

containerEl.addEventListener("click", function() {
    const messageEl = document.getElementById("message");
    messageEl.textContent = "Thank you for buying!"
})*/





const containerEl = document.getElementById("container");

containerEl.innerHTML = "<button onclick = \"message()\">Buy!</button><p id=\"message\"></p>";
const messsageEl = document.getElementById("message");

function message() {
    /*const messsageEl = document.getElementById("message");*/
    messsageEl.textContent = "Thank you for buying!"

}




/*const containerEl = document.getElementById("container");

containerEl.innerHTML = "<button onclick = \"message()\">Buy!</button>";

function message() {
    containerEl.innerHTML += "<p>Thank you for buying!</p>"
}*/