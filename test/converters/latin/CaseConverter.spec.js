import { CaseType } from '@/enums';
import { CaseConverter } from '@/converters/latin';

const mixedSentense = 'The quick brown Fox jumps over the lazy dog.but we are happy.'
const lowerSentense = 'the quick brown fox jumps over the lazy dog.but we are happy.'
const upperSentense = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.BUT WE ARE HAPPY.'
const firstLetterSentense = 'The quick brown fox jumps over the lazy dog.But we are happy.'
const wordUpperSentense = 'The Quick Brown Fox Jumps Over The Lazy Dog.But We Are Happy.'

describe('CaseConverter', () => {
  describe('convert', () => {
    it('should change to lowercase when CaseType.LOWER has provided', () => {
      expect(new CaseConverter(CaseType.LOWER).convert(mixedSentense))
        .toBe(lowerSentense)
    })
    it('should change to upercase when CaseType.UPPER has provided', () => {
      expect(new CaseConverter(CaseType.UPPER).convert(mixedSentense))
        .toBe(upperSentense)
    })
    it('should change fist letter to uppercase when CaseType.SENTENCE has provided', () => {
      expect(new CaseConverter(CaseType.SENTENCE).convert(mixedSentense))
        .toBe(firstLetterSentense)
    })
    it('should change fist letter of every word to uppercase when CaseType.WORD has provided', () => {
      expect(new CaseConverter(CaseType.WORD).convert(mixedSentense))
        .toBe(wordUpperSentense)
    })
  })
})
