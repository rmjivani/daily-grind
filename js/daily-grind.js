/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/


let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = {};

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

// retrieve data from querystring, if exists
if (urlParams.has("day")){
    myDay = urlParams.get("day");
}

// turn string into integer
myDay = parseInt(myDay);





switch(myDay){

 	case 0:
    	today =  "Sunday";
        coffee = {
            name: "Cold Brew", 
            pic: "cold-brew.jpg",
            alt: "A refreshing cold brew coffee over ice.",
            color: "saddlebrown",
            day: "Sunday",
            desc: 'Cold Brew! Perfect for a relaxed weekend reset.'
        };
 	break;

 	case 1:
    	today =  "Monday";
        coffee = {
            name: "Pumpkin Spice Latte", 
            pic: "pumpkin-spice-latte.jpg",
            alt: "A warm pumpkin spice latte with foam.",
            color: "chocolate",
            day: "Monday",
            desc: 'Bring cozy fall flavor to the start of the week.'
        };
 	break;

 	case 2:
   	    today = "Tuesday";
        coffee = {
            name: "Bubble Tea", 
            pic: "bubble-tea.jpg",
            alt: "A pic of a yummy bubble tea.",
            color: "pink",
            day: "Tuesday",
            desc: 'I like me some Bubble Tea!'
        };
 	break;

 	case 3:
    	today =  "Wednesday";
        coffee = {
            name: "Mocha", 
            pic: "mocha.jpg",
            alt: "A rich mocha coffee drink.",
            color: "peru",
            day: "Wednesday",
            desc: 'Espressor blend with chocolate!'
        };
 	break;

 	case 4:
    	today =  "Thursday";
        coffee = {
            name: "Caramel Latte", 
            pic: "caramel-latte.jpg",
            alt: "Latte art.",
            color: "sandybrown",
            day: "Thursday",
            desc: 'Creamy, sweet, caramel-forward.'
        };
 	break;

 	case 5:
   	    today = "Friday";
        coffee = {
            name: "Drip", 
            pic: "drip.jpg",
            alt: "A pic of a drip coffee.",
            color: "brown",
            day: "Friday",
            desc: 'I need a constant drip!'
        };
 	break;

 	case 6:
    	today =  "Saturday";
        coffee = {
            name: "Frappuccino", 
            pic: "frappaccino.jpg",
            alt: "A blended frappuccino with whipped cream.",
            color: "tan",
            day: "Saturday",
            desc: 'A sweet blended treat for the weekend.'
        };
 	break;

 	default:
    	today = "Something went wrong!";

}

console.log(today);
console.log(coffee);

//alert (coffeeTemplate(coffee));

//Adds coffee to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//Change background color of HTML element
document.querySelector("html").style.backgroundColor = coffee.color;

//change strong tags in template to our color
document.querySelectorAll("#coffee-cup strong").forEach(el => {
    el.style.color = coffee.color;
});




function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
        <p>
           <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
           <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong> ${coffee.name}</strong>${coffee.desc}
        </p>

    `;

    return myReturn;
}
