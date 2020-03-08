import RegexConverter from "@/converters/RegexConverter";

export default class AliWebConverter extends RegexConverter {
    constructor() {
        super();
        this.conversions = [
            { regex: 'لاَ|لآ|لاً', to:'ڵا'},
            { regex: 'لَ|پ', to:'ڵ'},
            { regex: 'ة', to:'ە'},
            { regex: "ه" + "([^ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆەهیێأإآثذصضطظكيىةڎۊؤ]|$)", to:"هـ$1"},
            { regex: 'رِ|أ', to:'ڕ'},
            { regex: 'ؤ|وَ', to:'ۆ'},
            { regex: 'يَ|یَ', to:'ێ'},
            { regex: 'ص', to:'ێ'},
            { regex: 'ي', to:'ی'},
            { regex: 'ط', to: 'ڭ'}, //swap ط and گ
            { regex: 'گ', to: 'ط'}, //
            { regex: 'ڭ', to: 'گ'}, //
            { regex: 'ض', to: 'چ'},
            { regex: 'ث', to: 'پ'},
            { regex: 'ظ', to: 'ڤ'},
            { regex: 'ْ|ُ', to: ''},
            { regex: 'ى', to: '*'},
            { regex: 'ك', to: 'ک'},
            { regex: 'ذ', to: 'ژ'}
        ]
    }
}
