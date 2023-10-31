const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
];

// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";
let characters = [];
let titleCountValues = [];
const king = "king";
const queen = "queen of";
const lord = "lord";
const lady = "lady";
let remainder = 0;

//My algorithm filters keywords in the "title" part of each character, some are kings, lords, ladies, etc
//to accomodate for the word being in the title I reviewed them. For example "Queen Consort" is not included in Queen
const filterTitles = (input, word) => {
  let temp = input.filter((character) =>
    character.title.toLowerCase().includes(word)
  );
  remainder = remainder - temp.length;
  titleCountValues.push(temp.length);
};

async function fetchData(url) {
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
  remainder = data.length;
  console.log(length);
  filterTitles(characters, king);
  filterTitles(characters, queen);
  filterTitles(characters, lord);
  filterTitles(characters, lady);

  titleCountValues.push(remainder);
  console.log(titleCountValues);
  renderChart();
}

fetchData(url);

const renderChart = () => {
  const donutChart = document.querySelector(".donut-chart");

  new Chart(donutChart, {
    type: "doughnut",
    data: {
      labels: ["King", "Queen", "Lord", "Lady", "Other/None"],
      datasets: [
        {
          label: "Game of Thrones Character Titles",
          data: titleCountValues,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 2,
        },
      ],
    },
  });
};

/*Outside resources
https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/
I used the above resource to see an example of async funcitons. I'm curious how this differs from the promises from ex1
*/
