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
  <div class="city" id="london">
    <div>
        <div class="city-name"><h3>${
          chosenCity.replace("_", " ").split("/")[1]
        }</h3><br /><a href="/">Back</a></div>
    </div>
    <div>
        <div class="city-time">${chosenCityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
        <div class="city-date">${chosenCityTime.format("Do MMMM YYYY")}</div>
    </div>
    `;
    } else {
      times.innerHTML = "";
    }
  });
}

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateCity);
