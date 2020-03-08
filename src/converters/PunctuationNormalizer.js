import { HARF } from "@/constants"
import RegexConverter from "./RegexConverter";

export default class PunctuationNormalizer extends RegexConverter {
    constructor(){
        super([
            { regex: '([،:؛؟!»)}\\]\\)])([' + HARF + '])', to: '$1 $2'},    // add space after ending punctuation
            { regex: '([' + HARF + ']) ([\\.،:؛؟!»)}\\]\\)])', to: '$1$2'}, // remove space before ending punctuation
            { regex: '\\.([' + HARF + ']{2,})', to: '. $1'},                // space after full stop
            { regex: '([' + HARF + '])([(«{\\[])', to: '$1 $2'},            // add space before ending punctuation
            { regex: '([(«{\\[]) ([' + HARF + '])', to: '$1$2'},            // remove space after ending punctuation
            { regex: '(^|\\n)(\\d+)-([' + HARF + '])', to: '$1$2- $3'}      // add space between number and letter
        ]);
    }
}
