import search from "./charactersearch";
import searche from "./eventsearch";

const form = document.querySelectorAll("[data-form]");

form[0].addEventListener("submit", event => {
  event.preventDefault();

  const formComponent = event.target;

  const formData = new FormData(formComponent);

  search(formData.get("Hero"));
});

const form2 = document.querySelectorAll("[data-form2]");

form2[0].addEventListener("submit", event => {
  event.preventDefault();

  const formComponent = event.target;

  const formData = new FormData(formComponent);

  searche(formData.get("Event"));
});

// function toggle()
