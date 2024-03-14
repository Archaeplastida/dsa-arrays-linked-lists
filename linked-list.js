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
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head; let ct = 0;

    while (currentNode !== null && ct != idx) {
      ct++; currentNode = currentNode.next;
    }
    return currentNode;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    this.getAt(idx).val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    for (let x = 0; x <= this.length; x++) {
      if (x === idx) {
        let newNode = new Node(val);
        if (this.getAt(x + 1) && this.getAt(x - 1)) {
          this.getAt(x - 1).next = newNode;
          newNode.next = this.getAt(x + 1);
          return
        } else if (this.getAt(x + 1)) {
          this.unshift(val);
          return
        } else if (this.getAt(x - 1)) {
          this.push(val);
          return
        } else {
          this.push(val);
          return
        }
      }
    }
    throw new Error("Invalid Index.");
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
        } else {
          this.head = null;
          this.tail = null;
        }
        this.length--;
        return returnThis;
      }
    }
    throw new Error("Invalid Operation.");
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    for (let x = 0; x < this.length; x++) {
      sum += this.getAt(x).val
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;