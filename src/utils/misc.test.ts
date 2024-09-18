import { expect, test } from "vitest";
import { calculateReadingTime, segmentWords } from "./misc";

test("Misc Utils: calculateReadingTime", () => {
  const oneThousandWords = "word ".repeat(1000);
  const twoHundredWords = "word ".repeat(200);
  const tenThousandWords = "word ".repeat(10000);

  expect(calculateReadingTime(oneThousandWords)).toBe(4);
  expect(calculateReadingTime(twoHundredWords)).toBe(1);
  expect(calculateReadingTime(tenThousandWords)).toBe(40);
});

test("Misc Utils: segmentWords with Intl.Segmenter", () => {
  const oneThousandWords = "word ".repeat(1000);
  const twoHundredWords = "word ".repeat(200);
  const tenThousandWords = "word ".repeat(10000);

  expect(segmentWords(oneThousandWords, false)).toHaveLength(1000);
  expect(segmentWords(twoHundredWords, false)).toHaveLength(200);
  expect(segmentWords(tenThousandWords, false)).toHaveLength(10000);
});

test("Misc Utils: segmentWords with regex fallback", () => {
  const oneThousandWords = "word ".repeat(1000);
  const twoHundredWords = "word ".repeat(200);
  const tenThousandWords = "word ".repeat(10000);

  expect(segmentWords(oneThousandWords, true)).toHaveLength(1000);
  expect(segmentWords(twoHundredWords, true)).toHaveLength(200);
  expect(segmentWords(tenThousandWords, true)).toHaveLength(10000);
});
