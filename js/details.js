const queryString = document.location.search;
const params = new URLSearchParams(queryString);


let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}



const detailsUrl = "https://rickandmortyapi.com/api/character/" + id;

console.log(detailsUrl);

fetch(detailsUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    loadDetails(json);
  })
  .catch(function(error) {
    document.location.href = "error.html";
  });


function loadDetails(results) {

      console.log(results);
      const imageDetails = document.querySelector(".details-image");
          imageDetails.src = results.image;
          imageDetails.alt = results.name;

      const characterName = document.querySelector(".detail-details > h1");
        characterName.innerHTML = results.name;

      const characterStatus = document.querySelector("#status");
      characterStatus.innerHTML = results.status;

      const characterSpecies = document.querySelector("#species");
      characterSpecies.innerHTML = results.species;

      const characterOrigin = document.querySelector("#origin");
      characterOrigin.innerHTML = results.origin.name;

      const characterLocation = document.querySelector("#location");
      characterLocation.innerHTML = results.location.name;
}
