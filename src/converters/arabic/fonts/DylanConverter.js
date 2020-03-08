import RegexConverter from "@/converters/RegexConverter";

export default class AliWebConverter extends RegexConverter {
    constructor() {
        super();
        this.conversions = [
            { regex: 'لإ|لأ|لآ', to: 'ڵا'},
            { regex: 'ؤ|وَ', to: 'ۆ'},
            { regex: 'ة', to: 'ە'},
            { regex: 'ض', to: 'ڤ'},
            { regex: 'ص', to: 'ڵ'},
            { regex: 'ث', to: 'ێ'},
            { regex: 'ؤ', to: 'ۆ'},
            { regex: 'ي|ى', to: 'ی'},
            { regex: 'ك', to: 'ک'},
            { regex: 'ذ', to: 'ڕ'}
        ]
    }
}
