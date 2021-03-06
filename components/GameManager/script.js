"use strict";
import computer from "./../ComputerPlayer/script.js";
import domManager from "./../DomManager/script.js";
class GameManager {
  _winCases = {
    scissors: `paper`,
    paper: `rock`,
    rock: `scissors`,
  };
  _scores = {
    user: 0,
    computer: 0,
  };

  incrementScore(winner) {
    return (this._scores[winner] += 1);
  }
  processScore(winner) {
    this.incrementScore(winner);
    const SCORE = this._scores[winner];
    return domManager.showScore(winner, SCORE);
  }
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
      return domManager.showResults("draw", USER_CHOICE, COMPUTER_CHOICE);
    }
    const isWin = this.checkWin(USER_CHOICE, COMPUTER_CHOICE);
    isWin ? this.processScore("user") : this.processScore("computer");
    if (isWin) {
      return domManager.showResults("win", USER_CHOICE, COMPUTER_CHOICE);
    } else {
      return domManager.showResults("lose", USER_CHOICE, COMPUTER_CHOICE);
    }
  }
}

const gameManager = new GameManager();

export default gameManager;
