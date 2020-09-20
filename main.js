"use strict"
import domManager from "./components/DomManager/script.js";
import gameManager from "./components/GameManager/script.js";

window.onload = function () {
  domManager.getOptions().forEach((option) => {
    option.addEventListener("click", (event) => {
      gameManager.processResults(event.currentTarget.dataset.variant);
    });
  });
};
