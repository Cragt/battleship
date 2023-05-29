import _ from "lodash";

function ship(length, timesHit, isSunk) {
  return {
    length: length,
    timesHit: timesHit,
    isSunk: isSunk,
    hit() {
      this.timesHit++;
      this.sunk();
    },
    sunk() {
      if (this.timesHit === this.length) {
        this.isSunk = true;
      }
    },
  };
}

let ship1 = ship(4, 2, false);
console.log(ship1);
ship1.hit();
ship1.hit();
console.log(ship1);
