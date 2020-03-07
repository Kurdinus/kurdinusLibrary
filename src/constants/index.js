export const SUFFIX_MERGE_DIVIDER = '〿';
export const VOWELS = 'aeêiîouûü';
export const CONSONANTS = 'lɫrřmnfhḧjsşṣvṿxẍzƹcçbdḍgkpqtʔ';
export const NON_LETTERS = '[^wy' + CONSONANTS + VOWELS + ']';
export const LATIN_LETTERS = 'a-zêîûçşéúıŕřĺɫƚḧẍḍṿʔ' + SUFFIX_MERGE_DIVIDER;
export const KURMANCI_SUFFIXES = 'a|ê|yê|êt|yêt|î|yî|' + 'im|e|ye|în|ne|in|'+ 'ên|yên';
export const HARF = '\u0620-\u064A\u066E-\u06D5\u06FA-\u06FF\u0750-\u077F'; //\u08A0-u08FF
export const HARAKA = '\u064B-\u065F'
