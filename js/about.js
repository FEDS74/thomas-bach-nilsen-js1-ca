setTimeout(function() {

  newTextHeader();

}, 4000);


function newTextHeader() {
  const newContentHeader = document.querySelector(".container.content h1");
  const newContentP = document.querySelectorAll(".container.content p");
    firstNewContentP = newContentP[0];
    secondNewContentP = newContentP[1];

  console.log(newContentHeader);
  console.log(firstNewContentP);
  console.log(secondNewContentP);

  newContentHeader.textContent = newContentHeader.textContent.replace(/\bThe\b/g, "Replaced").replace(/\bthe\b/g, "replaced");

  firstNewContentP.textContent = firstNewContentP.textContent.replace(/\bThe\b/g, "Replaced").replace(/\bthe\b/g, "replaced");

  secondNewContentP.textContent = secondNewContentP.textContent.replace(/\bThe\b/g, "Replaced").replace(/\bthe\b/g, "replaced");

}
