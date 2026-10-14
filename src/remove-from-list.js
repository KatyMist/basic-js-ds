const { NotImplementedError } = require('../lib');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 */
function removeKFromList(l, k) {
  while (l && l.value === k) {
    l = l.next;
  }

  let current = l;
  while (current && current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};