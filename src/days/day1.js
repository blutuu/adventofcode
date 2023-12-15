const fs = require("fs");
const readline = require("readline");

// create a class for aoc
class Day1 {
  constructor() {
    this.input = null;
    this.firstDigit = null;
    this.secondDigit = null;
    this.numberstrings = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    this.overlappers = [
      "one",
      "two",
      "three",
      "five",
      "seven",
      "eight",
      "nine",
    ];
  }

  // Day 1 - Part 1 Calibration Values
  getCalibrationValue(input) {
    this.checkForNumberString();
    console.log(this.firstDigit + "" + this.secondDigit);

    return parseInt(this.firstDigit + "" + this.secondDigit);
  }

  checkForNumberString() {
    let regex =
      /(one|two|three|four|five|six|seven|eight|nine|1|2|3|4|5|6|7|8|9)/gi;
    let match, substring;
    this.firstDigit = null;

    while ((match = regex.exec(this.input)) !== null) {
      substring = this.input.substring(match.index + 1);
      this.secondDigit = null;

      if (this.firstDigit === null) {
        this.firstDigit = parseInt(match[0])
          ? match[0]
          : this.numberstrings.indexOf(match[0]) + 1;
      }

      this.secondDigit = parseInt(match[0])
        ? match[0]
        : this.numberstrings.indexOf(match[0]) + 1;

      if (this.overlappers.includes(match[0])) this.checkForOverlap(substring);
    }
  }

  checkForOverlap(input) {
    let regex = /(one|two|three|eight|nine)/gi;
    let match = regex.exec(input);
    console.log(input);

    if (match) {
      this.secondDigit = parseInt(match[0])
        ? match[0]
        : this.numberstrings.indexOf(match[0]) + 1;
    }
  }
}

module.exports = Day1;
