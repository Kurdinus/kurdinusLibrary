import RegexConverter from "@/converters/RegexConverter.js";
import {
  KURMANCI_SUFFIXES,
  LATIN_LETTERS
} from "@/constants";

export default class NorthernSpaceRemover extends RegexConverter {
    constructor(){
        super([
            {
                regex: ' ' + '(' + KURMANCI_SUFFIXES + ')($|[^' + LATIN_LETTERS + '])',
                to: '$1$2'
            }
        ]);
    }
}
