// Miscellaneous utility functions

/**
 * Segments the input text into words.
 *
 * @param {string} text - The input text to be segmented.
 * @param {boolean} [forceFallback=false] - If true, forces the use of fallback method even if Intl.Segmenter is available.
 * @returns {string[]} An array of segmented words.
 */
export function segmentWords(
  text: string,
  forceFallback: boolean = false,
): string[] {
  if (Intl.Segmenter && !forceFallback) {
    const Segmenter = new Intl.Segmenter("en", { granularity: "word" });
    const segmentedText = Segmenter.segment(text);

    const words = [];
    for (const segment of segmentedText) {
      if ("isWordLike" in segment && segment.isWordLike) {
        words.push(segment.segment);
      }
    }
    return words;
  }

  // Fallback for browsers that don't support Intl.Segmenter
  return text.match(/\b\w+\b/g) || [];
}

/**
 * Calculates the reading time of the input text. Defaults to 250 words per minute.
 *
 * @param {string} body - The input text to calculate the reading time of.
 * @param {number} [averageWordsPerMinute=250] - The average words per minute.
 * @returns {number} The reading time in minutes.
 */
export function calculateReadingTime(
  body: string,
  averageWordsPerMinute: number = 250, // 250 is the average reading speed of an adult
): number {
  const segmentedText = segmentWords(body);
  const wordCount = segmentedText.length;

  return Math.ceil(wordCount / averageWordsPerMinute);
}
