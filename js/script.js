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





const typeClass = document.querySelector(".details");
typeClass.ClassList.add("test");
console.dir(typeClass);




function loopAPI(resultsObject){
  const resultsArray = resultsObject.results;

  resultsArray.forEach(function(results){
    const imageCharacter = document.querySelector(".image");
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

  });
}
