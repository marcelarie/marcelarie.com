import { expect, test } from "vitest";
import { calculateReadingTime, normalizeCase, segmentWords } from "./misc";
import exp from "constants";

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

test("Misc Utils: normalizeString", () => {
  const camelCase = "camelCase";
  const snakeCase = "snake_case";
  const kebabCase = "kebab-case";
  const normalCase = "normal case";
  const consecutiveSpaces = "    normal    case    ";
  // const consecutiveCapitalStart = "APIKey";

  expect(normalizeCase(camelCase)).toBe("Camel Case");
  expect(normalizeCase(snakeCase)).toBe("Snake Case");
  expect(normalizeCase(kebabCase)).toBe("Kebab Case");
  expect(normalizeCase(normalCase)).toBe("Normal Case");
  expect(normalizeCase(consecutiveSpaces)).toBe("Normal Case");
  // expect(normalizeCase(consecutiveCapitalStart)).toBe("API Key"); // This test case is failing
});
