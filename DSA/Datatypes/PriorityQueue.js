class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  enqueue(element, priority) {
    this.collection.push({ element, priority });
    this.collection.sort((a, b) => b.priority - a.priority);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Priority Queue is empty";
    }
    return this.collection.shift().element;
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  size() {
    return this.collection.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "Priority Queue is empty";
    }
    return this.collection[0].element;
  }

  clear() {
    this.collection = [];
  }

  printQueue() {
    return this.collection
      .map((item) => `${item.element} (priority: ${item.priority})`)
      .toString();
  }
}

const pq = new PriorityQueue();
pq.enqueue("Low", 1);
pq.enqueue("High", 5);
pq.enqueue("Medium", 3);

pq;

// console.log(pq.dequeue()); // { value: "High", priority: 5 }
