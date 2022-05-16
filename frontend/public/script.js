//hello

const loadEvent = async function () {
  //async: az egész fgv aszinkron módon működik
  const rootElement = document.getElementById("root");

  //   fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") //azonnal lefut és objektummá formálódik és automatikusan return-öl
  //     .then(function (response) {
  //       //call-back function-t vár
  //       console.log(response);
  //       return response.json(); //json() feldoldogozza az ilyen jellegű adatokat
  //     })
  //     .then(function (json) {
  //       console.log(json.date);
  //       rootElement.insertAdjacentHTML( //kép hozzáadása
  //         "beforeend",
  //         `
  //       <img src="${json.hdurl}">
  //       `
  //       );
  //     });

  //egyből elérhető a load event-en belül és nem kell rá várni
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  );
  const responseJson = await response.json();
  rootElement.insertAdjacentHTML(
    "beforeend",
    `
      <img src="${responseJson.hdurl}">
      `
  );
};
window.addEventListener("load", loadEvent);
