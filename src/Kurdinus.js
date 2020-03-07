import * as Constants from './constants';
import { CaseType, FontType, NumerlaType, PhonemeType } from './enums';

import * as Latin from './converters/latin';

export function changeCase(text, caseType){
	return new Latin.CaseConverter(caseType).convert(text)
}

export { CaseType, FontType, NumerlaType, PhonemeType };
