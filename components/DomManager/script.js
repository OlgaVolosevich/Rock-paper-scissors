"use strict";
class DomManager {
  _options = Array.from(
    document.getElementsByClassName("options__item-wrapper")
  );
  _root = document.getElementsByClassName("results")[0];
  _resultsAlert = document.getElementsByClassName("results__alert")[0];
  _results = {
    user: document.getElementsByClassName("user-result")[0],
    computer: document.getElementsByClassName("comp-result")[0],
  };
  _winAlert = `You won!`;
  _loseAlert = `Sorry, you lost`;
  _drawAlert = `It is a draw!`;
  _variants = {
    scissors: `<i class="results__item icon-hand-scissors-o"></i>`,
    rock: `<i class="options__item icon-hand-grab-o">`,
    paper: `<i class="results__item icon-hand-rock-o"></i>`,
  };
  cleanResults() {
    for (let el in this._results) {
      this._results[el].innerHTML = ""
    }
    return;
  }
  showAlert(result) {
    const ALERT = `_${result}Alert`;
    return (this._resultsAlert.innerHTML = `${this[ALERT]}`);
  }
  getOptions() {
    return this._options;
  }

  showResults(result, userChoice, computerChoice) {
    this.cleanResults();
    this.showAlert(result);
    this._results.user.innerHTML = `${this._variants[userChoice]}`;
    this._results.computer.innerHTML = `${this._variants[computerChoice]}`;
    return;
  }
}

const domManager = new DomManager();

export default domManager;
