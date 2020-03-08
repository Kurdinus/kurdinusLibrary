import RegexConverter from "@/converters/RegexConverter.js";
import {
  KURMANCI_SUFFIXES,
  LATIN_LETTERS
} from "@/constants";

export default class NorthernSpaceRemover extends RegexConverter {
    constructor(){
        super();
        this.conversions= [
            {
                regex: ' ' + '(' + KURMANCI_SUFFIXES + ')($|[^' + LATIN_LETTERS + '])',
                to: '$1$2'
            }
        ]
    }
}
