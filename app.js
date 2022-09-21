"use strict";

// Selcting elements
const message = document.querySelector(".para");
const username = document.querySelector(".input");
const submit = document.querySelector(".submit");

// Week days array
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "saturday",
];

// Event listener

submit.addEventListener("click", () => {
  const d = new Date();
  let day = d.getDay();
  message.innerText = `Hallo ${
    username.value.slice(0, 1).toUpperCase() +
    username.value.slice(1).toLowerCase()
  }. Today is ${weekDays[day]}. ${
    day !== 0 && day !== 6
      ? "Only " + (6 - day) + " days left to weekend"
      : "It's already weekend"
  } `;

  username.value = "";
});
