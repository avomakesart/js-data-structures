class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //   Append value
  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  //   Prepend value
  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  //   Insert after
  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  //    Find value
  find(value) {
    if (!this.head) {
      return;
    }

    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }

    return;
  }

  //   Delete value
  delete(value) {
    if (!this.head) {
      return;
    }

    let curNode = this.head;

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }
    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  toArray() {
    const elements = [];

    let curNode = this.head;

    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }
}

const LinkedList1 = new LinkedList();

LinkedList1.append(1);
LinkedList1.append("Hello there");
LinkedList1.append("Hello world");
LinkedList1.append("Avo");
LinkedList1.append(true);
LinkedList1.append(18.88);
LinkedList1.prepend("First value");

LinkedList1.delete("Avo");
LinkedList1.delete("First value");

console.log(LinkedList1.toArray());
console.log(LinkedList1.find("Avo"));
console.log(LinkedList1.find("hello there"));
LinkedList1.insertAfter("New value 1", 1);
LinkedList1.insertAfter("New value 2", "Hello there");

console.log(LinkedList1.toArray());
