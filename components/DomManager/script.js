"use strict"
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

export default domManager;
