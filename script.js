// Write your JavaScript code here!

window.addEventListener("load", function(){
   let formSubmit = document.getElementById("formSubmit");
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");

   formSubmit.addEventListener("click", function(){
      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass === "") {
         alert("All fields are required!");
         preventDefault()
      } else if (isNaN(fuelLevel || cargoMass)) {
         alert("Needs to be a number!");
         preventDefault()
      } else if {
         write a function to check values of fuelLevel and cargoMass 
      }
         
      }

      function shuttleReady(){
         launchStatus.style.color = "green";
         launchStatus.innerText = "Shuttle is ready for launch";
         faultyItems.style.visibility = "visible";
         event.preventDefault();
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
