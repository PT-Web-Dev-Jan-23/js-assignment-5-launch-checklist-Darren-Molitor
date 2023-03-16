// Write your JavaScript code here!

window.addEventListener("load", function() {
    let pilotName = document.getElementByName("pilotName");
    let copilotName = document.getElementsByName("copilotName");
    let fuelLevel = document.getElementsByName("fuelLevel");
    let cargoMass = document.getElementsByName("cargoMass");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = documeny.getElementById("copilotStatus");
    let fuelStatus = documeny.getElementById("fuelStatus");
    let cargoStatus = documeny.getElementById("cargoStatus");
    let launchStatus = documeny.getElementById("launchStatus");
    
    // let inputs = document.querySelectorAll("inputs");   Use Index[]
    faultyItems.visible = true;
    launchStatus.visible = true;
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

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
   })
   
});