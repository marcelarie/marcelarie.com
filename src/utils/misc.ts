// Miscellaneous utility functions

export function segmentWords(text: string) {

  if (Intl.Segmenter) {
    const Segmenter = new Intl.Segmenter("en", { granularity: "word" });
    const segmentedText = Segmenter.segment(text);
    return segmentedText;
  }

  // Fallback for browsers that don't support Intl.Segmenter
  return text.match(/\b\w+\b/g) || [];
}

export function calculateReadingTime(
  body: string,
  averageWordsPerMinute: number = 250, // 250 is the average reading speed of an adult
): number {
  const segmentedText = segmentWords(body);

  let wordCount = 0;
  if (Array.isArray(segmentedText)) {
    // Fallback case: array of strings
    wordCount = segmentedText.length;
  } else {
    // Intl.Segmenter case: Segments object
    for (const segment of segmentedText) {
      if ("isWordLike" in segment && segment.isWordLike) {
        wordCount++;
      }
    }
  }

  return Math.ceil(wordCount / averageWordsPerMinute);
}
