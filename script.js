// Write your JavaScript code here!

// const { validateInput, formSubmission } = require("./scriptHelper");

    //add event listener for initial Load
    window.addEventListener("load", function() {
        let form = document.querySelector("form");
        //add event listener for Submit
        form.addEventListener("submit", function(event) {
            event.preventDefault()
            let pilot = document.querySelector("input[name=pilotName]");
            let copilot = document.querySelector("input[name=copilotName]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoLevel = document.querySelector("input[name=cargoMass]");
            let list = document.getElementById("faultyItems");

            if (validateInput(pilot.value) === "Not a Number" &&
                validateInput(copilot.value) === "Not a Number" &&
                validateInput(fuelLevel.value) === "Is a Number" &&
                validateInput(cargoLevel.value) === "Is a Number") {

                formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
            } 
        });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        addDestinationInfo(document, 
            listedPlanets[3].name, 
            listedPlanets[3].diameter, 
            listedPlanets[3].star, 
            listedPlanets[3].distance, 
            listedPlanets[3].moons, 
            listedPlanets[3].image
            );
        return(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
    });

    function randomPlanet(arr) {
        return Math.floor(Math.random() * arr.length);
    }

});