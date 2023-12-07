const fs = require("fs");
const readline = require("readline");

// create a class for aoc
class Aoc {
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
  }

  // Day 1 - Part 1 Calibration Values
  getCalibrationValue(input) {
    let j = input.length - 1;

    this.checkForNumberString();
    console.log(this.firstDigit + "" + this.secondDigit);

    return parseInt(this.firstDigit + "" + this.secondDigit);
  }

  checkForNumberString() {
    let regex =
      /(one|two|three|four|five|six|seven|eight|nine|1|2|3|4|5|6|7|8|9)/gi;
    let match;
    this.firstDigit = null;

    while ((match = regex.exec(this.input)) !== null) {
      if (this.firstDigit === null) {
        this.firstDigit = parseInt(match[0])
          ? match[0]
          : this.numberstrings.indexOf(match[0]) + 1;
        this.input = "three";
      }
      // console.log(`Found ${match[0]} at index ${match.index}`);
      this.secondDigit = parseInt(match[0])
        ? match[0]
        : this.numberstrings.indexOf(match[0]) + 1;
    }
    // console.log();
  }
}

// create a new instance of the class
const aoc = new Aoc();
let total = 0;
let index = 0;
let lineReader = readline.createInterface({
  input: fs.createReadStream("./src/inputs/day1.txt"),
});

lineReader.on("line", function (line) {
  aoc.input = line;
  process.stdout.write(++index + ": ");
  total += aoc.getCalibrationValue(line);
});
lineReader.on("close", function () {
  console.log(total);
});
