// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  let missionTarget = document.querySelector(missionTarget);
  missionTarget.innerHTML =  
     `<><h2>Mission Destination</h2><ol>
          <li>Name: ${name} </li>
          <li>Diameter: ${diameter} </li>
          <li>Star: ${star}</li>
          <li>Distance from Earth: ${distance} </li>
          <li>Number of Moons: ${moon} </li>
      </ol>
      <img src = ${image}>
        `
}



     function validateInput(testInput) { 
    if (testInput === "" || testInput === null) { 
    return 'Empty'
     } else if (isNaN(testInput)) { 
    return 'Not a Number'
     } else { (!isNaN(Number(testInput)))  
        return 'Is a Number'


              }
            }


              function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
                  // 
            let pilotStatus = document.getElementById('pilotStatus');
              let copilotStatus = document.getElementById('copilotStatus');
              let fuelStatus = document.getElementById('fuelStatus');
              let launchStatus = document.getElementById('launchStatus');
              let cargoMass = document.getElementById('cargoMass');

              if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoMass) === 'Empty') {window.alert("All fields are required.");
              preventDefault();
              }
              // names are not strings
              else if (validateInput(pilot) !== 'Not a Number'){window.alert("Enter valid Pilot name.");
              preventDefault();
              }
              else if (validateInput(copilot) !== 'Not a Number'){window.alert("Enter valid Co-pilot name.");
              preventDefault();
              }
              // fuelLevel & cargoMass are not numbers
              else if (validateInput(fuelLevel) !== 'Is a Number'){window.alert("Enter valid fuel level number.");
              preventDefault();
              } else if (validateInput(cargoMass) !== 'Is a Number'){window.alert("Enter valid cargo mass number.");
              preventDefault();
              } else {
                  // update faultyItems w what is ready or not ready for launch 
                  faultyItems.style.visibility = "visible";
              pilotStatus.innerHTML += `: ${pilot} is ready for launch`;
              copilotStatus.innerHTML += `: ${copilot} is ready for launch`;
              }
              // too low
              if (Number(fuelLevel) < 10000){faultyItems.style.visibility = "visible";
              fuelStatus.innerHTML = `There is not enough fuel for the journey.`;
              }
              // too much
              if (Number(cargoMass) > 10000){faultyItems.style.visibility = "visible";
              cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
              }

              if(Number(fuelLevel) < 10000 || Number(cargoMass) > 10000){launchStatus.innerHTML = `Shuttle not ready for launch`;
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
          
