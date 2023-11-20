export class Heap<T> {
  arr: T[];
  compareFn: (first: T, second: T) => number;

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

    const leftChild = 2 * fromIndex + 1;
    const rightChild = 2 * fromIndex + 2;

    if (
      fromIndex >= arr.length - 1 ||
      (arr[leftChild] === undefined && arr[rightChild] === undefined)
    ) {
      return;
    }
    let indexOfMaxChild;
    if (arr[rightChild] !== undefined) {
      indexOfMaxChild =
        this.compareFn(arr[leftChild], arr[rightChild]) < 0
          ? leftChild
          : rightChild;
      // arr[leftChild] > arr[rightChild] ? leftChild : rightChild;
    } else {
      indexOfMaxChild = leftChild;
    }

    // if (arr[fromIndex] < arr[indexOfMaxChild]) {
    if (this.compareFn(arr[fromIndex], arr[indexOfMaxChild]) > 0) {
      this.swap(fromIndex, indexOfMaxChild);
      this.swimDown(indexOfMaxChild);
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
    // if (arr[fromIndex] > arr[parentIndex]) {
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
}
