import "jasmine";

describe("Example", function () {
  const functionPromiseMap: { [index: string]: "resolve" | "reject" } = {
    beforeAll: "resolve",
    beforeEach: "resolve",
    afterEach: "resolve",
    afterAll: "resolve",
    it: "reject",
  };

  function returnPromise(functionName: string): Promise<void> {
    const resolveOrRejectString = functionPromiseMap[functionName];
    return Promise[resolveOrRejectString](functionName);
  }

  beforeAll(() => {
    return returnPromise("beforeAll");
  });

  beforeEach(() => {
    return returnPromise("beforeEach");
  });

  afterEach(() => {
    return returnPromise("afterEach");
  });

  afterAll(() => {
    return returnPromise("afterAll");
  });

  it("passes with synchronous code", () => {
    expect(true).toBeTruthy();
  });
  
  it("fails with synchronous code", () => {
    expect(true).toBeFalsy();
  });

  it("returns a rejected promise", () => {
    return returnPromise("it");
  });
});
