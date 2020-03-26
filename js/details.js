const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}

const detailsUrl = "https://rickandmortyapi.com/api/character/";
const detailsIdUrl = `${detailsUrl}${id}`;

fetch(detailsIdUrl)
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
  const detailsArray = detailsObject.results;
  //console.log(detailsObject);
  //console.dir(detailsObject);

    const detailsContainer = document.querySelector(".detail-container");

    detailsArray.forEach(function(resultsId) {
      console.log(resultsId);



});



}
/*  const imageDetails = document.querySelector(".details-image");
    imageDetails.src = results.image;
    imageDetails.alt = results.name;

  const characterName = document.querySelector(".detail-details > h1");
    characterName.innerHTML = results.name;*/
