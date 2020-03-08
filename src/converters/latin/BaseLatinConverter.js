import { SUFFIX_MERGE_DIVIDER, LATIN_LETTERS } from '../../constants'
import RegexConverter from "../RegexConverter";

export default class BaseLatinConverter extends RegexConverter {
    constructor(){
		super([
			{ regex:  '\u201C', to:'«'},
			{ regex: '\u201D', to:'»'},
			{ regex: '([0-9])([\'’-])([aeiouêîûéú' + SUFFIX_MERGE_DIVIDER +'])', to:'$1$3'}, // (e.g. 1990'an 5'ê)
			{ regex: 'ʔ', to:''}, // glottal stop
			{ regex: '(^|[^' + LATIN_LETTERS + '0-9\'’])([aeiouêîûéú])',	to:'$1ئ$2'}, //insert initial hamza
			{ regex: '([aeouêîûéú])([aeiouêîûéú])',	to: '$1ئ$2'}, //insert hamza between adjacent vowels
			{ regex: '(ئ)([uû])([^' + latinLetters + '0-9])', to: 'و$3'}, //omit the inserted hamza for 'û' (=and)
			{ regex: 'a', to: 'ا'},
			{ regex: 'b', to: 'ب'},
			{ regex: 'ç', to: 'چ'},
			{ regex: 'c', to: 'ج'},
			{ regex: 'd', to: 'د'},
			{ regex: 'ḍ', to: 'ڎ'}, // a Horami consonant
			{ regex: 'ê|é', to: 'ێ'},
			{ regex: 'e', to: 'ە'},
			{ regex: 'f', to: 'ف'},
			{ regex: 'g', to: 'گ'},
			{ regex: 'h', to: 'ه'},
			{ regex: 'ḧ', to: 'ح'},
			{ regex: 'i|ı', to: ''},
			{ regex: 'î|y|í', to: 'ی'},
			{ regex: 'j', to: 'ژ'},
			{ regex: 'k', to: 'ک'},
			{ regex: 'l', to: 'ل'},
			{ regex: 'ɫ|ł|ƚ|Ɨ|ĺ', to: 'ڵ'},
			{ regex: 'm', to: 'م'},
			{ regex: 'n', to: 'ن'},
			{ regex: 'o', to: 'ۆ'},
			{ regex: 'ö', to: 'ۊ'},
			{ regex: 'p', to: 'پ'},
			{ regex: 'q', to: 'ق'},
			{ regex: 'r', to: 'ر'},
			{ regex: 'ř|ŕ', to: 'ڕ'},
			{ regex: 's', to: 'س'},
			{ regex: 'ş|š|ș|s̩', to: 'ش'},
			{ regex: 'ṣ', to: 'ص'},
			{ regex: 't', to: 'ت'},
			{ regex: 'û|ú', to: 'وو' },
			{ regex: 'u|w',	to: 'و' },
			{ regex: 'ü', to: 'ۊ' },
			{ regex: 'v', to: 'ڤ' },
			{ regex: 'ṿ', to: 'ۉ' }, // a Horami consonant
			{ regex: 'x', to: 'خ' },
			{ regex: 'ẍ', to: 'غ' },
			{ regex: 'z', to: 'ز' },
			{ regex: 'ه' + '($|[^ابپتجچحخدرڕزژسشصعغفڤقکگلڵمنوۆهەیێ])', to:	'هـ' + '$1' },	// word-final h
			{ regex: '\'|’', to: '<span style="color:red">ع</span>' }, // TODO: need checking, not sure 'ع' or 'ء'
			{ regex: '\\u003F', to:'؟' }, // question mark
			{ regex: '\,', to: '،' }, // comma
			{ regex: '\;', to: '؛'}	// semicolon
		]);
	}
}
