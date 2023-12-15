const fs = require("fs");
const readline = require("readline");
const day2 = require("./days/day2");

// create a class for aoc
class Aoc {
  constructor() {
    this.input = null;
  }
}

let day = new day2();
let total = 0;
let index = 0;
let lineReader = readline.createInterface({
  input: fs.createReadStream("./src/inputs/puzzleinput.txt"),
});

lineReader.on("line", function (line) {
  day.input = line;
  // process.stdout.write(++index + ": ");
  console.log(`Game ${++index}: `);

  day.isValidGame();
  console.log();
});
lineReader.on("close", function () {
  // console.log(total);
});
