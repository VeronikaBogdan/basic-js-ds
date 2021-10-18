// const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
	constructor(){
    this.value = null;
  }

  getUnderlyingList() {
    return this.value;
  }

  enqueue(value) {
		let current = this.value;
		
    while(current && current.next){
      current = current.next;
    }

		current === null ? this.value = new ListNode(value) : current.next = new ListNode(value);
  }

  dequeue() {
		let first = this.value,
    second = first.next;

    let del = this.value.value;

    first.value = second.value;
    first.next = second.next;
    
    return del;
  }

}
