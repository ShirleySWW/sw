const btnEl = document.getElementById("input-btn");
const btnEl1 = document.getElementById("delete-btn");
const btnEl2 = document.getElementById("tab-btn");
const boxEl = document.getElementById("input-box");
const ulEl = document.getElementById("leads-list");



let myLeads = [];
/*let listItems = [];*/

/*
function saveInput() {
    navigator.clipboard.writeText(boxEl.value) 
}*/
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

btnEl.addEventListener("click", function() {
  if (boxEl.value) {
    myLeads.push(boxEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    boxEl.value = ""}
})


btnEl1.addEventListener("dblclick",function(){
    myLeads = []
    localStorage.clear()
    render(myLeads)

})

/*const tabs = [ 
    {url: "au.linkedin.com"}
]*/

btnEl2.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
        //const activeTab = tabs[0]
        //const activeTabID = activeTab.id
    })

    //myLeads.push(tabs[0].url)
    //localStorage.setItem("myLeads",JSON.stringify(myLeads))
    //render(myLeads)
})

    /* 
    using array to hold listItems : render all items in the list v.s. render new item only
    
    function renderLeads() { 
        let listItems = []
        for (let i = 0; i < myLeads.length; i++) {
            listItems.push("<li>" + myLeads[i] + "</li>")
        }
         ulEl.innerHTML = listItems.join("")
        }

    function renderLead() {

    listItems is defined outside of click() 
        const i = myLeads.length - 1
        listItems.push("<li>" + myLeads[i] + "</li>")
        listItems.push("<li>" + boxEl.value + "</li>")

        ulEl.innerHTML = listItems.join("")
        /*listItems in array has , use join to join the value only with specified separator provided in join()
    }*/      
    /* 
    using string to hold listItems : render all items in the list v.s. render new item only 
 */
        /* 
        without hyper link
        function renderLeads() { 
        let listItems = ""
        for (let i = 0; i < myLeads.length; i++) {
            listItems += "<li>" + myLeads[i] + "</li>"
        }
         ulEl.innerHTML = listItems
        } 

        with hyper link */

        function render(leads) { 
        let listItems = ""
        for (let i = 0; i < leads.length; i++) {
            /*listItems +="<li><a href=\""+myLeads[i]+"\"target=\"_blank\">"+ myLeads[i] + "</a></li>"*/
            /*listItems +="<li><a href='"+ myLeads[i]+"' target='_blank'>" + myLeads[i] + "</a></li>"*/
            //listItems +="<li><a target='_blank' href='"+ myLeads[i]+"'>" + myLeads[i] + "</a></li>"
            listItems +=`
            <li>
                <a target="_blank" href="${leads[i]}"> 
                ${leads[i]} 
                </a>
            </li>
            `
           
        }
         ulEl.innerHTML = listItems
        }
         
        /* 
        function renderLead() { 
        let listItems = ulEl.innerHTML
        listItems += "<li>" + boxEl.value + "</li>"
        ulEl.innerHTML = listItems

        let listItems = "<li>" + boxEl.value + "</li>"
        ulEl.innerHTML += listItems

        } */

    /*
    navigator.clipboard.writeText(boxEl.value);
    btnEl.textContent = "Button Clicked!";
    myLeads.push(boxEl.value);
    ulEl.textContent = ""
    let listItems = ""; */
 
    /*l
    et listItems = []
    for (let i = 0; i < myLeads.length; i++) {     
        
        listItems += "<li>" + myLeads[i] + "</li>"   
        listItems.push("<li>" + myLeads[i] + "</li>")
        ulEl.textContent += myLeads[i] + " "; 
        ulEl.innerText += "<li>" + myLeads[i] + "</li>";
        ulEl.innerHTML += "<li>" + listItems[i] + "</li>";
        const liEl = document.createElement("li")
        liEl.textContent = myLeads[i]
        ulEl.append(liEl)
        console.log(listItems)
    }  
    ulEl.innerHTML = listItems.join("")
})  */

/*
const btnEl = document.getElementById("input-btn");
const boxEl = document.getElementById("input-box");
const ulEl = document.getElementById("leads-list");
let myLeads = ["111","222","333"];
btnEl.addEventListener("click", function() {
  
    let listItems = "";  
    for (let i = 0; i < myLeads.length; i++) {     
        listItems += "<li>" + myLeads[i] + "</li>"     
        console.log(listItems)
    }  
    ulEl.innerHTML = listItems
})  




const btnEl = document.getElementById("input-btn");
const boxEl = document.getElementById("input-box");
const ulEl = document.getElementById("leads-list");
let myLeads = ["111","222","333"];
btnEl.addEventListener("click", function() {

    let listItems = [] 
    for (let i = 0; i < myLeads.length; i++) {     
        listItems.push("<li>" + myLeads[i] + "</li>")
        console.log(listItems)
    }  
    ulEl.innerHTML = listItems

})  
*/




