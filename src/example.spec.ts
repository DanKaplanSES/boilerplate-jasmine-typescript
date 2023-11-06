import "jasmine";

describe("Example", () => {
  it("passes test", () => {
    expect(true).toBeTruthy();
  });

  it("logs unhandled promise rejections?", () => {
    Promise.reject("unhandled");
  });

  it("logs unhandled promise rejections in async functions?", async () => {
    Promise.reject("unhandled");
  });

  it("logs unhandled promises that throw errors?", () => {
    new Promise(() => {
      throw new Error("unhandled");
    });
  });
});
