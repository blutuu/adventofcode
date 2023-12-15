class Day2 {
  constructor() {
    this.input = null;
    const colors = ["red", "green", "blue"];
  }

  isValidGame() {
    let regex = /(red|green|blue)/g;
    let input = this.input;
    let match;

    while ((match = regex.exec(input)) !== null) {
      console.log(`Found ${match[0]} at ${match.index}`);
    }
  }

  getID() {
    let input = this.input;
    let id = input.substring(5, input.indexOf(":"));

    return parseInt(id);
  }
}

module.exports = Day2;
