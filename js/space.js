let dataArray = [];

function show(array){
    let container = document.getElementById("contenedor");
    let content = "";
    for(let i = 0; i < array.length; i++){
        content += `
        <div class="card" style="width: 18rem;">
        <img src="${array[i].media_type}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `;
    }
    container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', ()=>{
    let input = document.getElementById("inputBuscar").value;
    let button = document.getElementById("btnBuscar");
    button.addEventListener("click", ()=>{
        let link = "https://images-api.nasa.gov/search?q=" + input;
        fetch(link)
        .then(response => response.json())
        .then(data => {
            dataArray = data.collection.items;
            console.log(dataArray);
            show(dataArray);
        })
    })
})

