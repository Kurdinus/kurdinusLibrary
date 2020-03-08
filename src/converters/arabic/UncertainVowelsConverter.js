import { VOWELS, CONSONANTS } from '@/constants'
import RegexConverter from "@/converters/RegexConverter";


// three cases of uncertainty are:
// 	1) ی => y/î
// 	2) و => w/u/û
// 	3) short vowel 'i' that is not written in Arabic script


export default class UncertainVowelsConverter extends RegexConverter {
    constructor(){
        super([
            // standardise ی
      			{regex:'ى|ي', to: 'ی'},

      			// when adjacent to vowels, letter و and ی are consonant
      			{ regex: 'و' + '([' + VOWELS + '])',	to: 'w$1'},
      			{ regex: 'ی' + '([' + VOWELS + '])',	to: 'y$1'},
      			{ regex: '([' + VOWELS + '])' + 'ی',	to: '$1y'},
      			{ regex: '([' + VOWELS + '])' + 'و',	to: '$1w'},

      			// word starts with consonant
      			{ regex: '(^|[^وی' + CONSONANTS + VOWELS + 'wy])و', to: '$1w'}, // e.g. وتن
      			{ regex: '(^|[^وی' + CONSONANTS + VOWELS + 'wy])ی', to: '$1y'}, // e.g. یوو

      			//triples
      			{ regex: '[^و]' + 'ییی', to:'îyî'}, // e.g. تاریکییی (in classic poems)
      			{ regex: 'ییی', to:'yîy'}, // e.g. ماندووییی
      			{ regex: 'یوی', to:'îwî'}, // e.g. بژیوی
      			{ regex: '([wy' + CONSONANTS + '])' + 'ووو', to:'$1ûw'}, // e.g. گرتووون
      			{ regex: 'یوو', to: 'yû'}, // e.g. عویوون
      			{ regex: 'ووی', to: 'ûy'}, // e.g. هاتووی or ماندوویی
      			{ regex: 'ویو', to: 'wîw'}, // e.g. سویو
      			{ regex: '([uûî])' + 'ووو', to: '$1wû'},

      			//doubles
      			{ regex: 'وی', to: 'wî'}, // e.g. بویستایە or جەووی
      			{ regex: 'یو', to: 'îw'}, // e.g. تەنیو
      			{ regex: '([wy' + CONSONANTS + '])' + 'یی', to: '$1îy'}, // e.g. خۆشیی
      			{ regex: '([wy' + CONSONANTS + '])' + 'وو' + '($|[^uûî])', to: '$1û$2'}, // e.g. ماندوو

      			// singles
      			{ regex: 'و' + '([uûî])', to: 'w$1'},
      			{ regex: 'ی' + '([uûî])', to: 'y$1'},
      			{ regex: '([uûî])' + 'ی', to: '$1y'},
      			{ regex: '([uûî])' + 'و', to: '$1w'},

      			//all remaining
      			{ regex: 'و', to: 'u'},
      			{ regex: 'ی', to: 'î'}
          ])
    }
}
