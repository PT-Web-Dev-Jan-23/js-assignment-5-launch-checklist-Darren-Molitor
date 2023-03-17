// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
    let pilotName = document.getElementByName("pilotName");
    let copilotName = document.getElementsByName("copilotName");
    //let fuelLevel = document.getElementsByName("fuelLevel");
    let cargoMass = document.getElementsByName("cargoMass");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    
    // let inputs = document.querySelectorAll("inputs");   Use Index[]
    faultyItems.style.visibility = "visible";
    launchStatus.style.visibility = "visible";
    // if (validateInput(pilotName.value === "Not a Number") &&
    //     validateInput(copilotName.value === "Not a Number") &&
    //     validateInput(fuelLevel.value === "Is a Number") &&
    //     validateInput(cargoMass.value === "Is a Number")) {
            //launchStatus.visible = true;
            pilotStatus.innerText = 'Pilot ${pilotName} Ready';
            copilotStatus.innerText = 'Co-pilot ${copilotName} Ready';
            if (fuelLevel.value < 10000) {
                //faultyItems.visible = true;
                fuelStatus.innerText = "There is not enough fuel for the journey.";
                launchStatus.innerText = "Shuttle not ready for launch";
                launchStatus.color = "red";
            } else {
                fuelStatus.innerText = "Fuel level high enough for launch";
                }
            if (cargoMass.value > 10000) {
                //faultyItems.visible = true;
                cargoStatus.innerText = "There is too much mass for the shuttle to take off.";
                launchStatus.innerText = "Shuttle not ready for launch";
                launchStatus.color = "red";
            } else {
                cargoStatus.innerText = "Cargo mass low enough for launch";
                }
            if (fuelLevel.value >= 10000 && cargoMass.value <= 10000)
                launchStatus.innerText = "Shuttle is ready for launch";
                launchStatus.color = "green";
    // }

    // empty
    // type "NaN"
    // DOM 
   // return alert('message');
}

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
