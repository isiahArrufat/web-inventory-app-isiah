const form = document.getElementById("new-Aircraft");
const ul = document.createElement("ul");

form.addEventListener("submit", (event) => {
    event.preventDefault();
   console.log("name:", event.target.name.value);
   console.log("price:", event.target.price.value);
   console.log("inStock:", event.target.inStock.value);
   console.log("aircraftType:", event.target.aircraftType.value);
   console.log("machSpeed:", event.target.machSpeed.value);

    const {name, price, inStock, aircraftType, machSpeed} = event.target;
  
    AirCraftTemplate(name.value, price.value, inStock.value, aircraftType.value, machSpeed.value);
})


//  Helper function to submitted a new aricraft 
const AirCraftTemplate = (name, price, inStock, aircraftType, machSpeed) => {
    const li = document.createElement("li");
    li.classList.add("newAirCraft");
    
    if (name && price && inStock && aircraftType && machSpeed) {
        li.innerHTML = `<img src="" alt ="Pic Of Aircraft"><p>
        <strong>Aircraft Name</strong>: ${name}</p><strong>Price Of 
        Aircraft</strong>: ${price}</p><p><strong>Available??</strong>: 
        ${inStock}</p><p><strong>Type Of AirCraft</strong>: ${aircraftType}
        </p><p><strong>Aircraft TopSpeed</strong>: ${machSpeed}`;
    }
    
    ul.append(li);
}







 







