const fs = require("fs");
const readline = require("readline");

// create a class for aoc
class Aoc {
  constructor() {
    this.input = null;
  }

  // Day 1 - Part 1 Calibration Values
  getCalibrationValue(input) {
    let j = input.length - 1;
    let firstDigit = "",
      secondDigit = "";

    for (let i = 0; i < input.length; i++) {
      if (Number.isInteger(parseInt(input[i])) && firstDigit === "") {
        firstDigit = input[i];
      }
      if (Number.isInteger(parseInt(input[j])) && secondDigit === "") {
        secondDigit = input[j];
      }
      j--;
    }

    return parseInt(firstDigit + secondDigit);
  }
}

// create a new instance of the class
const aoc = new Aoc();
aoc.getCalibrationValue("mdmvbhqjt5rkfpcnfvzhkkfbjvh8three9");

let lineReader = readline.createInterface({
  input: fs.createReadStream("inputs/day1.txt"),
});

let total = 0;
lineReader.on("line", function (line) {
  total += aoc.getCalibrationValue(line);
});
lineReader.on("close", function () {
  console.log(total);
});
