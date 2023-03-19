// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then( function(response) {
        response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            // Add HTML that includes the JSON data
            div.innerHTML = `
                <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${name}</li>
                        <li>Diameter: ${diameter}</li>
                        <li>Star: ${star}</li>
                        <li>Distance from Earth: ${distance}</li>
                        <li>Number of Moons: ${moons}</li>
                    </ol>
                    <img src=${imageUrl} alt="Picture of ${name}">
                `;
            });
        });
}

function validateInput(testInput) {
   if (testInput === '') {
    return "Empty";
   } else if (isNaN(testInput)) {
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    
    launchStatus.innerText = "Testing Testing Testing";
    faultyItems.style.visibility = "visible";

    pilotStatus.innerText = (`Pilot ${pilot.value} Ready`);
    copilotStatus.innerText = (`Co-pilot ${copilot.value} Ready`);

// Validate Fuel Level
    if (fuelLevel.value < 10000) {
        fuelStatus.innerText = "There is not enough fuel for the journey.";
        launchStatus.innerText = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    } else {
        fuelStatus.innerText = "Fuel level high enough for launch";
        }
// Validate Cargo Mass
    if (cargoLevel.value > 10000) {
        cargoStatus.innerText = "There is too much mass for the shuttle to take off.";
        launchStatus.innerText = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    } else {
        cargoStatus.innerText = "Cargo mass low enough for launch";
        }
// Set "Ready" text if passed validation
    if (fuelLevel.value >= 10000 && cargoLevel.value <= 10000) {
        launchStatus.innerText = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    }
};

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then( function(response) {
        return response.json();
        });
    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
