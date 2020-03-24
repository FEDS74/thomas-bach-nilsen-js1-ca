const queryString = document.location.search;
const params = new URLSearchParams(queryString);


const characterUrl = "https://rickandmortyapi.com/api/character/";
const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/" + characterUrl;



fetch(corsEnabledUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    loopAPI(json);
  })
  .catch(function(){
    document.location.href = "error.html";
  });


function loopAPI(resultsObject){
  const resultsArray = resultsObject.results;

  let newHTML = "";

  resultsArray.forEach(function(results) {
console.log(results);
    newHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
        <img class="image" src="https://via.placeholder.com/300" alt=${results.name}>
        <div class="details">
            <h4 class="name">${results.name}</h4>
            <p>Type: ${results.type}</p>
            <p>Episode count: </p>
            <a class="btn btn-primary" href="details.html?id=">Details</a>
        </div>
    </div>
</div>`;
});

const resultsContainer = document.querySelector(".results");
container.innerHTML = newHTML;

}





    /*const imageCharacter = document.querySelector(".image");
    imageCharacter.src = results.image;
    imageCharacter.alt = results.name;

    const nameCharacter = document.querySelector(".name");
    nameCharacter.innerHTML = results.name;

    const typeCharacter = document.querySelector("p");

    if (results.type !== " ") {
      typeCharacter.innerHTML = results.type;
    }  else {
      typeCharacter = "Unknown";
    }

  */
