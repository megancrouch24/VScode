(() => {
    let container = document.querySelector("#container");
    
    function simpleFetch(id){
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => {
            if(response.status !== 200) {
                console.error(`status:${response.status}`);
                return;
            }
            return response.json();
        }).then(data => {
            console.log(data);
            return data;
        }).catch(error =>{
            console.error(error);
         
    simpleFetch(1);
})()
