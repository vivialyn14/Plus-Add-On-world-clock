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

setInterval(updateLondon, 100);
setInterval(updateParis, 100);
