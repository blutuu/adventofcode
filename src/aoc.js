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

    console.log(firstDigit, secondDigit);
  }
}

// create a new instance of the class
const aoc = new Aoc();
aoc.getCalibrationValue("mdmvbhqjt5rkfpcnfvzhkkfbjvh8three9");
