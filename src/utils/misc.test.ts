// sum.test.js
import { expect, test } from "vitest";
import { calculateReadingTime } from "./misc";

test("Misc Utils: calculateReadingTime", () => {
  const oneThousandWords = "word ".repeat(1000);
  const twoHundredWords = "word ".repeat(200);
  const tenThousandWords = "word ".repeat(10000);

  expect(calculateReadingTime(oneThousandWords)).toBe(4);
  expect(calculateReadingTime(twoHundredWords)).toBe(1);
  expect(calculateReadingTime(tenThousandWords)).toBe(40);
});
