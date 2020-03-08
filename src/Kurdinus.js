import * as Constants from './constants';
import { CaseType, FontType, NumerlaType, PhonemeType } from './enums';

import * as Latin from './converters/latin';
import * as Arabic from './converters/arabic';
import { Fonts } from './converters/arabic/fonts'
import * as Common from './converters';

const arabicNormalizer = new Arabic.ArabicNormalizer();
const punctuationNormalizer = new Common.PunctuationNormalizer();

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

export { CaseType, FontType, NumerlaType, PhonemeType };
