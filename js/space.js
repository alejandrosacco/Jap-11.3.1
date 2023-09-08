var dataArray = [];

function show(array){
    let container = document.getElementById("contenedor");
    let content = "";
    for(let i = 0; i < array.length; i++){
        content += `
        <div class="card">
        <img src="${array[i].links[0].href}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${array[i].data[0].title}</h5>
          <p class="card-text">${array[i].data[0].description}</p>
          <p> ${array[i].data[0].date_created} </p> 
        </div>
      </div>
        `;
    }
    container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', ()=>{
    let button = document.getElementById("btnBuscar");
    button.addEventListener("click", ()=>{
        let input = document.getElementById("inputBuscar").value;
        let link = "https://images-api.nasa.gov/search?q=" + input;
        fetch(link)
        .then(response => response.json())
        .then(data => {
            dataArray = data.collection.items;
            console.log(dataArray);
            console.log(dataArray[0].links[0].href)
            show(dataArray);
        })
    })
})

