const { NotImplementedError } = require('../lib');

/**
 * Implement the Queue with a given interface via linked list.
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = { value, next: null };
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
  }

  dequeue() {
    if (!this.head) return undefined;
    const { value } = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return value;
  }
}

module.exports = {
  Queue
};