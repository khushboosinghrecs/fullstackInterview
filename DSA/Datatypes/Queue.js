class Queuje {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }
  clear() {
    this.items = [];
  }
  printQueue() {
    return this.items.toString();
  }
}
