const queryString = document.location.search;
const params = new URLSearchParams(queryString);


let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}



const detailsUrl = "https://rickandmortyapi.com/api/character/";
const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/" + detailsUrl;


fetch(corsEnabledUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    loadDetails(json);
  })
  .catch(function(error) {
    //document.location.href = "error.html";
    console.log(error);
  });


function loadDetails(detailsObject) {
  const detailsContainer = document.querySelector(".detail-container");
  const detailsArray = detailsObject.results;
  //console.log(detailsObject);
  //console.dir(detailsObject);



    detailsArray.forEach(function(resultsId) {
      console.log(resultsId);
      const imageDetails = document.querySelector(".details-image");
          imageDetails.src = resultsId.image;
          imageDetails.alt = resultsId.name;

      const characterName = document.querySelector(".detail-details > h1");
        characterName.innerHTML = resultsId.name;

      const characterStatus = document.querySelector("#status");
      characterStatus.innerHTML = resultsId.status;

      const characterSpecies = document.querySelector("#species");
      characterSpecies.innerHTML = resultsId.species;

      const characterOrigin = document.querySelector("#origin");
      characterOrigin.innerHTML = resultsId.origin.name;

      const characterLocation = document.querySelector("#location");
      characterLocation.innerHTML = resultsId.location.name;
});



}
/*

  */
