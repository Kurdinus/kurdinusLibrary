import { CaseType } from '../../enums';
import Converter from "../Converter.js";

export default class Lowercase extends Converter {
    constructor(type){
        super();
        this.type = type;
    }

    convert(text) {
        switch (this.type) {
            case CaseType.UPPER:
                return text.toUpperCase();

      			case CaseType.WORD:
      				return text.replace(/([a-zêîûçşéúıŕřĺɫƚḧẍḍṿ]+)/gim, function(t){
      					return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
              });

      			case CaseType.SENTENCE:
      				return  text.replace(/[a-zêîûçşéúıŕřĺɫƚḧẍḍṿ].+?([\.?!:\n]|$)/gim, function (t) {
      					return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
              });

            case CaseType.LOWER:
      			default:
      				return text.toLowerCase();
        }
    }
}
