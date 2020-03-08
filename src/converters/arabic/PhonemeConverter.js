import RegexConverter from "@/converters/RegexConverter";
import { PhonemeType } from "@/enums";

export default class PhonemeConverter extends RegexConverter {
    constructor(phonemeType) {
        super([]);
        if(phonemeType=== PhonemeType.DIAGRAPH) {
            this.conversions = [
                { regex: 'ḧ', to: 'hh'},
                { regex: 'ẍ', to: 'gh'},
                { regex: 'ɫ', to: 'll'},
                { regex: '(^|[^aeêiîouûlɫrřmnfhḧjsşṣvxẍzƹcçbdgkpqtʔ])ř', to: '$1r'},
                { regex: 'ř', to: 'rr'}
            ]
        } else if(phonemeType === PhonemeType.REDUCED) {
            this.conversions = [
                { regex: 'ḧ', to: 'h'},
                { regex: 'ẍ', to: 'x'},
                { regex: 'ɫ', to: 'l'},
                { regex: 'ř', to: 'r'}
            ]
        }
    }
}
