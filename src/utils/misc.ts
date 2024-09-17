// Miscellaneous utility functions

export function calculateReadingTime(
  body: string,
  averageWordsPerMinute: number = 250,
): number {
  const Segmenter = new Intl.Segmenter("en", { granularity: "word" });
  const segmentedText = Segmenter.segment(body);

  let wordCount = 0;
  for (const segment of segmentedText) {
    if (segment.isWordLike) {
      wordCount++;
    }
  }

  return Math.ceil(wordCount / averageWordsPerMinute);
}
