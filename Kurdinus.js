// 
function convertByArray(text, array) {
	for (var i = 0; i < array.length; i += 2)
		text = text.replace(new RegExp(array[i], 'gim'), array[i + 1]);
	return text;
}

function TransliterateLa2Ar(text, DigraphType){
	text = text.toLowerCase();
	const suffixMergeTemp = '〿';
	const latinLetters = 'a-zêîûçşéúıŕřĺɫƚḧẍḍṿʔ' + suffixMergeTemp;
	
	// merging seperated suffixes of Northern Kurdish (Kurmanci). e.g. "bargiran im" => "bargiranim"
	const kurmanciSuffixes = 'a|ê|yê|êt|yêt|î|yî|' + 'im|e|ye|în|ne|in|'+ 'ên|yên';
	// zana ye => zanaye 
	text = text.replace(
		new RegExp(' ' + '(' + kurmanciSuffixes + ')($|[^' + latinLetters + '])', 'gim'),
		'$1$2');
	// (nav)ê or "nav"ê =>
	text = text.replace(
		new RegExp('([^' + latinLetters + '])(' + kurmanciSuffixes + ')($|[^' + latinLetters + '])', 'gim'),
		'$1' + suffixMergeTemp + '$2$3');
	//
	if (DigraphType == 'diacritical'){
		text = convertByArray(text, new Array(
			'ch', 'ç',
			'gh', 'ẍ',
			'hh', 'ḧ',
			'sh', 'ş',
			'll', 'ɫ',
			'rr', 'ř'
			)
		);
	}
	//main conversion
	text = convertByArray(text, new Array(
		'\u201C',	'«',
		'\u201D',	'»',
		'([0-9])([\'’-])([aeiouêîûéú' + suffixMergeTemp +'])', '$1$3',		// (e.g. 1990'an 5'ê)
		'ʔ', '',	// glottal stop
		'(^|[^' + latinLetters + '0-9\'’])([aeiouêîûéú])',	'$1ئ$2',	//insert initial hamza
		'([aeouêîûéú])([aeiouêîûéú])',	'$1ئ$2',		//insert hamza between adjacent vowels
		'(ئ)([uû])([^' + latinLetters + '0-9])',	'و$3',		//omit the inserted hamza for 'û' (=and)
		'a',	'ا',
		'b',	'ب',
		'ç',	'چ',
		'c',	'ج',
		'd',	'د',
		'ḍ',	'ڎ', // a Horami consonant
		'ê|é',	'ێ',
		'e',	'ە',
		'f',	'ف',
		'g',	'گ',
		'h',	'ه',
		'ḧ',	'ح',
		'i|ı',	'',
		'î|y|í',	'ی',
		'j',	'ژ',
		'k',	'ک',
		'l',	'ل',
		'ɫ|ł|ƚ|Ɨ|ĺ',	'ڵ',
		'm',	'م',
		'n',	'ن',
		'o',	'ۆ',
		'ö',	'ۊ',
		'p',	'پ',
		'q',	'ق',
		'r',	'ر',
		'ř|ŕ',	'ڕ',
		's',	'س',
		'ş|š|ș|s̩',	'ش',
		'ṣ',	'ص',
		't',	'ت',
		'û|ú',	'وو',
		'u|w',	'و',
		'ü',	'ۊ',
		'v',	'ڤ',
		'ṿ',	'ۉ', // a Horami consonant
		'x',	'خ',
		'ẍ',	'غ',
		'z',	'ز',
		'ه' + '($|[^ابپتجچحخدرڕزژسشصعغفڤقکگلڵمنوۆهەیێ])',	'هـ' + '$1',	// word-final h
		'\'|’',	'<span style="color:red">ع</span>',	// need checking, not sure 'ع' or 'ء'
		'\\u003F',	'؟', //question mark
		'\,',	'،',	//comma
		'\;',	'؛'	//semicolon
		)
	);

	//remove suffixMergeTemp character
	text = text.replace(new RegExp(suffixMergeTemp, 'g'), '');

	return text;
}

function TransliterateAr2La(text, CentralKurdishPhonemeType) {
	text = NormalizeKurdish(text);
	const harf = '\u0620-\u064A\u066E-\u06D5\u06FA-\u06FF\u0750-\u077F'; //\u08A0-u08FF
	const V = 'aeêiîouûü';
	const C = 'lɫrřmnfhḧjsşṣvṿxẍzƹcçbdḍgkpqtʔ';
	// ===== we are certain about this conversions:
	text = convertByArray(text, new Array(
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
		'\u200C' + 'و([^' + harf + '])', ' û$1', // e.g. من‌و
		'(^|[^' + harf + '])و([^' + harf + '])', '$1û$2',
		'\u200C', ' ', // ZWNJ
		'ئ|ء', 'ʔ',		// Hamza ʔ
		'آ', 'ʔa',
		'،', ',',
		'؛', ';',
		'«', '\u201C',
		'»', '\u201D',
		'ا', 'a',
		'ب', 'b',
		'پ', 'p',
		'ت|ط', 't',
		'ج', 'c',
		'چ', 'ç',
		'ح', 'ḧ',
		'خ', 'x',
		'د', 'd',
		'ڎ', 'ḍ', // a Horami consonant
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
		'ۉ', 'ṿ', // a Horami consonant
		'ھ|ه', 'h',
		'ە', 'e',
		'ێ', 'ê',
		'َ', 'e',	// fatha
		'ِ', 'i',	// kasra
		'ُ', 'u',	// damma
		'ـ', '',	// tatweel
		'؟', '?'
		)
	);

		
	// three cases of uncertainty are:
	// 	1) ی => y/î
	// 	2) و => w/u/û
	// 	3) short vowel 'i' that is not written in Arabic script
	
	// ===== disambiguation of و and ی
	text = convertByArray(text, new Array(
			// standardise ی
			'ى|ي',	'ی', 
	
			// when adjacent to vowels, letter و and ی are consonant
			'و' + '([' + V + '])',	'w$1',
			'ی' + '([' + V + '])',	'y$1',
			'([' + V + '])' + 'ی',	'$1y',
			'([' + V + '])' + 'و',	'$1w',
	
			// word starts with consonant
			'(^|[^وی' + C + V + 'wy])و',	'$1w', // e.g. وتن
			'(^|[^وی' + C + V + 'wy])ی',	'$1y', // e.g. یوو
	
			//triples
			'[^و]' + 'ییی',	'îyî', // e.g. تاریکییی (in classic poems)
			'ییی',	'yîy', // e.g. ماندووییی
			'یوی',	'îwî', // e.g. بژیوی
			'([wy' + C + '])' + 'ووو',	'$1ûw', // e.g. گرتووون
			'یوو',	'yû', // e.g. عویوون
			'ووی',	'ûy', // e.g. هاتووی or ماندوویی
			'ویو',	'wîw', // e.g. سویو
			'([uûî])' + 'ووو',	'$1wû', 
	
			//doubles
			'وی',	'wî', // e.g. بویستایە or جەووی
			'یو',	'îw', // e.g. تەنیو
			'([wy' + C + '])' + 'یی',	'$1îy', // e.g. خۆشیی
			'([wy' + C + '])' + 'وو' + '($|[^uûî])',	'$1û$2', // e.g. ماندوو
	
			// singles
			'و' + '([uûî])',	'w$1',
			'ی' + '([uûî])',	'y$1',
			'([uûî])' + 'ی',	'$1y',
			'([uûî])' + 'و',	'$1w',
			
			//all remaining
			'و',	'u',
			'ی',	'î'
			)
		);
	//  epenthesis of short vowel /i/
	const NonLetter = '[^wy' + C + V + ']';
	text = convertByArray(text, new Array(
			'(^|' + NonLetter + ')([' + C + ']) ', '$1$2i ', // çi
			'(^|' + NonLetter + ')([' + C + 'wy])([' + C + '])', '$1$2i$3', // çil
			'([' + V + '])([wylɫrřmnfhḧjsşṣvxẍzƹcç])([bdgkpqtʔ])([wylɫrřmnfhḧjsşṣvxẍzƹcç])', '$1$2$3i$4', //girtn > girtin
			'([' + V + '])([lɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])([fhḧjsşṣvxẍzƹcçbdgkpqtʔ])([cçbdgkpqtʔ])', '$1$2i$3$4', //zanst > zanist
			'([' + V + '])([wylɫrř])([mnfhḧjsşṣvxẍzƹ])([cçbdgkpqtʔ])([^aeêiîouû]|$)', '$1$2i$3$4$5', //birnc > birinc
			'([' + V + '])([fhḧjsşṣvxẍzƹ])([lɫrřmn])([cçbdgkpqtʔ])([^aeêiîouû]|$)', '$1$2$3i$4$5', //cejnt > cejnit
			'([' + V + '])([jsşṣvxẍzƹcçbdgkpqtʔ])([wylɫrřmnfhḧjsşṣvxẍzƹcç])([^aeêiîouû]|$)', '$1$2i$3$4', //hatm > hatim
			'([' + V + '])([lɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])([lɫrřmn])($|' + NonLetter + ')', '$1$2i$3$4', //befr > befir //kemn > kemin
			'(^|' + NonLetter + ')ʔ', '$1',	//Hamza
			'ƹ', '\u0027',	//ع
			'ʔ', '\u0027'	//Hamza
			)
		);
	
	// Central Kurdish Phoneme Type 
	if (CentralKurdishPhonemeType == 'digraph'){
		text = convertByArray(text, new Array(
				'ḧ', 'hh',
				'ẍ', 'gh',
				'ɫ', 'll',
				'(^|[^aeêiîouûlɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])ř', '$1r',
				'ř', 'rr'
				)
			);
	}
	else if (CentralKurdishPhonemeType == 'reduced'){
		text = convertByArray(text, new Array(
				'ḧ', 'h',
				'ẍ', 'x',
				'ɫ', 'l',
				'ř', 'r'
				)
			);
	}
	return text;
}

function ConvertFont2Unicode(text, fontType) {
	switch (fontType) {
		case 'AliK':
			text = convertByArray(text, new Array(
				'لاَ|لآ|لاً', 'ڵا',
				'لً|لَ|لأ', 'ڵ',
				'ة', 'ە',
				"ه" + "([^ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆەهیێأإآثذصضطظكيىةڎۊؤ]|$)", "هـ$1",
				'للهـ', 'لله',
				'ض', 'چ',
				'ث', 'پ',
				'ظ', 'ڤ',
				'ط', 'گ',
				'ىَ|يَ|یَ|آ', 'ێ',
				'رِ', 'ڕ',
				'ؤ|وَ', 'ۆ',
				'ي|ى', 'ی',
				'ء', '\u200Cو',
				'ِ', '',
				'ك', 'ک',
				'ذ', 'ژ'
				)	
			);
			break;
		case 'AliWeb':
			text = convertByArray(text, new Array(
				'لاَ|لآ|لاً', 'ڵا',
				'لَ|پ', 'ڵ',
				'ة', 'ە',
				"ه" + "([^ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆەهیێأإآثذصضطظكيىةڎۊؤ]|$)", "هـ$1",
				'رِ|أ', 'ڕ',
				'ؤ|وَ', 'ۆ',
				'يَ|یَ', 'ێ',
				'ص', 'ێ',
				'ي', 'ی',
				'ط', 'ڭ', //swap ط and گ
				'گ', 'ط', //
				'ڭ', 'گ', //
				'ض', 'چ',
				'ث', 'پ',
				'ظ', 'ڤ',
				'ْ|ُ', '',
				'ى', '*',
				'ك', 'ک',
				'ذ', 'ژ'
				)	
			);
			break;
		case 'Dylan':
			text = convertByArray(text, new Array(
				'لإ|لأ|لآ', 'ڵا',
				'ؤ|وَ', 'ۆ',
				'ة', 'ە',
				'ض', 'ڤ',
				'ص', 'ڵ',
				'ث', 'ێ',
				'ؤ', 'ۆ',
				'ي|ى', 'ی',
				'ك', 'ک',
				'ذ', 'ڕ'
				)	
			);
			break;
		default:
			break;
		}
	return text;
}

function NormalizePunctuations(s){
	const harf = '\u0620-\u064A\u066E-\u06D5\u06FA-\u06FF\u0750-\u077F'; //\u08A0-u08FF
	var corrections = new Array(
		'([،:؛؟!»)}\\]\\)])([' + harf + '])', '$1 $2',	// add space after ending punc
		'([' + harf + ']) ([\\.،:؛؟!»)}\\]\\)])', '$1$2',	// remove space before ending punc
		'\\.([' + harf + ']{2,})', '. $1',	// space after full stop
		'([' + harf + '])([(«{\\[])', '$1 $2',	// add space before ending punc
		'([(«{\\[]) ([' + harf + '])', '$1$2',	// remove space after ending punc
		'(^|\\n)(\\d+)-([' + harf + '])', '$1$2- $3'	// add space between number and letter 
	);
	return convertByArray(text, corrections);
}

function NormalizeKurdish(text){
	const harf = '\u0620-\u064A\u066E-\u06D5\u06FA-\u06FF\u0750-\u077F'; //\u08A0-u08FF
	const haraka = '\u064B-\u065F';
	const corrections = new Array(
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
	return convertByArray(text, corrections);
}

function UnifyNumbers(text, numerlaType) {
	const numeralConvList = new Array(
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
	if (numerlaType == 'Arabic') {
		for (var i = 0; i < numeralConvList.length; i += 3)
			text = text.replace(new RegExp(numeralConvList[i] + '|' + numeralConvList[i + 1], 'g'), numeralConvList[i + 2]);
	}
	else if (numerlaType == 'Latin') {
		for (var i = 0; i < numeralConvList.length; i += 3)
			text = text.replace(new RegExp(numeralConvList[i + 2] + '|' + numeralConvList[i + 1], 'g'), numeralConvList[i]);
	}
	else if (numerlaType == 'Persian') {
		for (var i = 0; i < numeralConvList.length; i += 3)
			text = text.replace(new RegExp(numeralConvList[i] + '|' + numeralConvList[i + 2], 'g'), numeralConvList[i + 1]);
	}
	return text;
}

function ChangeCase(text, caseType){
	switch (caseType) {
		case 'upper':
			return text.toUpperCase();
			break;
		case 'word':
			return text.replace(/([a-zêîûçşéúıŕřĺɫƚḧẍḍṿ]+)/g, function(t){
				return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();})
			break;
		case 'sentence':
			return  text.replace(/[a-zêîûçşéúıŕřĺɫƚḧẍḍṿ].+?[\.?!:\n]/gm, function (t) {
				return t.charAt(0).toUpperCase() + t.substr(1);});
			break;
		default:
			return text.toLowerCase();
			break;
	}
}