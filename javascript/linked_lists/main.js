class LinkedList {
  constructor(head = null, tail = null, size = 0) {
    this.head = head;
    this.tail = tail;
    this.size = size;
  }

  append(value) {
    if (this.size == 0) {
      this.head = new Node(value);
      this.tail = new Node(value);
    } else if (this.size == 1) {
      const newNode = new Node(value);
      this.head.nextNode = newNode;
      this.tail = newNode;
    } else {
      const newNode = new Node(value);
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  prepend(value) {
    const oldHead = this.head;
    this.head = new Node(value, oldHead);
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(n) {
    let counter = 0;
    let currNode = this.head;
    while (currNode != null) {
      counter += 1;
      if (counter == n) {
        console.log(currNode);
      }
      currNode = currNode.nextNode;
    }
  }

  pop() {
    let currNode = this.head;
    let toPop;
    while (currNode != null) {
      if (currNode.nextNode == null) {
        toPop = currNode;
      }
      currNode = currNode.nextNode;
    }

    let searchCurrNode = this.head;
    while (searchCurrNode != null) {
      if (searchCurrNode.nextNode == toPop) {
        searchCurrNode.nextNode = null;
      }
      searchCurrNode = searchCurrNode.nextNode;
    }
  }

  contains(value) {
    let currNode = this.head;
    let hasIt = false;
    while (currNode != null) {
      if (currNode.value == value) {
        hasIt = true;
      }
      currNode = currNode.nextNode;
    }

    return hasIt;
  }

  find(value) {
    let currNode = this.head;
    let counter = 0;
    let index = null;
    while (currNode != null) {
      counter += 1;
      if (currNode.value == value) {
        index = counter;
      }
      currNode = currNode.nextNode;
    }

    if (index == null) {
      return "The list doesnt contain this value";
    } else {
      return index;
    }
  }

  toString() {
    let currNode = this.head;
    let str = ``;
    let currStr = ``;
    while (currNode != null) {
      currStr = str;
      if (currNode.nextNode == null) {
        str = `${str}(${currNode.value})`;
      } else {
        str = `${str}(${currNode.value}) --> `;
      }
      currNode = currNode.nextNode;
    }
    return str;
  }

  insertAt(value, index) {
    let counter = 0;
    let currNode = this.head;
    while (currNode != null) {
      counter += 1;
      if (counter + 1 == index) {
        let currNext = currNode.nextNode;
        currNode.nextNode = new Node(value, currNext);
        break;
      }
      currNode = currNode.nextNode;
    }
  }

  removeAt(index) {
    if (index == 0) {
      let currHead = this.head;
      this.head = currHead.nextNode;
    } else if (index == this.size) {
      let searchCurrNode = this.head;
      while (searchCurrNode != null) {
        if (searchCurrNode.nextNode == this.tail) {
          searchCurrNode.nextNode = null;
          this.tail = searchCurrNode;
        }
        searchCurrNode = searchCurrNode.nextNode;
      }
    } else {
      let counter = 0;
      let currNode = this.head;
      let prevNode;
      while (currNode != null) {
        counter += 1;
        if (counter == index - 1) {
          prevNode = currNode
        }
        if (counter == index + 1){
          prevNode.nextNode = currNode
        }
        currNode = currNode.nextNode;
      }
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

list.append(2);
list.append(4);
list.append(6);
list.append(9);

list.prepend(1);

list.insertAt(10, 2);

console.log(list.toString());
list.removeAt(3);
console.log(list.toString());
