class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }

  printStack() {
    return this.items.toString();
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.printStack()); // "1,2,3"
console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.printStack()); // "1,2"
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
stack.clear();
console.log(stack.isEmpty()); // true
