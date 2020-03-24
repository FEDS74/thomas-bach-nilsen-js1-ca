const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}



const characterUrl = "https://rickandmortyapi.com/api/character/";
const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/" + characterUrl;
const characterIdUrl = "${corsEnabledUrl}${id}";


fetch(corsEnabledUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    loopAPI(json);
  })
  .catch(function() {
    //document.location.href = "error.html";
    //console.log(error);
  });


function loopAPI(resultsObject) {
  const resultsArray = resultsObject.results;

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
        console.dir(results.episode.length);
      }


        newHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
        <img class="image" src="${results.image}" alt=${results.name}>
        <div class="details">
            <h4 class="name">${results.name}</h4>
            <p>Type: ${typeResult}</p>
            <p>Episode count: ${episodeCount}</p>
            <a class="btn btn-primary" href="details.html?id=${characterIdUrl[i].id}">Details</a>
        </div>
    </div>
</div>`;
      });

    const resultsContainer = document.querySelector(".row.results"); resultsContainer.innerHTML = newHTML;

  }
