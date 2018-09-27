import { timeParserDE } from "./Utils";

describe("Testing Utils functionality", () => {
  it(" timeParserDE Should return the correct date", () => {
    const time = timeParserDE("2016-04-02T08:09:12.088Z");
    expect(timeParserDE("2016-04-02T08:09:12.088Z")).toEqual("02.04.2016");
  });
});
