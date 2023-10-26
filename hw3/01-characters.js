// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";
let characters = [];

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //charaters.push;
      data.forEach((character) => {
        characters.push(character);
        console.log(
          character.firstName,
          character.lastName,
          character.fullName,
          character.title
        );
      });
    })
    .catch((error) => console.error(error));
};
fetchData(url);
