"use strict";

window.onload = function () {
  const options = Array.from(
    document.getElementsByClassName("options__item-wrapper")
  );
  console.log(options);
  class Player {
    variants = [`rock`, `paper`, `scissors`];
    chooseVariant() {
      const RANDOM_NUMBER = Math.floor(0 + Math.random() * 3);
      return this.variants[RANDOM_NUMBER];
    }
    play() {
      return this.chooseVariant();
    }
  }

  const computer = new Player();

  class GameManager {
    _root = document.getElementsByClassName("results")[0];
    getPlayersDesidion(userChoise) {
      const computerVariant = computer.play();
      const userVariant = userChoise;
      return {
        user: userVariant,
        computer: computerVariant,
      };
    }

    checkIfDraw(user, computer) {
      return user === computer;
    }
    showDrawAlert() {
      const ALERT = `<p class="results__draw-alert">It is a draw!</p>`;
      return (this._root.innerHTML += ALERT);
    }
    processResults(userChoise) {
      const choices = this.getPlayersDesidion(userChoise);
      const { user: USER_CHOICE, computer: COMPUTER_CHOICE } = choices;
      const isDraw = this.checkIfDraw(USER_CHOICE, COMPUTER_CHOICE);
      if (isDraw) {
        return this.showDrawAlert();
      }
    }
  }

  const gameManager = new GameManager();

  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      gameManager.processResults(event.currentTarget.dataset.variant);
    });
  });
};
