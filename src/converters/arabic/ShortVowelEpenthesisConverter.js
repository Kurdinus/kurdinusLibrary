import { NON_LETTERS, CONSONANTS, VOWELS } from '@/constants'
import RegexConverter from "@/converters/RegexConverter";

export default class ShortVowelEpenthesisConverter extends RegexConverter {
    constructor(){
        super([
            { regex: '(^|' + NON_LETTERS + ')([' + CONSONANTS + ']) ', to: '$1$2i '}, // çi
            { regex: '(^|' + NON_LETTERS + ')([' + CONSONANTS + 'wy])([' + CONSONANTS + '])',  to: '$1$2i$3'}, // çil
            { regex: '([' + VOWELS + '])([wylɫrřmnfhḧjsşṣvxẍzƹcç])([bdgkpqtʔ])([wylɫrřmnfhḧjsşṣvxẍzƹcç])', to: '$1$2$3i$4'}, //girtn > girtin
            { regex: '([' + VOWELS + '])([lɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])([fhḧjsşṣvxẍzƹcçbdgkpqtʔ])([cçbdgkpqtʔ])', to: '$1$2i$3$4'}, //zanst > zanist
            { regex: '([' + VOWELS + '])([wylɫrř])([mnfhḧjsşṣvxẍzƹ])([cçbdgkpqtʔ])([^aeêiîouû]|$)', to: '$1$2i$3$4$5'}, //birnc > birinc
            { regex: '([' + VOWELS + '])([fhḧjsşṣvxẍzƹ])([lɫrřmn])([cçbdgkpqtʔ])([^aeêiîouû]|$)', to: '$1$2$3i$4$5'}, //cejnt > cejnit
            { regex: '([' + VOWELS + '])([jsşṣvxẍzƹcçbdgkpqtʔ])([wylɫrřmnfhḧjsşṣvxẍzƹcç])([^aeêiîouû]|$)', to:'$1$2i$3$4'}, //hatm > hatim
            { regex: '([' + VOWELS + '])([lɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])([lɫrřmn])($|' + NON_LETTERS + ')', to:'$1$2i$3$4'}, //befr > befir //kemn > kemin
            { regex: '(^|' + NON_LETTERS + ')ʔ', to: '$1'},	//Hamza
            { regex: 'ƹ', to: '\u0027'},	//ع
            { regex: 'ʔ', to: '\u0027'}	//Hamza
        ])
    }
}
