export const temp = '〿'
export const ltr = `a-zêîûçşéúıŕřĺɫƚḧẍʔ${temp}`
export const harf = '\u0620-\u064A\u066E-\u06D5\u06FA-\u06FF\u0750-\u077F'; //\u08A0-u08FF
export const krmSuffix = 'a|ê|yê|êt|yêt|î|yî|' + 'im|e|ye|în|ne|in|' + 'yên';
export const sSuffixes = ' (' + krmSuffix + ')($|[^' + ltr + '])'; // e.g. z
export const sDigraphs1 = new Array(
    'ch', 'ç',
    'gh', 'ẍ',
    'hh', 'ḧ',
    'sh', 'ş',
    'll', 'ɫ',
    'rr', 'ř'
);
export const sConvertLatin2Arabic = new Array(
    '\u201C', '«',
    '\u201D', '»',
    '([0-9])([\'’-])([aeiouêîûéú' + temp + '])', '$1$3',		// (e.g. 1990'an 5'ê)
    'ʔ', '',
    '(^|[^' + ltr + '0-9\'’])([aeiouêîûéú])', '$1ئ$2',	//insert hamza
    '([aeouêîûéú])([aeiouêîûéú])', '$1ئ$2',		//insert hamza between adjacent vowels
    '(ئ)([uû])([^' + ltr + '0-9])', 'و$3',		//omit the inserted hamza for 'u' (=and)
    'a', 'ا',
    'b', 'ب',
    'ç', 'چ',
    'c', 'ج',
    'd', 'د',
    'ê|é', 'ێ',
    'e', 'ە',
    'f', 'ف',
    'g', 'گ',
    'h', 'ه',
    'ḧ', 'ح',
    'i|ı', '',
    'î|y|í', 'ی',
    'j', 'ژ',
    'k', 'ک',
    'l', 'ل',
    'Ɨ|ĺ|ł|ƚ|ɫ', 'ڵ',
    'm', 'م',
    'n', 'ن',
    'o', 'ۆ',
    'ö', 'ۊ',
    'p', 'پ',
    'q', 'ق',
    'r', 'ر',
    'ř|ŕ', 'ڕ',
    's', 'س',
    'ş', 'ش',
    't', 'ت',
    'û|ú', 'وو',
    'u|w', 'و',
    'ü', 'ۊ',
    'v', 'ڤ',
    'x', 'خ',
    'ẍ', 'غ',
    'z', 'ز',
    'ه' + '($|[^ابپتجچحخدرڕزژسشصعغفڤقکگلڵمنوۆهەیێ])', 'هـ' + '$1',
    '\'|’', '<span style="color:red">ع</span>', // need checking
    '\\u003F', '؟', //question mark
    '\,', '،',
    '\;', '؛'
);

export const harf = '\u0620-\u064A\u066E-\u06D5\u06FA-\u06FF\u0750-\u077F'; //\u08A0-u08FF
export const haraka = '\u064B-\u065F';
export const Corrections = new Array(
    'ي|ى|ے', 'ی',
    'ك|ڪ', 'ک',
    '(\u201C|\\(\\()', '«',
    '(\u201D|\\)\\))', '»',
    '([^ ])  ([^ ])', '$1 $2',
    '\u200c{2,}', '\u200c',				//omit multiple ZWNJ
    '\u06BE([^ـ' + harf + haraka + '])', 'هـ$1',
    '\u06BE', 'ه',
    '\u0647\u200C', '\u06D5',			// 0647 + ZWNJ > E
    '\u0647\u200D', 'هـ',				// 0647 + ZWJ > H
    '([ءادرڕزژوۆە])\u200C', '$1',		// unnecessary ZWNJ
    '\u0647([^ـ' + harf + haraka + '])', '\u06D5$1',		// isolated and final Heh > E
    '\u200Cو ', ' و ',
    '([' + harf + '])\u200C([^' + harf + '])', '$1$2',	//remove unnecessary ZWNJ
    'ـ{2,}', 'ـ',			// duplicated Tatweel
    'ـ' + '([ئبپتجچحخسشعغفڤقکگلڵمنهیێءادرڕزژۆە])', '$1',		// delete unnecessary Tatweel
    '([بپتجچحخسشعغفڤقکگلڵمنیێ])' + 'ـ', '$1',		// delete unnecessary Tatweel
    '(^|[^هئ])' + 'ـ', '$1-'		// Tatweel to dash
);

export const V = 'aeêiîouûü';
export const C = 'lɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ';
export const sConvertArabic2Latin = new Array(
    '\u200C' + 'و([^' + harf + '])', ' û$1',
    '([^' + harf + '])و([^' + harf + '])', '$1û$2',
    '\u200C', ' ',
    'ئ|ء', 'ʔ',		// Hamza ʔ
    'آ', 'ʔa',
    '،', ',',
    '؛', ';',
    '«', '\u201C',
    '»', '\u201D',
    '٠|۰', '0',
    '١|۱', '1',
    '٢|۲', '2',
    '٣|۳', '3',
    '٤|۴', '4',
    '٥|۵', '5',
    '٦|۶', '6',
    '٧|۷', '7',
    '٨|۸', '8',
    '٩|۹', '9',
    'ا', 'a',
    'ب', 'b',
    'پ', 'p',
    'ت|ط', 't',
    'ج', 'c',
    'چ', 'ç',
    'ح', 'ḧ',
    'خ', 'x',
    'د', 'd',
    'ر', 'r',
    'ڕ', 'ř',
    'ز|ض|ظ|ذ', 'z',
    'ژ', 'j',
    'س|ث', 's',
    'ش', 'ş',
    'ص', 'ṣ',
    'ع', 'ƹ',
    'غ', 'ẍ',
    'ف', 'f',
    'ڤ', 'v',
    'ق', 'q',
    'ک|ك', 'k',
    'گ', 'g',
    'ل', 'l',
    'ڵ', 'ɫ',
    'م', 'm',
    'ن', 'n',
    'ۆ', 'o',
    'ۊ', 'ü',
    'ھ|ه', 'h',
    'ە', 'e',
    'ێ', 'ê',
    'َ', 'e',	// فتحه
    'ِ', 'i',	// کسره
    'ُ', 'u',	// ضمه

    //// managing و and ی
    'ى|ي', 'ی', // standardise ی

    // adjacent to vowel is consonant
    'و' + '([' + V + '])', 'w$1',
    'ی' + '([' + V + '])', 'y$1',
    '([' + V + '])' + 'ی', '$1y',
    '([' + V + '])' + 'و', '$1w',

    // word starts with consonant
    '(^|[^وی' + C + V + 'wy])و', '$1w',
    '(^|[^وی' + C + V + 'wy])ی', '$1y',

    //triples
    'ییی', 'yîy',
    'یوی', 'îwî',
    '([wy' + C + '])' + 'ووو', '$1ûw',
    '([' + V + '])' + 'ووو', '$1wû',
    'یوو', 'yû',
    'ووی', 'ûy',
    'w' + 'وی', 'wwî',
    'ویو', 'wîw',
    'ûyو', 'ûyو',

    //doubles
    'وی([wy' + C + '])', 'wî$1',
    'وی', 'wî',
    'یو', 'îw',
    '([wy' + C + '])' + 'یی', '$1îy',
    '([' + V + '])' + 'یی', '$1yî',
    '([' + V + '])' + 'وو' + '([wy' + C + V + '])', '$1ww$2',
    '([wy' + C + '])' + 'وو' + '($|[^' + V + '])', '$1û$2',
    '([wy' + C + '])' + 'وو' + '([' + V + '])', '$1uw$2',

    // singles
    'و' + '([' + V + '])', 'w$1',
    'ی' + '([' + V + '])', 'y$1',
    '([' + V + '])' + 'ی', '$1y',
    '([' + V + '])' + 'و', '$1w',
    'و', 'u',
    'ی', 'î',
    'ـ', '',	// تطویل
    '؟', '?'
);


// /i/ epenthesis
export const NL = '[^wy' + C + V + ']'; //Non-Letter
export const iEpenthesis = new Array(
    '(^|' + NL + ')([' + C + ']) ', '$1$2i ', // çi
    '(^|' + NL + ')([' + C + 'wy])([' + C + '])', '$1$2i$3', // çil
    '([' + V + '])([wylɫrřmnfhḧjsşṣvxẍzƹcç])([bdgkpqtʔ])([wylɫrřmnfhḧjsşṣvxẍzƹcç])', '$1$2$3i$4', //girtn > girtin
    '([' + V + '])([lɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])([fhḧjsşṣvxẍzƹcçbdgkpqtʔ])([cçbdgkpqtʔ])', '$1$2i$3$4', //zanst > zanist
    '([' + V + '])([wylɫrř])([mnfhḧjsşṣvxẍzƹ])([cçbdgkpqtʔ])([^aeêiîouû]|$)', '$1$2i$3$4$5', //birnc > birinc
    '([' + V + '])([fhḧjsşṣvxẍzƹ])([lɫrřmn])([cçbdgkpqtʔ])([^aeêiîouû]|$)', '$1$2$3i$4$5', //cejnt > cejnit
    '([' + V + '])([jsşṣvxẍzƹcçbdgkpqtʔ])([wylɫrřmnfhḧjsşṣvxẍzƹcç])([^aeêiîouû]|$)', '$1$2i$3$4', //hatm > hatim
    '([' + V + '])([lɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])([lɫrřmn])($|' + NL + ')', '$1$2i$3$4', //befr > befir //kemn > kemin
    '(^|' + NL + ')ʔ', '$1',	//Hamza
    'ƹ', '\u0027',	//ع
    'ʔ', '\u0027'	//Hamza
);

export const sDigraphs2 = new Array(
    'ḧ', 'hh',
    'ẍ', 'gh',
    'ɫ', 'll',
    '(^|[^aeêiîouûlɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])ř', '$1r',
    'ř', 'rr'
);

export const sNumbers = new Array(
    '0', '۰', '٠',
    '1', '۱', '١',
    '2', '۲', '٢',
    '3', '۳', '٣',
    '4', '۴', '٤',
    '5', '۵', '٥',
    '6', '۶', '٦',
    '7', '۷', '٧',
    '8', '۸', '٨',
    '9', '۹', '٩'
);

export const ARABIC = 'Arabic'
export const LATIN = 'Latin'
export const DIACRITICAL = 'diacritical'
export const REDUCED = 'reduced'
export const DIGRAPH = 'digraph'