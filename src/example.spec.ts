import 'jasmine';

import { example } from './example';

describe('Example', () => {
  
  it('passes', () => {
    example();
    expect(true).toBeFalsy();
  });

});
