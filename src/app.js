function updateDefault() {
  let londonData = document.querySelector("#london");
  let londonTime = londonData.querySelector(".time");
  let londonDate = londonData.querySelector(".date");
  let londonTimezone = "Europe/London";
  londonTime.innerHTML = moment
    .tz(londonTimezone)
    .format("h:mm:ss [<small>]A[</small>]");

  let sydneyData = document.querySelector("#sydney");
  let sydneyTime = sydneyData.querySelector(".time");
  let sydneyDate = sydneyData.querySelector(".date");
  let sydneyTimezone = "Australia/Sydney";
  sydneyTime.innerHTML = moment
    .tz(sydneyTimezone)
    .format("h:mm:ss [<small>]A[</small>]");

  let newYorkData = document.querySelector("#new-york");
  let newYorkTime = newYorkData.querySelector(".time");
  let newYorkDate = newYorkData.querySelector(".date");
  let newYorkTimezone = "America/New_York";
  newYorkTime.innerHTML = moment
    .tz(newYorkTimezone)
    .format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  setInterval(function () {
    let chosenCity = event.target.value;
    if (chosenCity == "current") {
      chosenCity = moment.tz.guess();
    }
    if (chosenCity.length > 1) {
      let chosenCityTime = moment().tz(chosenCity);
      let times = document.querySelector("#times");
      times.innerHTML = `
  <div class="city" id="city">
    <div>
        <div class="name"><h3>${
          chosenCity.replace("_", " ").split("/")[1]
        }</h3><br /><a href="/">Back</a></div>
    </div>
    <div>
        <div class="time">${chosenCityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
        <div class="date">${chosenCityTime.format("Do MMMM YYYY")}</div>
    </div>
    `;
    }
  });
}

setInterval(updateDefault, 100);

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateCity);
