const LinkedList = require('./LinkedList');

class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize; 
    }

    hasRoom() {
        if(this.size < this.maxSize) {
            return true;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    push(value) {
        if (this.hasRoom()) {
            this.stack.addToHead(value);
            this.size++;
        } else {
            throw new Error('Stack is full!')
        }
    }

    pop() {
        if(!this.isEmpty()) {
            const value = this.stack.removeHead();
            this.size--;
            return value;
        } else {
            console.log('Stack is empty!');
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stack.head.data;
        } else {
            return null;
        }
    }
}

module.exports = Stack;