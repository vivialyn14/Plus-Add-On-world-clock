function updateLondon() {
  let londonData = document.querySelector("#london");
  let londonDate = londonData.querySelector(".city-date");
  let londonTime = londonData.querySelector(".city-time");
  let londonTimezone = moment().tz("Europe/London");
  londonDate.innerHTML = londonTimezone.format("Do MMMM YYYY");
  londonTime.innerHTML = londonTimezone.format("h:mm:ss [<small>]A[</small>]");
}

function updateParis() {
  let parisData = document.querySelector("#paris");
  let parisDate = parisData.querySelector(".city-date");
  let parisTime = parisData.querySelector(".city-time");
  let parisTimezone = moment().tz("Europe/Paris");
  parisDate.innerHTML = parisTimezone.format("Do MMMM YYYY");
  parisTime.innerHTML = parisTimezone.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let chosenCity = event.target.value;
  if (chosenCity.length > 1) {
    let chosenCityTime = moment().tz(chosenCity);
    let times = document.querySelector("#times");
    times.innerHTML = `
  <div class="city" id="london">
    <div>
        <div class="city-name"><h3>${
          chosenCity.replace("_", " ").split("/")[1]
        }</h3></div>
    </div>
    <div>
        <div class="city-time">${chosenCityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
        <div class="city-date">${chosenCityTime.format("Do MMMM YYYY")}</div>
    </div>
    `;
  }
}

setInterval(updateLondon, 100);
setInterval(updateParis, 100);

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateCity);
