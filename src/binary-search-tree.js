const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);
    if (!this.rootNode) {
      this.rootNode = node;
      return;
    }

    let current = this.rootNode;
    while (true) {
      if (data === current.data) return;
      if (data < current.data) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (!node.left) return node.right;
    if (!node.right) return node.left;

    let minRight = node.right;
    while (minRight.left) {
      minRight = minRight.left;
    }
    node.data = minRight.data;
    node.right = this.removeNode(node.right, minRight.data);
    return node;
  }

  min() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.left) current = current.left;
    return current.data;
  }

  max() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.right) current = current.right;
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};