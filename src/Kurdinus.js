import * as Constants from './constants';
import { CaseType, FontType, NumerlaType, PhonemeType } from './enums';

import * as Latin from './converters/latin';
import * as Arabic from './converters/arabic';

const arabicNormalizer = new Arabic.ArabicNormalizer()

export function changeCase(text, caseType){
	return new Latin.CaseConverter(caseType).convert(text)
}

export function normalizeArabicLetters(text) {
	return arabicNormalizer.convert(text);
}

export { CaseType, FontType, NumerlaType, PhonemeType };
