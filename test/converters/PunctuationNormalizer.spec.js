import { PunctuationNormalizer } from '@/converters';

let normalizer = new PunctuationNormalizer()

describe('PunctuationNormalizer', () => {

   it('should add a space after ending of a punctuation.',()=> {
      // expect(normalizer.convert('guess what?here we go,agian on the mountains!'))
      //   .toBe('guess what? here we go, agian on the mountains!')
   })
})
