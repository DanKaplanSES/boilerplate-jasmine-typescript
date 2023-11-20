import 'jasmine';
import { System } from './example';

describe('Example', () => {
  it('Acceptance Test', () => {
    const system = new System();
    system.add(`file1.txt`, 100);
    system.add(`file2.txt`, 200, 'collection1');
    system.add(`file3.txt`, 200, 'collection1');
    system.add('file4.txt', 300, 'collection2');
    system.add('file5.txt', 100);

    expect(system.totalSize()).toEqual(900);
    const collections = system.sortedCollections();

    expect(collections[0]).toEqual({ collection: 'collection1', size: 400 });
    expect(collections[1]).toEqual({ collection: 'collection2', size: 300 });
  });

  it(`totalSize()`, () => {
    const system = new System();

    system.add(`file1.txt`, 100);
    expect(system.totalSize()).toEqual(100);

    system.add(`file2.txt`, 200, 'collection1');
    expect(system.totalSize()).toEqual(300);

    system.add(`file3.txt`, 200, 'collection1');
    expect(system.totalSize()).toEqual(500);

    system.add('file4.txt', 300, 'collection2');
    expect(system.totalSize()).toEqual(800);

    system.add('file5.txt', 100);
    expect(system.totalSize()).toEqual(900);
  });

  it(`sortedCollections()`, () => {
    const system = new System();

    system.add(`file1.txt`, 100);
    expect(system.sortedCollections()).toEqual(
      jasmine.objectContaining({
        length: 0,
      })
    );

    system.add(`file2.txt`, 200, 'collection1');
    expect(system.sortedCollections()).toEqual(
      jasmine.objectContaining({
        length: 1,
        0: { collection: 'collection1', size: 200 },
      })
    );

    system.add(`file3.txt`, 200, 'collection1');
    expect(system.sortedCollections()).toEqual(
      jasmine.objectContaining({
        length: 1,
        0: { collection: 'collection1', size: 400 },
      })
    );

    system.add('file4.txt', 300, 'collection2');
    expect(system.sortedCollections()).toEqual(
      jasmine.objectContaining({
        length: 2,
        0: { collection: 'collection1', size: 400 },
        1: { collection: 'collection2', size: 300 },
      })
    );

    system.add('file5.txt', 100);
    expect(system.sortedCollections()).toEqual(
      jasmine.objectContaining({
        length: 2,
        0: { collection: 'collection1', size: 400 },
        1: { collection: 'collection2', size: 300 },
      })
    );

    system.add('file6.txt', 500, 'collection2');
    expect(system.sortedCollections()).toEqual(
      jasmine.objectContaining({
        length: 2,
        0: { collection: 'collection2', size: 800 },
        1: { collection: 'collection1', size: 400 },
      })
    );
  });
});

/*
Given a list of [FileName, FileSize, [Collection]] - Collection is optional, i.e., a collection can have 1 or more files. 
Same file can be a part of more than 1 collection.
How would you design a system

To calculate total size of files processed.
To calculate Top K collections based on size.
Example:
file1.txt(size: 100)
file2.txt(size: 200) in collection "collection1"
file3.txt(size: 200) in collection "collection1"
file4.txt(size: 300) in collection "collection2"
file5.txt(size: 100)
Output:

Total size of files processed: 900
Top 2 collections:

collection1 : 400
collection2 : 300
*/
