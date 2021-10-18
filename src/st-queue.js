const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
  queueList = null;

  getUnderlyingList() {
    return this.queueList;
  }

  enqueue(value) {
    if (this.queueList === null) {
      this.queueList = new ListNode(value);
    } else {
      let copyLink = this.queueList;
      while (true) {
        if (copyLink.next === null) {
          copyLink.next = new ListNode(value);
          break;
        } else copyLink = copyLink.next;
      }
    }
  }

  dequeue() {
    let head;
    if (this.queueList === null) return head;
    else {
      head = this.queueList.value;
      this.queueList = this.queueList.next;
      return head;
    }
  }
};
