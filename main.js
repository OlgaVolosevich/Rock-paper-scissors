"use strict";

window.onload = function () {

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

  class DomManager {
    _options = Array.from(
      document.getElementsByClassName("options__item-wrapper")
    );
    _root = document.getElementsByClassName("results")[0];
    _winAlert = `You won!`;
    _loseAlert = `Sorry, you lost`;
    _drawAlert = `It is a draw!`;
    showAlert(alert) {
      const htmlElement = `<p class="results__alert">${alert}</p>`;
      return (this._root.innerHTML += htmlElement);
    }
    showDrawAlert() {
      return this.showAlert(this._drawAlert);
    }
    showWinAlert() {
      return this.showAlert(this._winAlert);
    }
    showLoseAlert() {
      this.showAlert(this._loseAlert);
    }
    getOptions() {
      return this._options;
    }
  }

  const domManager = new DomManager();

  class GameManager {
    _winCases = {
      scissors: `paper`,
      paper: `rock`,
      rock: `scissors`,
    };
    getPlayersDesidion(userChoise) {
      return {
        USER_CHOICE: userChoise,
        COMPUTER_CHOICE: computer.play(),
      };
    }

    checkIfDraw(user, computer) {
      return user === computer;
    }
    checkWin(user, computer) {
      return this._winCases[user] === computer;
    }
    processResults(userChoise) {
      const { USER_CHOICE, COMPUTER_CHOICE } = this.getPlayersDesidion(
        userChoise
      );
      const isDraw = this.checkIfDraw(USER_CHOICE, COMPUTER_CHOICE);
      if (isDraw) {
        return domManager.showDrawAlert();
      }
      const isWin = this.checkWin(USER_CHOICE, COMPUTER_CHOICE);
      if (isWin) {
        return domManager.showWinAlert();
      } else {
        return domManager.showLoseAlert();
      }
    }
  }

  const gameManager = new GameManager();

  domManager.getOptions().forEach((option) => {
    option.addEventListener("click", (event) => {
      gameManager.processResults(event.currentTarget.dataset.variant);
    });
  });
};
