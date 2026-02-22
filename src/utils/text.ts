/**
 * Strips markdown formatting from text
 * Removes links, code blocks, and markdown symbols
 */
export function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\x60\x60\x60[\s\S]*?\x60\x60\x60/g, "")
    .replace(/[#*_\x60]/g, "")
    .replace(/\n+/g, " ")
    .trim();
}

/**
 * Creates a preview text from content
 * @param text - The text to create preview from
 * @param maxLength - Maximum length of preview
 * @returns Preview text with ellipsis if truncated
 */
export function createPreview(text: string, maxLength: number): string {
  const cleanText = stripMarkdown(text);

  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  return cleanText.substring(0, maxLength) + "...";
}

/**
 * Creates responsive preview text for mobile and desktop
 * @param text - The text to create preview from
 * @param mobileLengh - Maximum length for mobile view
 * @param desktopLength - Maximum length for desktop view
 */
export function createResponsivePreview(
  text: string,
  mobileLength: number = 100,
  desktopLength: number = 200,
) {
  const cleanText = stripMarkdown(text);

  return {
    mobile:
      cleanText.length > mobileLength
        ? cleanText.substring(0, mobileLength) + "..."
        : cleanText,
    desktop:
      cleanText.length > desktopLength
        ? cleanText.substring(0, desktopLength) + "..."
        : cleanText,
  };
}
