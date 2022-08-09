// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  let missionTarget = document.querySelector("#missionTarget");
  missionTarget.innerHTML =  
     `<h2>Mission Destination</h2>
     <ol>
          <li>Name: ${name} </li>
          <li>Diameter: ${diameter} </li>
          <li>Star: ${star}</li>
          <li>Distance from Earth: ${distance} </li>
          <li>Number of Moons: ${moons} </li>
      </ol>
      <img src = ${imageUrl}>
        `
}



     function validateInput(testInput) { 
      console.log(testInput, 1);
    if (testInput === "" || testInput === null) { 
    return 'Empty'
     } else if (isNaN(testInput)) { 
    return 'Not a Number'
     } else if (!isNaN(Number(testInput)))  {
        return 'Is a Number'

              }
            }

              
              function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
            let pilotStatus = document.querySelector("#pilotStatus");
              let copilotStatus = document.querySelector("#copilotStatus");
              let fuelStatus = document.querySelector("#fuelStatus");
              let launchStatus = document.querySelector("#launchStatus");
              let cargoMass = document.querySelector("#cargoMass");
              let faultyItems = document.querySelector("#faultyItems");

              console.log(document, pilot, copilot, fuelLevel, cargoLevel);
              console.log(cargoLevel, 2);
              if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {window.alert("All fields are required.");
              
              }
              // names are not strings
              else if (validateInput(pilot) !== 'Not a Number'){window.alert("Enter valid Pilot name.");
              
              }
              else if (validateInput(copilot) !== 'Not a Number'){window.alert("Enter valid Co-pilot name.");
              
              }
              // fuelLevel & cargoMass are not numbers
              else if (validateInput(fuelLevel) !== 'Is a Number'){window.alert("Enter valid fuel level number.");
              
              } else if (validateInput(cargoLevel) !== 'Is a Number'){window.alert("Enter valid cargo mass number.");
              
              } else {
                  // update faultyItems w what is ready or not ready for launch 
                  faultyItems.style.visibility = "visible";
              pilotStatus.innerHTML = `: ${pilot} is ready for launch`;
              copilotStatus.innerHTML = `: ${copilot} is ready for launch`;
              }
              // too low
              if (Number(fuelLevel) < 10000){faultyItems.style.visibility = "visible";
              fuelStatus.innerHTML = `There is not enough fuel for the journey.`;
              }
              // too much
              if (Number(cargoLevel) > 10000){faultyItems.style.visibility = "visible";
              cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
              }

              if(Number(fuelLevel) < 10000 || Number(cargoLevel) > 10000){launchStatus.innerHTML = `Shuttle not ready for launch`;
              launchStatus.style.color = "red";
              }
                 else {
                 
                    // ready to launch!
                  launchStatus.innerHTML = `Shuttle is ready for launch`;
                    launchStatus.style.color = "green";


                 }
              }

              async function myFetch() {
                let planetsReturned;

              planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
              return response.json()
            });
              
              return planetsReturned;
              }

              function pickPlanet(planets) {
                let index = Math.floor(Math.random() * planets.length);
                return planets[index];
              }

              module.exports.addDestinationInfo = addDestinationInfo;
              module.exports.validateInput = validateInput;
              module.exports.formSubmission = formSubmission;
              module.exports.pickPlanet = pickPlanet;
              module.exports.myFetch = myFetch;
          
