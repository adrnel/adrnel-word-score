import { alphabetOrderScoring } from './alphabetOrderScoring';

describe('alphabetOrderScoring', () => {
  it('should correctly score a single letter', () => {
    expect(alphabetOrderScoring('a')).toBe(1);
  });

  it('should calculate the correct score for a word', () => {
    expect(alphabetOrderScoring('abc')).toBe(6); // 1 + 2 + 3
  });

  it('should ignore non-alphabet characters', () => {
    expect(alphabetOrderScoring('a123b!@#')).toBe(3); // 1 + 2
  });

  it('should ignore case', () => {
    expect(alphabetOrderScoring('aBc')).toBe(6); // 1 + 2 + 3
  });

  it('should return 0 for an empty string', () => {
    expect(alphabetOrderScoring('')).toBe(0);
  });

  it('should return 0 for a string with no letters', () => {
    expect(alphabetOrderScoring('123!@#')).toBe(0);
  });
});
