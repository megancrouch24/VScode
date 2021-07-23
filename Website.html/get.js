(() => {
    let container = document.querySelector("#container");
    
    function simpleFetch(){
      fetch(`https://reqres.in/api/users?page=2`)
       .then((response) => {
           if (response.status !== 200) {
               console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
               return;
           }
       return response.json()
      }).then(data => console.log(data))        
       .catch(err => console.error(`Fetch Error :-S ${err}`))};
  
       simpleFetch();
  })();
  