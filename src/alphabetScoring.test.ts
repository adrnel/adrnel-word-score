import { scoreString } from '../src/alphabetScoring';

describe('scoreString', () => {
  it('should correctly score a single letter', () => {
    expect(scoreString('a')).toBe(1);
  });

  it('should calculate the correct score for a word', () => {
    expect(scoreString('abc')).toBe(6); // 1 + 2 + 3
  });

  it('should ignore non-alphabet characters', () => {
    expect(scoreString('a123b!@#')).toBe(3); // 1 + 2
  });

  it('should ignore case', () => {
    expect(scoreString('aBc')).toBe(6); // 1 + 2 + 3
  });

  it('should return 0 for an empty string', () => {
    expect(scoreString('')).toBe(0);
  });

  it('should return 0 for a string with no letters', () => {
    expect(scoreString('123!@#')).toBe(0);
  });
});
