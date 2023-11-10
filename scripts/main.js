const form = document.getElementById("new-Aircraft");


form.addEventListener("submit", (event) => {
    event.preventDefault();
//    console.log("name:", event.target.name.value);
//    console.log("price:", event.target.price.value);
//    console.log("inStock:", event.target.inStock.value);
//    console.log("aircraftType:", event.target.aircraftType.value);
//    console.log("machSpeed:", event.target.machSpeed.value);

    const {name, price, inStock, aircraftType, machSpeed, img} = event.target

    
  
    AirCraftTemplate(name.value, price.value, inStock.value, aircraftType.value, machSpeed.value, img.value);

})


//  Helper function to submitted a new aricraft 
const AirCraftTemplate = (name, price, inStock, aircraftType, machSpeed, img) => {
    const li = document.createElement("li");
    li.classList.add("newAirCraft");

    console.log(li);
    
    if (name && price && inStock && aircraftType && machSpeed) {
        li.innerHTML = `<img src="${img}" alt ="Pic Of Aircraft"><p>
        <strong>Aircraft Name</strong>: ${name}</p><strong>Price Of 
        Aircraft</strong>: ${price}</p><Button class = "toggleButton">In Stock 
        ${inStock}</button>><p><strong>Type Of AirCraft</strong>: ${aircraftType}
        </p><p><strong>Aircraft TopSpeed</strong>: ${machSpeed}</p>`;

        const toggleButton = li.querySelector(".toggleButton");

         toggleButton.addEventListener("click", () => {
            li.classList.toggle("hidden");
            toggleButton.classList.toggle("clicked");
            
        });


        const button = document.createElement("button");
        button.textContent = "Remove";
        button.classList.add("remove");

        button.addEventListener("click", () => {
            li.remove();
        });

        li.append(button);

        const ul = document.querySelector("ul");
        
        ul.append(li);
    }


}

   









 







