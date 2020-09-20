"use strict"
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
export default computer;
