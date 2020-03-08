import RegexConverter from "@/converters/RegexConverter.js";
import { HARF } from "@/constants";

export default class BasicArabicConverter extends RegexConverter {
    constructor(){
        super([
            { regex: '٠|۰', to: '0'},
            { regex: '١|۱', to: '1'},
            { regex: '٢|۲', to: '2'},
            { regex: '٣|۳', to: '3'},
            { regex: '٤|۴', to: '4'},
            { regex: '٥|۵', to: '5'},
            { regex: '٦|۶', to: '6'},
            { regex: '٧|۷', to: '7'},
            { regex: '٨|۸', to: '8'},
            { regex: '٩|۹', to: '9'},
            { regex: '\u200C' + 'و([^' + HARF + '])', to: ' û$1'}, // e.g. من‌و
            { regex: '(^|[^' + HARF + '])و([^' + HARF + '])', to: '$1û$2'},
            { regex: '\u200C', to: ' '}, // ZWNJ
            { regex: 'ئ|ء', to: 'ʔ'}, // Hamza ʔ
            { regex: 'آ', to: 'ʔa'},
            { regex: '،', to: ','},
            { regex: '؛', to: ';'},
            { regex: '«', to: '\u201C'},
            { regex: '»', to: '\u201D'},
            { regex: 'ا', to: 'a'},
            { regex: 'ب', to: 'b'},
            { regex: 'پ', to: 'p'},
            { regex: 'ت|ط',to:  't'},
            { regex: 'ج', to: 'c'},
            { regex: 'چ', to: 'ç'},
            { regex: 'ح', to: 'ḧ'},
            { regex: 'خ', to: 'x'},
            { regex: 'د', to: 'd'},
            { regex: 'ڎ', to: 'ḍ'}, // a Horami consonant
            { regex: 'ر', to: 'r'},
            { regex: 'ڕ', to: 'ř'},
            { regex: 'ز|ض|ظ|ذ', to: 'z'},
            { regex: 'ژ', to: 'j'},
            { regex: 'س|ث', to: 's'},
            { regex: 'ش', to: 'ş'},
            { regex: 'ص', to: 'ṣ'},
            { regex: 'ع', to: 'ƹ'},
            { regex: 'غ', to: 'ẍ'},
            { regex: 'ف', to: 'f'},
            { regex: 'ڤ', to: 'v'},
            { regex: 'ق', to: 'q'},
            { regex: 'ک|ك', to: 'k'},
            { regex: 'گ', to: 'g'},
            { regex: 'ل', to: 'l'},
            { regex: 'ڵ', to: 'ɫ'},
            { regex: 'م', to: 'm'},
            { regex: 'ن', to: 'n'},
            { regex: 'ۆ', to: 'o'},
            { regex: 'ۊ', to: 'ü'},
            { regex: 'ۉ', to: 'ṿ'}, // a Horami consonant
            { regex: 'ھ|ه', to: 'h'},
            { regex: 'ە', to: 'e'},
            { regex: 'ێ', to: 'ê'},
            { regex: 'َ', to: 'e'}, // fatha
            { regex: 'ِ', to:'i'}, // kasra
            { regex: 'ُ', to:'u'}, // damma
            { regex: 'ـ', to: ''}, // tatweel
            { regex: '؟', to: '?'}
         ]);
    }
}
