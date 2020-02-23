import {
    LATIN,
    ARABIC,
    DIACRITICAL,
    sSuffixes,
    sNumbers,
    ltr,
    temp,
    krmSuffix,
    sDigraphs1,
    sConvertLatin2Arabic
} from './kurdi.constants';

export default class Kurdi {

    static convertLatinToArabic(text, digraphType = DIACRITICAL) {
        let sourceText = text.toLowerCase();
        sourceText = sourceText.replace(new RegExp(sSuffixes, 'gim'), '$1$2');
        let sSuffixesNew = '([^' + ltr + '])(' + krmSuffix + ')($|[^' + ltr + '])' //e.g. (nav)ê "nav"ê
        sourceText = sourceText.replace(new RegExp(sSuffixesNew, 'gim'), '$1' + temp + '$2$3');

        if (digraphType == DIACRITICAL) {
            for (var i = 0; i < sDigraphs1.length; i += 2) {
                sourceText = sourceText.replace(new RegExp(sDigraphs1[i], 'gim'), sDigraphs1[i + 1]);
            }
        };

        for (let i = 0; i < sConvertLatin2Arabic.length; i += 2) {
            sourceText = sourceText.replace(new RegExp(sConvertLatin2Arabic[i], 'gim'), sConvertLatin2Arabic[i + 1]);
        }

        sourceText = sourceText.replace(new RegExp(temp, 'g'), '');
        sourceText = this.unifyNumbers(sourceText);

        return sourceText;
    }

    static convertToLatin(text, centralPhonemeType = REDUCED) {
        let sourceText = this.normalizeKurdish(text);

        for (var i = 0; i < sConvertArabic2Latin.length; i += 2) {
            sourceText = sourceText.replace(new RegExp(sConvertArabic2Latin[i], 'gim'), sConvertArabic2Latin[i + 1]);
        }

        for (var i = 0; i < iEpenthesis.length; i += 2) {
            sourceText = sourceText.replace(new RegExp(iEpenthesis[i], 'gim'), iEpenthesis[i + 1]);
        }
        // Central Kurdish Phoneme Type 
        if (centralPhonemeType == DIGRAPH) {
            for (let i = 0; i < sDigraphs2.length; i += 2) {
                sourceText = sourceText.replace(new RegExp(sDigraphs2[i], 'gim'), sDigraphs2[i + 1]);
            }
        } else if (centralPhonemeType == REDUCED) {
            sourceText = sourceText.replace('ḧ', 'h');
            sourceText = sourceText.replace('ẍ', 'x');
            sourceText = sourceText.replace('ɫ', 'l');
            sourceText = sourceText.replace('ř', 'r');
        }
    };

    static normalizeKurdish(text) {
        for (let i = 0; i < Corrections.length; i += 2) {
            text = text.replace(new RegExp(Corrections[i], 'g'), Corrections[i + 1]);
        }

        return text;
    }

    static unifyNumbers(text, numTypeTransliteration = LATIN) {
        if (numTypeTransliteration == ARABIC) {
            for (let i = 0; i < sNumbers.length; i += 3) {
                text = text.replace(new RegExp(sNumbers[i] + '|' + sNumbers[i + 1], 'g'), sNumbers[i + 2]);
            }
        }

        if (numTypeTransliteration == LATIN) {
            for (let i = 0; i < sNumbers.length; i += 3)
                text = text.replace(new RegExp(sNumbers[i + 2] + '|' + sNumbers[i + 1], 'g'), sNumbers[i]);
        }
        return text;
    }

}
