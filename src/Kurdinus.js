import * as Constants from './constants';
import { CaseType, FontType, NumerlaType, PhonemeType } from './enums';

import * as Latin from './converters/latin';
import * as Arabic from './converters/arabic';
import { Fonts } from './converters/arabic/fonts'
import * as Common from './converters';


const punctuationNormalizer = new Common.PunctuationNormalizer();

const arabicNormalizer = new Arabic.ArabicNormalizer();
const basicArabicConverter = new Arabic.BasicArabicConverter();
const uncertainVowelsConverter = new Arabic.UncertainVowelsConverter();
const shortVowelEpenthesisConverter = new Arabic.ShortVowelEpenthesisConverter();

const lowercaseConverter = new Latin.CaseConverter(CaseType.LOWER);
const northernSpaceRemover = new Latin.NorthernSpaceRemover();
const yeSpaceRemover = new Latin.YeSpaceRemover();
const diacriticalConverter = new Latin.DiacriticalConverter();

const phonemeConverter = {
	[PhonemeType.DIAGRAPH]: new Arabic.PhonemeConverter(PhonemeType.DIAGRAPH),
	[PhonemeType.REDUCED]: new Arabic.PhonemeConverter(PhonemeType.REDUCED),
}


export function changeCase(text, caseType){
	return new Latin.CaseConverter(caseType).convert(text)
}

export function normalizeArabicLetters(text) {
	return arabicNormalizer.convert(text);
}

export function normalizePunctuations(text) {
	return punctuationNormalizer.convert(text);
}

export function getArabicLayoutUnicode(text, fontType) {
	return Fonts[fontType].convert(text);
}

export function transliterateArabicToLatin(text, phonemeType) {
	text = arabicNormalizer.convert(text)
	text = basicArabicConverter.convert(text);					// we are certain about this conversions:
	text = uncertainVowelsConverter.convert(text); 			// disambiguation of و and ی
	text = shortVowelEpenthesisConverter.convert(text) 	// epenthesis of short vowel /i/
	text = phonemeConverter[phonemeType].convert(text) 	// Central Kurdish Phoneme Type

	return text;
}

export function transliterateLatinToArabic(text, isDigraphType){
	text = lowercaseConverter.convert(text);
	text = northernSpaceRemover.convert(text);
	text = yeSpaceRemover.convert(text);
	if (isDigraphType){
		text = diacriticalConverter.convert(text);
	}
	text = text.replace(new RegExp(Constants.SUFFIX_MERGE_DIVIDER, 'g'), ''); // TODO: it should removed in that scope of code
	return text;
}

export { CaseType, FontType, NumerlaType, PhonemeType };
