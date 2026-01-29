import {
  parseMention,
  parseMentions,
  parseChannelMention,
  parseRoleMention,
  escapeMarkdown,
  truncateText,
  capitalizeFirst,
  cleanWhitespace
} from './textParser';

describe('parseMention', () => {
  it('should parse a user mention', () => {
    expect(parseMention('<@123456789>')).toBe('123456789');
  });

  it('should parse a user mention with exclamation', () => {
    expect(parseMention('<@!123456789>')).toBe('123456789');
  });

  it('should return null for invalid mention', () => {
    expect(parseMention('no mention here')).toBeNull();
  });

  it('should return null for empty string', () => {
    expect(parseMention('')).toBeNull();
  });
});

describe('parseMentions', () => {
  it('should parse multiple user mentions', () => {
    expect(parseMentions('<@123> and <@456>')).toEqual(['123', '456']);
  });

  it('should parse mentions with exclamation marks', () => {
    expect(parseMentions('<@!123> and <@456>')).toEqual(['123', '456']);
  });

  it('should return empty array for no mentions', () => {
    expect(parseMentions('no mentions')).toEqual([]);
  });
});

describe('parseChannelMention', () => {
  it('should parse a channel mention', () => {
    expect(parseChannelMention('<#123456789>')).toBe('123456789');
  });

  it('should return null for invalid channel mention', () => {
    expect(parseChannelMention('no channel here')).toBeNull();
  });
});

describe('parseRoleMention', () => {
  it('should parse a role mention', () => {
    expect(parseRoleMention('<@&123456789>')).toBe('123456789');
  });

  it('should return null for invalid role mention', () => {
    expect(parseRoleMention('no role here')).toBeNull();
  });
});

describe('escapeMarkdown', () => {
  it('should escape markdown characters', () => {
    expect(escapeMarkdown('*bold* _italic_')).toBe('\\*bold\\* \\_italic\\_');
  });

  it('should escape backticks', () => {
    expect(escapeMarkdown('`code`')).toBe('\\`code\\`');
  });

  it('should not affect normal text', () => {
    expect(escapeMarkdown('normal text')).toBe('normal text');
  });
});

describe('truncateText', () => {
  it('should truncate long text', () => {
    expect(truncateText('This is a very long text', 10)).toBe('This is...');
  });

  it('should not truncate short text', () => {
    expect(truncateText('Short', 10)).toBe('Short');
  });

  it('should use custom ellipsis', () => {
    expect(truncateText('This is a very long text', 10, '…')).toBe('This is a…');
  });

  it('should handle exact length', () => {
    expect(truncateText('Exactly10!', 10)).toBe('Exactly10!');
  });
});

describe('capitalizeFirst', () => {
  it('should capitalize first letter', () => {
    expect(capitalizeFirst('hello')).toBe('Hello');
  });

  it('should not affect already capitalized', () => {
    expect(capitalizeFirst('Hello')).toBe('Hello');
  });

  it('should handle empty string', () => {
    expect(capitalizeFirst('')).toBe('');
  });

  it('should handle single character', () => {
    expect(capitalizeFirst('a')).toBe('A');
  });
});

describe('cleanWhitespace', () => {
  it('should remove extra whitespace', () => {
    expect(cleanWhitespace('  hello   world  ')).toBe('hello world');
  });

  it('should handle tabs and newlines', () => {
    expect(cleanWhitespace('hello\t\nworld')).toBe('hello world');
  });

  it('should handle normal text', () => {
    expect(cleanWhitespace('hello world')).toBe('hello world');
  });
});
