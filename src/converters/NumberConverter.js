import Converter from "./Converter.js";
import { NumerlaType } from '@/enums';

export default class NumberConverter extends Converter {
    constructor(type) {
        super();
        this.type = type;
        this.numeralConvList = new Array(
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
    }

    convert(text) {
        switch (this.type){
            case NumerlaType.ARABIC:
                for (var i = 0; i < numeralConvList.length; i += 3) {
                    text = text.replace(new RegExp(numeralConvList[i] + '|' + numeralConvList[i + 1], 'g'), numeralConvList[i + 2]);
                }
                break;
            case NumerlaType.PERSIAN:
                for (var i = 0; i < numeralConvList.length; i += 3) {
                    text = text.replace(new RegExp(numeralConvList[i] + '|' + numeralConvList[i + 2], 'g'), numeralConvList[i + 1]);
                }
                break;
            case NumerlaType.LATIN:
                for (var i = 0; i < numeralConvList.length; i += 3) {
                    text = text.replace(new RegExp(numeralConvList[i + 2] + '|' + numeralConvList[i + 1], 'g'), numeralConvList[i]);
                }
                break;
        }

        return text;
     }
}
