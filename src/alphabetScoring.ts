export const scoreString = (str: string): number => {
  let score = 0;
  for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (char >= 'a' && char <= 'z') {
          let charScore = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
          score += charScore;
      }
  }
  return score;
}