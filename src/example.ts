type CollectionSize = { collection: string; size: number };

export class System {
  files: { name: string; size: number; collections: string[] }[] = [];
  collectionMap: Map<string, number> = new Map<string, number>();

  add(name: string, size: number, ...collections: string[]) {
    this.files.push({ name, size, collections });
    collections.forEach((collectionName) => {
      if (!this.collectionMap.has(collectionName)) {
        this.collectionMap.set(collectionName, 0);
      }
      const currentCollectionSize = this.collectionMap.get(collectionName);
      if (currentCollectionSize !== undefined) {
        this.collectionMap.set(collectionName, currentCollectionSize + size);
      } else {
        throw new Error(
          `this.collectionMap.get(${collectionName}) === undefined`
        );
      }
    });
  }

  totalSize(): number {
    return this.files.reduce((prev, curr) => {
      return prev + curr.size;
    }, 0);
  }

  sortedCollections(): CollectionSize[] {
    return [...this.collectionMap.entries()]
      .map((entry): CollectionSize => {
        return { collection: entry[0], size: entry[1] };
      })
      .sort((first: CollectionSize, second: CollectionSize) => {
        return second.size - first.size;
      });
  }
}
