import RegexConverter from "@/converters/RegexConverter.js";
import { HARF, HARAKA } from "@/constants";

export default class ArabicNormalizer extends RegexConverter {
    constructor(){
		super();
		this.conversions = [
			{ regex: 'ي|ى|ے', to: 'ی'},
			{ regex: 'ك|ڪ', to: 'ک'},
			{ regex: '(\u201D|\\(\\()', to: '«'},
			{ regex: '(\u201C|\\)\\))', to: '»'},
			{ regex: '([^ ])  ([^ ])', to: '$1 $2'},
			{ regex: '\u200c{2,}', to: '\u200c'}, // omit multiple ZWNJ
			{ regex: '\u06BE([^ـ' + HARF + HARAKA + '])', to: 'هـ$1' },
			{ regex: '\u06BE', to: 'ه' },
			{ regex: '\u0647\u200C', to: '\u06D5' }, // 0647 + ZWNJ > E
			{ regex: '\u0647\u200D', to: 'هـ' }, // 0647 + ZWJ > H
			{ regex: '([ءادرڕزژوۆە])\u200C', to: '$1' }, // unnecessary ZWNJ
			{ regex: '\u0647([^ـ' + HARF + HARAKA + '])', to: '\u06D5$1' }, // isolated and final Heh > E
			{ regex: '\u200Cو ', to: ' و '} ,
			{ regex: '([' + HARF + '])\u200C([^' + HARF + '])', to: '$1$2'}, //remove unnecessary ZWNJ
			{ regex: 'ـ{2,}', to: 'ـ' },  // duplicated Tatweel
			{ regex: 'ـ' + '([ئبپتجچحخسشعغفڤقکگلڵمنهیێءادرڕزژۆە])', to: '$1' },	 // delete unnecessary Tatweel
			{ regex: '([بپتجچحخسشعغفڤقکگلڵمنیێ])' + 'ـ', to: '$1'}, // delete unnecessary Tatweel
			{ regex: '(^|[^هئ])' + 'ـ', to: '$1-' } // Tatweel to dash
		]
	}
}
