import { scrabbleScoring } from './scrabbleScoring';

describe('scrabbleScoring', () => {
  it('should correctly score a single letter', () => {
    expect(scrabbleScoring('a')).toBe(1);
    expect(scrabbleScoring('z')).toBe(10);
  });

  it('should calculate the correct score for a word', () => {
    expect(scrabbleScoring('cab')).toBe(7);
  });

  it('should ignore non-alphabet characters', () => {
    expect(scrabbleScoring('c@b!')).toBe(6);
  });

  it('should ignore case', () => {
    expect(scrabbleScoring('CaB')).toBe(7);
  });

  it('should calculate the correct score for complex words', () => {
    expect(scrabbleScoring('quixotic')).toBe(26);
  });

  it('should return 0 for an empty string', () => {
    expect(scrabbleScoring('')).toBe(0);
  });

  it('should return 0 for a string with no letters', () => {
    expect(scrabbleScoring('123!@#')).toBe(0);
  });
});
