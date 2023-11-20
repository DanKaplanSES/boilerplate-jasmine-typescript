import 'jasmine';
import { Heap } from './heap';

describe('Heap', () => {
  describe('Max', () => {
    function compareFunction(first: number, second: number): number {
      return second - first;
    }

    function buildMaxHeap(arr: number[]): Heap<number> {
      return new Heap(arr, compareFunction);
    }

    describe('pop()', () => {
      it('returns undefined if you pop() an empty heap', () => {
        const heap = buildMaxHeap([]);

        expect(heap.pop()).toBeUndefined();
      });

      it('pops the max element if 3 elemeents created in sorted order', () => {
        const heap = buildMaxHeap([1, 2, 3]);

        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(1);
      });

      it('pops the max element if created in sorted order', () => {
        const heap = buildMaxHeap([1, 2, 3, 4, 5]);

        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(1);
      });

      it('pops the max element if created in unsorted order', () => {
        const heap = buildMaxHeap([5, 4, 3, 2, 1]);

        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(1);
      });

      it('pops the max element if created in random order', () => {
        const heap = buildMaxHeap([2, 5, 4, 1, 3]);

        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(1);
      });

      it('pops the max element if mixed with negative elements', () => {
        const heap = buildMaxHeap([2, 5, -4, 1, 3]);

        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(1);
        expect(heap.pop()).toEqual(-4);
      });
    });

    describe(`push()`, () => {
      it(`pops the max element after pushing min`, () => {
        const heap = buildMaxHeap([2, 3, 4, 5]);
        heap.push(1);

        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(1);
      });

      it(`pops the max element after pushing max`, () => {
        const heap = buildMaxHeap([1, 2, 3, 4]);
        heap.push(5);

        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(1);
      });

      it(`pops the max element after pushing mid`, () => {
        const heap = buildMaxHeap([1, 2, 4, 5]);
        heap.push(3);

        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(1);
      });

      it(`pops the max element after pushing mid in large array`, () => {
        const heap = buildMaxHeap([1, 2, 3, 4, 6, 7, 8, 9]);
        heap.push(5);

        expect(heap.pop()).toEqual(9);
        expect(heap.pop()).toEqual(8);
        expect(heap.pop()).toEqual(7);
        expect(heap.pop()).toEqual(6);
        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(1);
      });

      it(`pops the max element after pushing a duplicate element`, () => {
        const heap = buildMaxHeap([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        heap.push(7);

        expect(heap.pop()).toEqual(9);
        expect(heap.pop()).toEqual(8);
        expect(heap.pop()).toEqual(7);
        expect(heap.pop()).toEqual(7);
        expect(heap.pop()).toEqual(6);
        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(1);
      });

      it('can create a large heap by pushing to an empty heap', () => {
        const heap = buildMaxHeap([]);
        heap.push(9);
        heap.push(8);
        heap.push(7);
        heap.push(6);
        heap.push(5);
        heap.push(4);
        heap.push(3);
        heap.push(2);
        heap.push(1);
        heap.push(7);

        expect(heap.pop()).toEqual(9);
        expect(heap.pop()).toEqual(8);
        expect(heap.pop()).toEqual(7);
        expect(heap.pop()).toEqual(7);
        expect(heap.pop()).toEqual(6);
        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(1);
      });
    });
  });

  describe('Min', () => {
    function compareFunction(first: number, second: number): number {
      return first - second;
    }

    function buildMinHeap(arr: number[]): Heap<number> {
      return new Heap(arr, compareFunction);
    }

    describe('pop()', () => {
      it('returns undefined if you pop() an empty heap', () => {
        const heap = buildMinHeap([]);

        expect(heap.pop()).toBeUndefined();
      });

      it('pops the min element if 3 elemeents created in sorted order', () => {
        const heap = buildMinHeap([3, 2, 1]);

        expect(heap.pop()).toEqual(1);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(3);
      });

      it('pops the min element if created in sorted order', () => {
        const heap = buildMinHeap([5, 4, 3, 2, 1]);

        expect(heap.pop()).toEqual(1);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(5);
      });

      it('pops the min element if created in unsorted order', () => {
        const heap = buildMinHeap([5, 4, 3, 2, 1]);

        expect(heap.pop()).toEqual(1);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(5);
      });
    });

    describe(`push()`, () => {
      it(`pops the min element after pushing min`, () => {
        const heap = buildMinHeap([2, 3, 4, 5]);
        heap.push(1);

        expect(heap.pop()).toEqual(1);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(5);
      });

      it(`pops the min element after pushing max`, () => {
        const heap = buildMinHeap([1, 2, 3, 4]);
        heap.push(5);

        expect(heap.pop()).toEqual(1);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(5);
      });

      it(`pops the min element after pushing mid`, () => {
        const heap = buildMinHeap([1, 2, 4, 5]);
        heap.push(3);

        expect(heap.pop()).toEqual(1);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(5);
      });

      it('can create a large heap by pushing to an empty heap', () => {
        const heap = buildMinHeap([]);
        heap.push(9);
        heap.push(8);
        heap.push(7);
        heap.push(6);
        heap.push(5);
        heap.push(4);
        heap.push(3);
        heap.push(2);
        heap.push(1);
        heap.push(7);

        expect(heap.pop()).toEqual(1);
        expect(heap.pop()).toEqual(2);
        expect(heap.pop()).toEqual(3);
        expect(heap.pop()).toEqual(4);
        expect(heap.pop()).toEqual(5);
        expect(heap.pop()).toEqual(6);
        expect(heap.pop()).toEqual(7);
        expect(heap.pop()).toEqual(7);
        expect(heap.pop()).toEqual(8);
        expect(heap.pop()).toEqual(9);
      });
    });
  });

  describe('Min array length', () => {
    function compareFunction(first: number[], second: number[]): number {
      return first.length - second.length;
    }

    function buildMinHeap(arr: number[][]): Heap<number[]> {
      return new Heap(arr, compareFunction);
    }

    describe('pop()', () => {
      it('pops the min element if 3 elemeents created in sorted order', () => {
        const heap = buildMinHeap([[3], [2, 2], [1, 1, 1]]);

        expect(heap.pop()).toEqual([3]);
        expect(heap.pop()).toEqual([2, 2]);
        expect(heap.pop()).toEqual([1, 1, 1]);
      });
    });

    describe(`push()`, () => {
      it(`pops the min element after pushing mid`, () => {
        const heap = buildMinHeap([[1], [2, 2], [4, 4, 4, 4], [5, 5, 5, 5, 5]]);
        heap.push([3, 3, 3]);

        expect(heap.pop()).toEqual([1]);
        expect(heap.pop()).toEqual([2, 2]);
        expect(heap.pop()).toEqual([3, 3, 3]);
        expect(heap.pop()).toEqual([4, 4, 4, 4]);
        expect(heap.pop()).toEqual([5, 5, 5, 5, 5]);
      });
    });
  });

  it(`returns correct index for parent algo`, () => {
    const calcParent = (index: number) =>
      index > 0 ? Math.floor((index - 1) / 2) : undefined;

    [5, 4, 3, 2, 1];

    expect(calcParent(0)).toEqual(undefined);
    expect(calcParent(1)).toEqual(0);
    expect(calcParent(2)).toEqual(0);
    expect(calcParent(3)).toEqual(1);
    expect(calcParent(4)).toEqual(1);
  });

  it(`returns correct index for leftChild algo`, () => {
    const calcLeftChild = (index: number) => 2 * index + 1;

    [5, 4, 3, 2, 1];

    expect(calcLeftChild(0)).toEqual(1);
    expect(calcLeftChild(1)).toEqual(3);
    expect(calcLeftChild(2)).toEqual(5);
  });

  it(`returns correct index for rightChild algo`, () => {
    const calcRightChild = (index: number) => 2 * index + 2;

    [5, 4, 3, 2, 1];

    expect(calcRightChild(0)).toEqual(2);
    expect(calcRightChild(1)).toEqual(4);
    expect(calcRightChild(2)).toEqual(6);
  });
});
