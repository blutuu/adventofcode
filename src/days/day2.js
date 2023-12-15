class Day2 {
  constructor() {
    this.input = null;
    this.colors = {
      red: 12,
      green: 13,
      blue: 14,
    };
  }

  isValidGame() {
    let regex = /\b\d{2}\b/g;
    let input = this.input.substring(this.input.indexOf(":"));
    let match, index, value;

    while ((match = regex.exec(input)) !== null) {
      value = parseInt(match[0]);
      index = match.index;
      console.log(`Found ${value} at ${index}`);

      if (this.isOver14(value)) {
        console.log("Fail");
        return false;
      }

      this.checkColorAndCompare(input.substring(index));
    }

    return true;
  }

  checkColorAndCompare(input) {
    let regex = /(red|green|blue)/g;
    let match = regex.exec(input);

    console.log(this.colors[match[0]]);
  }

  isOver14(input) {
    if (input > 14) return true;
  }

  getID() {
    let input = this.input;
    let id = input.substring(5, input.indexOf(":"));

    return parseInt(id);
  }
}

module.exports = Day2;
