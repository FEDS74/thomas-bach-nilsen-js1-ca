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
  .catch(function(error) {
    //document.location.href = "error.html";
    console.log(error);
  });

  function loadResultsApi(resultsObject) {
    const resultsArray = resultsObject.results;

      const resultsContainer = document.querySelector(".results");

    let newHTML = "";

    resultsArray.forEach(function(results) {
      console.log(results);

      let typeResult = "Unknown";

      if (results.type) {
        typeResult = results.type;
      }


      let episodeCount = 0;

      if (results.episode) {
        episodeCount = results.episode.length;
        //console.dir(results.episode.length);
      }


      newHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card">
          <img class="image" src="${results.image}" alt=${results.name}>
          <div class="details">
              <h4 class="name">${results.name}</h4>
              <p>Type: ${typeResult}</p>
              <p>Episode count: ${episodeCount}</p>
              <a class="btn btn-primary" href="details.html?id=">Details</a>
          </div>
      </div>
  </div>`;
    });


    resultsContainer.innerHTML = newHTML;

  }
