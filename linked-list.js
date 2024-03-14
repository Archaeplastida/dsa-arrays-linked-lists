/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head
      let currentNode = this.head;
      for (let node = 0; node < this.length; node++) {
        currentNode = currentNode.next;
      }
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head; let ct = 0;

    while (currentNode !== null && ct != idx) {
      ct += 1; currentNode = currentNode.next;
    }
    return currentNode;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    for (let x = 0; x < this.length; x++) {
      if (x === idx) {
        let returnThis = this.getAt(x).val
        if (this.getAt(x + 1) && this.getAt(x - 1)) {
          this.getAt(x - 1).next = this.getAt(x + 1);
        } else if (this.getAt(x + 1)) {
          this.head = this.getAt(x + 1) //KEEP TESTING THIS OKAY?
        } else if (this.getAt(x - 1)) {
          this.getAt(x - 1).next = null
          this.tail = this.getAt(x - 1)
        }
        this.length--;
        return returnThis;
      }
    }
    throw new Error("Invalid Index.")
  }

  /** average(): return an average of all values in the list */

  average() {

  }
}


const numbers = new LinkedList()

module.exports = LinkedList;
