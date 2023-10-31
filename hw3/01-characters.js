// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";
let characters = [];

const displayCharacterComponents = (characters) => {
  let app = document.getElementById("results");
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";

  for (const character in characters) {
    const characterComponent = createCharacterComponent(characters[character]);
    app.appendChild(characterComponent);
  }
};

/*
async function getData(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  data.forEach((character) => {
    characters.push(character);
    console.log(
      character.firstName,
      character.lastName,
      character.fullName,
      character.title
    );
  });
  displayCharacterComponents(characters);
}
*/

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((character) => {
        characters.push(character);
      });
      displayCharacterComponents(characters);
    })
    .catch((error) => console.error(error));
};

//Function call to fetch data
//getData(url);
fetchData(url);

const createCharacterComponent = (character) => {
  const container = document.createElement("div");

  container.classList.add("ex1");

  let pic = document.createElement("img");
  let name = document.createElement("p");
  let title = document.createElement("p");

  pic.src = character.imageUrl;
  name.textContent = character.fullName;
  title.textContent = character.title;

  name.classList.add("ex1");
  title.classList.add("ex1", "ex2");

  container.append(pic);
  container.append(name);
  container.append(title);

  return container;
};

/*outside resources

my starships hw3 exercise from CS563 huge help
*/
