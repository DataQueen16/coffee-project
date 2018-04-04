"use strict";
//  ========================  TEST  =================
function changeRoast() {
    var x = document.getElementById("mySelect");
    document.getElementById("demo").innerHTML = x.options[x.selectedIndex].text;
}

function displayCoffees(arr) {
    var coffeesContainer ='<div id="coffee-labels-container">';
    arr.forEach(function (el) {
        coffeesContainer += '<h2 class="coffee-name">' + el.name + '</h2>';
    });
    coffeesContainer += '</div>';
    document.getElementById('coffee-container').innerHTML = coffeesContainer;
}

document.getElementById('').addEventListener('keyup', function() {
    var newCoffees = [];
    coffees.forEach(function (el) {
        if(el.name.toLowerCase().match(document.getElementById('search').value)) {
            newCoffees.push(el);
        }
    });
    displayCoffees(newCoffees);
});

//==============================
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function myFun() {
    var input, filter, i; //
    input = document.getElementById("myInput"); //
    filter = input.value.toUpperCase(); //
    tbody = document.getElementById('coffees');
    for (i = 0; i < coffees.length; i++) {  // coffees

        if (coffees[i].innerHTML.toUpperCase().indexOf(filter) > -1) { //
            coffees[i].style.display = ""; //
        } else {
            coffees[i].style.display = "none"; //

        }
    }
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);