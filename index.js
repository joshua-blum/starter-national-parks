const descriptions = document.querySelectorAll(".description-display");
for(let desc of descriptions.values()){
    let content = desc.innerText;
    if(content.length > 250){
        content = content.slice(0,250) + '<a href="#">...</a>';
    }
    console.log(content);
    desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");
    for(let rating of ratings){
        let ratingValue = parseFloat(rating.innerText);
        if(ratingValue > 4.7){
            rating.style.fontWeight = "bold";
        }
    }
    //change the applied CSS class dynamically depending on the value
    for(let rating of ratings){
        let ratingValue = parseFloat(rating.innerText)
        if(ratingValue > 4.7){
            rating.classList.add("high-rating");
            rating.classList.remove("value");
        }
    }
/*
//removing elements
const main = document.querySelector("main");
const park = main.querySelector(".park-display");
main.removeChild(park);
*/
//select the parks on the page using the park class as selector
const parks = document.querySelectorAll(".park-display");
//get the number of parks using .length
const numberParks = parks.length;
//create a new element
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit!`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

// --- EVENT LISTENERS -- //

const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
    console.log("Yout clicked the button!", event);
});

const allBtns = document.querySelectorAll(".rate-button");
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        console.log(event.target);
        console.log(event.target.parentNode);
    });
});

//sorting by name
const nameSorter = document.querySelector("#name-sorter");
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("You clicked the name sorter!");
    //get main element containing all parks
    const main = document.querySelector("main");
    //get nodelist of all parks
    const parksList = main.querySelectorAll(".park-display");
    //empty main element
    main.innerHTML = "";
    //convert nodelist to an array (for convenience)
    const parksArray = Array.from(parksList);
    //sort array
    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        if(parkAName < parkBName) return -1;
        else if (parkAName > parkBName) return 1;
        else return 0;
    })
    //iterate through array, append each park to main
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
})

//sorting by rating
const main = document.querySelector("main");
const parksList = document.querySelectorAll(".park-display");
const ratingSorter = document.querySelector("#rating-sorter");

const sortByRating = (park1, park2) => {
    const park1Rating = parseFloat(park1.querySelector(".rating-display").querySelector(".value, .high-rating").innerText);
    //const park1Rating = park1.querySelector(".rating-display").querySelector(".value");
    console.log(park1Rating);
    const park2Rating = parseFloat(park2.querySelector(".rating-display").querySelector(".value, .high-rating").innerText);
    console.log(park2Rating);
    if(park1Rating < park2Rating) return -1;
    else if (park1Rating > park2Rating) return 1;
    else return 0;
}
const ratingSortHandler = (event) => {
    event.preventDefault();
    main.innerHTML = "";
    const parksArray = Array.from(parksList);
    parksArray.sort(sortByRating);
    parksArray.forEach((park) => {
        console.log(park);
        main.appendChild(park);
    })
}

ratingSorter.addEventListener("click", ratingSortHandler);

console.log("Before!");
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Loaded!");
});
console.log("After!");
