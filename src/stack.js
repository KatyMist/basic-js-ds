const { NotImplementedError } = require('../lib');

/**
 * Implement the Stack with a given interface via array.
 */
class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

module.exports = {
  Stack,
};