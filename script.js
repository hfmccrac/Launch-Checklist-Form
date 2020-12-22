// Write your JavaScript code here!

window.addEventListener("load", function(){
   let formSubmit = document.getElementById("formSubmit");
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let faultyItems = document.getElementById("faultyItems");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");


   formSubmit.addEventListener("click", function(){
      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass === ""){
         alert("All fields are required!");
         preventDefault();

      } else if (isNaN(fuelLevel.value || cargoMass.value)) {
         alert("Needs to be a number!");
         preventDefault();

      } else if (fuelLevel.value < 10000) {
         launchStatus.style.color = "red";
         launchStatus.innerText = "Shuttle not ready for launch";
         pilotStatus.innerText = (`Pilot ${pilotName.value} Ready`);
         copilotStatus.innerText = (`Co-pilot ${copilotName.value} Ready`);
         fuelStatus.innerText = "Not enough fuel for the journey.";
         faultyItems.style.visibility = "visible";

      } else if (cargoMass.value > 10000) {
         launchStatus.style.color = "red";
         launchStatus.innerText = "Shuttle not ready for launch";
         pilotStatus.innerText = (`Pilot ${pilotName.value} Ready`);
         copilotStatus.innerText = (`Co-pilot ${copilotName.value} Ready`);
         cargoStatus.innerText = "Too much mass for the shuttle to take off.";
         faultyItems.style.visibility = "visible"; 

      } else {
         launchStatus.style.color = "green";
         launchStatus.innerText = "Shuttle is ready for launch";
         pilotStatus.innerText = (`Pilot ${pilotName.value} Ready`);
         copilotStatus.innerText = (`Co-pilot ${copilotName.value} Ready`);
         faultyItems.style.visibility = "visible";
      }

   });


});




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
