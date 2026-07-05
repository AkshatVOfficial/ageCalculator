let yourAge = document.getElementById("age-input");
const calculate = document.getElementById("calculate");
let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");
const now = new Date();

function subtract() {
  let ageYear = now.getFullYear() - yourAge.valueAsDate.getFullYear();
  let ageMonth = now.getMonth() - yourAge.valueAsDate.getMonth();
  let ageDays = now.getDate() - yourAge.valueAsDate.getDate();
  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  } else if (ageMonth === 0) {
    if (ageDays < 0) {
      ageYear--;
    }
  }
  years.innerText = ageYear;
  months.innerText = ageMonth;
  //   days.innerText = ageDays;
}

function calculateAge() {
  if (yourAge.valueAsDate > now) {
    alert("Please enter a valid date");
  } else {
    subtract();
  }
}

calculate.addEventListener("click", (event) => {
  event.preventDefault();
  calculateAge();
});
