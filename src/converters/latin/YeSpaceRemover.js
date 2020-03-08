import RegexConverter from '@/converters/RegexConverter.js'
import {
  KURMANCI_SUFFIXES,
  LATIN_LETTERS,
  SUFFIX_MERGE_DIVIDER
} from '@/constants'

export default class YeSpaceRemover extends RegexConverter {
    constructor(){
        super([
            {
                regex : '([^' + LATIN_LETTERS + '])(' + KURMANCI_SUFFIXES + ')($|[^' + LATIN_LETTERS + '])',
                to: '$1' + SUFFIX_MERGE_DIVIDER + '$2$3'
            }
        ]);
    }
}
