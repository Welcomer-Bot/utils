/**
 * Parses a mention from text
 * @param text - The text containing a mention
 * @returns The user ID from the mention, or null if not found
 */
export function parseMention(text: string): string | null {
  const mentionRegex = /<@!?(\d+)>/;
  const match = text.match(mentionRegex);
  return match ? match[1] : null;
}

/**
 * Parses multiple mentions from text
 * @param text - The text containing mentions
 * @returns Array of user IDs from the mentions
 */
export function parseMentions(text: string): string[] {
  const mentionRegex = /<@!?(\d+)>/g;
  const matches = text.matchAll(mentionRegex);
  return Array.from(matches, match => match[1]);
}

/**
 * Parses a channel mention from text
 * @param text - The text containing a channel mention
 * @returns The channel ID from the mention, or null if not found
 */
export function parseChannelMention(text: string): string | null {
  const channelRegex = /<#(\d+)>/;
  const match = text.match(channelRegex);
  return match ? match[1] : null;
}

/**
 * Parses a role mention from text
 * @param text - The text containing a role mention
 * @returns The role ID from the mention, or null if not found
 */
export function parseRoleMention(text: string): string | null {
  const roleRegex = /<@&(\d+)>/;
  const match = text.match(roleRegex);
  return match ? match[1] : null;
}

/**
 * Escapes markdown characters in text
 * @param text - The text to escape
 * @returns The escaped text
 */
export function escapeMarkdown(text: string): string {
  return text.replace(/([*_`~\\|])/g, '\\$1');
}

/**
 * Truncates text to a specified length
 * @param text - The text to truncate
 * @param maxLength - The maximum length
 * @param ellipsis - The ellipsis string to append (default: '...')
 * @returns The truncated text
 */
export function truncateText(text: string, maxLength: number, ellipsis = '...'): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength - ellipsis.length) + ellipsis;
}

/**
 * Capitalizes the first letter of a string
 * @param text - The text to capitalize
 * @returns The capitalized text
 */
export function capitalizeFirst(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Removes extra whitespace from text
 * @param text - The text to clean
 * @returns The cleaned text
 */
export function cleanWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}
