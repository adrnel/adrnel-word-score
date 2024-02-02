# adrnel-word-score

A simple and efficient TypeScript library for calculating word scores, ideal for word-based games like Scrabble.
`adrnel-word-score` only has two functions currently. The first function is `alphabetOrderScoring` which takes any string input and calculates a score based on each character's position in the alphabet. The second function is `scrabbleScoring` which takes any string input and calculates a score based on the scores for each letter in Scrabble. There are plans to add more functions.

## Installation

To install the library, use the following npm command:

```bash
npm install adrnel-word-score
```

## Usage
Import adrnel-word-score into your TypeScript or JavaScript project and use it to calculate word scores:

```bash
import { alphabetOrderScoring, scrabbleScoring } from 'adrnel-word-score';

const alphabetScore = alphabetOrderScoring('example');
console.log(alphabetScore); // Output will be 76

const scrabbleScore = scrabbleScoring('example');
console.log(scrabbleScore); // Output will be 18
```

## Features
- Simple Scoring Algorithms.
- Easy Integration: Can be integrated into any TypeScript or JavaScript project.
- Lightweight: Has minimal dependencies and a small footprint.

## API Reference

The `adrnel-word-score` library currently includes the following functions:

### `alphabetOrderScoring(str: string): number`

This function calculates the score of a given string based on each character's position in the alphabet.

#### Parameters:
- `str` (string): The string for which the score will be calculated.

#### Returns:
- `number`: The calculated score of the string. Each alphabetic character adds a value to the score equal to its position in the alphabet (e.g., 'a' = 1, 'b' = 2, etc.). Non-alphabetic characters are ignored.

### `scrabbleScoring(str: string): number`

This function calculates the score of a given string based on each letters value in Scrabble. 

#### Parameters:
- `str` (string): The string for which the score will be calculated.

#### Returns:
- `number`: The calculated score of the string based on each letters value in Scrabble. Non-alphabetic characters are ignored.

## Development
### For the package maintainer:
Install dependencies with:
```bash
npm install
```

Make changes within the `src` folder.

Build the project to verify your changes:
```bash
npm run build
```

Run tests to ensure everything passes:
```bash
npm test
```

Increment the version in `package.json`

Commit and tag the changes
```bash
git add .
git commit -m "Add feature or fix bug description"
git push
git tag vx.x.x
git push origin vx.x.x
```

Log in to NPM using
```bash
npm login
```

Publish your package using
```bash
npm publish
```

### For contributers:
Fork or clone the repository.
Install dependencies with:
```bash
npm install
```

Make changes within the `src` folder.

Build the project to verify your changes:
```bash
npm run build
```

Run tests to ensure everything passes:
```bash
npm test
```

Submit a pull request with your changes.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments
Thanks to all contributors who have helped to improve this library.
For more information, please visit [adrnel's GitHub](https://github.com/adrnel).