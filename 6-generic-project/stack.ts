{
  interface Stack<V> {
    readonly size: number;
    push(value: V): void;
    pop(): V;
  }

  type StackNode<V> = {
    readonly value: V;
    readonly next?: StackNode<V>;
  };

  class StackImpl<V> implements Stack<V> {
    private _size: number = 0;
    private head?: StackNode<V>;
    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }

    push(value: V): void {
      if(this.size === this.capacity) {
        throw new Error('Stack is full!')
      }
      const node: StackNode<V> = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): V {
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(4);
  stack.push('yuna')
  stack.push('kim')
  stack.push('zzang')
  while(stack.size !== 0) {
    console.log(stack.pop())
  }
}


