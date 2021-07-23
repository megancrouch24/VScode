//GET request for 'List User'
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

//GET request for 'Single User' with the id of 2
fetch('https://reqres.in/api/users/2')
     .then((response) => {
         if (response.status !== 200) {
             console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
             return;
         }
     response.json()
     .then(data => console.log(data));         
     })
     .catch(err => console.error(`Fetch Error :-S ${err}`));


      let simpleFetchBtn = document.querySelector("#simplefetchBtn");
      let fetchdataBtn = document.querySelector("#fetchBtn")

      fetchdataBtn.addEventListener("click", () => {
        fetchPost(3);
      }, false);
        simpleFetchBtn.addEventListener("click", simpleFetch, false)
    })();