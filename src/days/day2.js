class Day2 {
  constructor() {
    this.input = null;
    this.currentValue = null;
    this.colors = {
      red: 12,
      green: 13,
      blue: 14,
    };
  }

  isValidGame() {
    let regex = /\b\d{2}\b/g;
    let input = this.input.substring(this.input.indexOf(":"));
    let match, index;

    while ((match = regex.exec(input)) !== null) {
      this.currentValue = parseInt(match[0]);
      index = match.index;
      console.log(`  Found ${this.currentValue} at ${index}`);

      if (this.isOver14(this.currentValue)) {
        console.log("  Fail: Over 14");
        return false;
      }

      if (!this.checkColorAndCompare(input.substring(index))) return false;
    }

    return true;
  }

  checkColorAndCompare(input) {
    let regex = /(red|green|blue)/g;
    let match = regex.exec(input);
    let colorValue = this.colors[match[0]];

    if (this.currentValue > colorValue) {
      console.log(`  Fail: Over ${match[0]} value (${colorValue})`);
      return false;
    }

    return true;
  }

  isOver14(input) {
    if (input > 14) return true;
  }

  // Part 2

  getPowerOfColors() {
    this.getLargestColorValues();

    const power = Object.values(this.colors).reduce(
      (total, value) => total * value,
      1
    );

    console.log(power);
    return power;
  }

  getLargestColorValues() {
    let regex = /\b\d{1,2}\b/g;
    let input = this.input.substring(this.input.indexOf(":"));
    let match, index;
    this.colors = {
      red: 0,
      green: 0,
      blue: 0,
    };

    while ((match = regex.exec(input)) !== null) {
      this.currentValue = parseInt(match[0]);
      index = match.index;

      this.updateCurrentColorValue(input.substring(index));
    }
    console.log(JSON.stringify(this.colors));
  }

  updateCurrentColorValue(input) {
    let regex = /(red|green|blue)/g;
    let match = regex.exec(input);
    let colorValue = this.colors[match[0]];

    if (this.currentValue > colorValue) {
      this.colors[match[0]] = this.currentValue;
    }
  }

  getID() {
    let input = this.input;
    let id = input.substring(5, input.indexOf(":"));

    return parseInt(id);
  }
}

module.exports = Day2;
