"use strict";
class DomManager {
  _options = Array.from(
    document.getElementsByClassName("options__item-wrapper")
  );
  _root = document.getElementsByClassName("results")[0];
  _resultsContainer = document.getElementsByClassName("results__container")[0];
  _closeModalBtn = document.getElementsByClassName("icon-close")[0];
  _winAlert = `You won!`;
  _loseAlert = `Sorry, you lost`;
  _drawAlert = `It is a draw!`;
  _variants = {
    scissors: `<div class="results__item-wrapper"><i class="results__item icon-hand-scissors-o"></i></div>`,
    rock: `<div class="results__item-wrapper"><i class="results__item icon-hand-rock-o"></i></div>`,
    paper: `<div class="results__item-wrapper"><i class="results__item icon-hand-grab-o"></i></div>`,
  };
  cleanResults() {
    return (this._resultsContainer.innerHTML = "");
  }
  showAlert(result) {
    const ALERT = `_${result}Alert`;
    const htmlElement = `<p class="results__alert">${this[ALERT]}</p>`;
    return (this._resultsContainer.innerHTML += htmlElement);
  }
  getOptions() {
    return this._options;
  }
  getCloseBtn() {
    return this._closeModalBtn;
  }
  
  showResults(result, userChoice, computerChoice) {
    this.cleanResults();
    this.showAlert(result);
      const RESULTS = `
        User: ${this._variants[userChoice]}
        Computer: ${this._variants[computerChoice]}
    `;
      return (this._resultsContainer.innerHTML += RESULTS);
  }
}

const domManager = new DomManager();

export default domManager;
