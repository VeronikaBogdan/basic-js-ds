// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
	while (indexOf(l, k) != -1) {
		removeAt(l, indexOf(l, k));
	}

	return l;

	function removeAt(l, position) {
		if (position < 0 || position >= l.length) {
			return null;
		}
	
		let current = l.next;
	
		if (position === 0) {
			l.value = current.value;
			l.next = current.next;
		} else {
			current = l;
			let prev = null;
			let index = 0;
	
			while (index < position) {
				prev = current;
				current = current.next;
				index++;
			}
	
			prev.next = current.next;
		}
	
		return l;
	}

	function indexOf(l, element) {
    let current = l.value;
    let index = 0;
    if (current === element) return 0;
    index++;

    current = l.next;

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }
}
