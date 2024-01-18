# adrnel-word-score

A simple and efficient TypeScript library for calculating word scores, ideal for word-based games like Scrabble. `adrnel-word-score` only has one function currently which takes any string input and calculates a score based on each character's position in the alphabet. There are plans to add more functions

## Installation

To install the library, use the following npm command:

```bash
npm install adrnel-word-score
```

## Usage
Import adrnel-word-score into your TypeScript or JavaScript project and use it to calculate word scores:

```bash
import { scoreString } from 'adrnel-word-score';

const score = scoreString('example');
console.log(score); // Output will be the score of the word 'example'
```

## Features
- Simple Scoring Algorithm: Calculates scores based on alphabetic position.
- Easy Integration: Can be integrated into any TypeScript or JavaScript project.
- Lightweight: Has minimal dependencies and a small footprint.

## API Reference

The `user-word-score` library currently includes the following function:

### `scoreString(str: string): number`

This function calculates the score of a given string based on each character's position in the alphabet. It's useful for word-based games where each letter has a point value.

#### Parameters:
- `str` (string): The string for which the score will be calculated.

#### Returns:
- `number`: The calculated score of the string. Each alphabetic character adds a value to the score equal to its position in the alphabet (e.g., 'a' = 1, 'b' = 2, etc.). Non-alphabetic characters are ignored.

## Contributing
Contributions are welcome!

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments
Thanks to all contributors who have helped to improve this library.
For more information, please visit [adrnel's GitHub](https://github.com/adrnel).