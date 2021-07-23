(() => {
let container = document.querySelector("#container");

function simpleFetch(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    let element = document.createElement("P");
    element.innerText = data[0].title;

    container.appendChild(element);
    })
    .catch(error => console.error(error))
    .finally(() => { console.log ("Done"); });

} 

simpleFetch(1);
})()