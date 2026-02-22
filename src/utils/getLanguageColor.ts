export function getRepoLanguages(yamlText: string): Record<string, string> {
  const lines = yamlText.split("\n");
  const languageColors: Record<string, string> = {};
  let currentLanguage: string | null = null;

  const filteredLines = lines.filter((line) => !line.startsWith("#"));

  for (const line of filteredLines) {
    // Match the language name (e.g., "ABAP:")
    const languageMatch = line.match(/^([A-Za-z0-9\-\s]+):$/);
    if (languageMatch) {
      currentLanguage = languageMatch[1].trim();
      continue;
    }

    // Match the color (e.g., "color: "#814CCC"")
    const colorMatch = line.match(/^\s+color:\s*"(#[0-9A-Fa-f]{6})"/);
    if (colorMatch && currentLanguage) {
      languageColors[currentLanguage] = colorMatch[1];
    }
  }

  return languageColors;
}

export function getSpecificRepoLanguage(
  yamlText: string,
  langName: string,
): string | undefined {
  // Escape any special regex characters in langName to prevent regex injection
  const escapedLangName = langName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Construct a regex pattern to match the language and capture its color
  const regex = new RegExp(
    `^${escapedLangName}:\\s*\\n(?:\\s+[^:\\n]+:\\s*[^\\n]*\\n)*?\\s+color:\\s*"(#(?:[0-9A-Fa-f]{6}))"`,
    "m",
  );

  const match = yamlText.match(regex);
  return match ? match[1] : undefined;
}
