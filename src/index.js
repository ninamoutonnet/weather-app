function formatDate(date) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let strings = `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}     ${date.getHours()}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
  return strings;
}

let d = new Date();
let dateHeading = document.querySelector(".dateClass");
dateHeading.innerHTML = formatDate(d);

function passwordAlert(event) {
  event.preventDefault();
  let input = document.querySelector(".form-text");
  let town = document.querySelector(".cityClass");

  if (input.value !== "") {
    town.innerHTML = input.value;
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let city = input.value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
}

let form = document.querySelector("form");
form.addEventListener("click", passwordAlert);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let temp = document.querySelector(".second_row_temp");
  temp.innerHTML = `${temperature}°C`;
}
