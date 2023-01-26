// Our JS Code goes here

document.addEventListener('DOMContentLoaded', ()=>{ 
    
    firstFetch(URL) 
    allFetch(URL) 
}) 



let URL = 'http://localhost:3000/houses'

//fetch first house

function firstFetch(URL){
    fetch('http://localhost:3000/houses')
    .then(response => response.json())
    .then(data => {
        setupHouseDetails(data[0]);
    })
}


setButton()

function allFetch(URL){
    fetch(URL)
    .then(response => response.json())
    .then(house => {
        house.array.forEach(house => {
            displayHouse(house)
        });
    })
}

function setupHouseDetails(data){
    const amount = document.getElementById('title')
    amount.textContent = data.amount;

    const description = document.getElementById('runtime')
    description.textContent = data.description;

    const location = document.getElementById('place')
    location.textContent = data.location;

}

function setButton(){
    var button = document.getElementById("myButton");
    var form = document.getElementById("myForm");

    button.addEventListener("click", ()=>{
    form.style.display = "block";
      });
}

setButton()


