"use strict";
class DomManager {
  _options = Array.from(
    document.getElementsByClassName("options__item-wrapper")
  );
  _root = document.getElementsByClassName("results")[0];
  _resultsHeader = document.getElementsByClassName("results__alert")[0];
  _scoreContainers = {
    user: document.getElementsByClassName("score__user")[0],
    computer: document.getElementsByClassName("score__computer")[0],
  };
  _results = {
    user: document.getElementsByClassName("user-result")[0],
    computer: document.getElementsByClassName("comp-result")[0],
  };
  _alerts = {
    win: `You won!`,
    lose: `Sorry, you lost`,
    draw: `It is a draw!`,
  };
  _variants = {
    scissors: `<i class="results__item icon-hand-scissors-o"></i>`,
    rock: `<i class="options__item icon-hand-grab-o">`,
    paper: `<i class="results__item icon-hand-rock-o"></i>`,
  };
  showScore(winner, score) {
    return (this._scoreContainers[winner].innerHTML = score);
  }
  cleanResults() {
    for (let el in this._results) {
      this._results[el].innerHTML = "";
    }
    return;
  }
  showAlert(result) {
    return (this._resultsHeader.innerHTML = `${this._alerts[result]}`);
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
