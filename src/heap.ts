export class Heap<T> {
  arr: T[];
  compareFn: (first: T, second: T) => number;

  /**
   * @constructor
   * @param arr An array of type T
   * @param compareFn A comparator function. Examples:
   *
   * ```ts
   * // Min Comparator
   * [5, 4, 3, 2, 1].sort((a, b) => {
   *     return a - b;
   * }) === [1, 2, 3, 4, 5]
   *
   * // Max Comparator
   * [1, 2, 3, 4, 5].sort((a, b) => {
   *     return b - a;
   * }) === [5, 4, 3, 2, 1]
   * ```
   */
  constructor(arr: T[], compareFn: (first: T, second: T) => number) {
    this.arr = arr.sort(compareFn);
    this.compareFn = compareFn;
  }

  pop(): T | undefined {
    const arr = this.arr;

    const popped = arr[0];

    arr[0] = arr[arr.length - 1];
    arr.length = arr.length - 1;

    this.swimDown(0);

    return popped;
  }

  private swimDown(fromIndex: number) {
    const arr = this.arr;

    const leftChild = this.leftChild(fromIndex);
    const rightChild = this.rightChild(fromIndex);

    if (!this.indexExists(leftChild) && !this.indexExists(rightChild)) {
      return;
    }

    const fixIfIncorrectOrder = (toIndex: number) => {
      if (!this.indexesInOrder(fromIndex, toIndex)) {
        this.swap(fromIndex, toIndex);
        this.swimDown(toIndex);
      }
    };

    if (this.indexExists(rightChild)) {
      const indexOfMaxChild = this.indexesInOrder(leftChild, rightChild)
        ? leftChild
        : rightChild;
      fixIfIncorrectOrder(indexOfMaxChild);
    } else {
      fixIfIncorrectOrder(leftChild);
    }
  }

  push(element: T) {
    const arr = this.arr;

    arr.push(element);

    this.swimUp(arr.length - 1);
  }

  private swimUp(fromIndex: number) {
    const arr = this.arr;

    if (fromIndex <= 0) {
      return;
    }

    const parentIndex = Math.floor((fromIndex - 1) / 2);
    if (this.compareFn(arr[fromIndex], arr[parentIndex]) < 0) {
      this.swap(fromIndex, parentIndex);
      this.swimUp(parentIndex);
    }
  }

  private swap(indexOne: number, indexTwo: number): void {
    const arr = this.arr;

    const temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
  }

  private indexExists(index: number): boolean {
    return this.arr[index] !== undefined;
  }

  private indexesInOrder(indexOne: number, indexTwo: number): boolean {
    const arr = this.arr;
    return this.compareFn(arr[indexOne], arr[indexTwo]) <= 0;
  }

  private leftChild(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private rightChild(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }
}
