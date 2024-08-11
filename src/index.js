setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;

  let manilaElement = document.querySelector("#manila");
  let manilaDateElement = manilaElement.querySelector(".date");
  let manilaTimeElement = manilaElement.querySelector(".time");
  let manilaTime = moment().tz("Asia/Manila");
  manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
  manilaTimeElement.innerHTML = `${manilaTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;

  let phuketElement = document.querySelector("#phuket");
  let phuketDateElement = phuketElement.querySelector(".date");
  let phuketTimeElement = phuketElement.querySelector(".time");
  let phuketTime = moment().tz("Asia/Bangkok");
  phuketDateElement.innerHTML = phuketTime.format("MMMM Do YYYY");
  phuketTimeElement.innerHTML = `${phuketTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");
  romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
  romeTimeElement.innerHTML = `${romeTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )} `;
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("HH:mm")} </div>
  </div>
  `;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
