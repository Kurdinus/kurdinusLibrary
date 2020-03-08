import RegexConverter from "@/converters/RegexConverter";

export default class AliKConverter extends RegexConverter {
    constructor() {
        super();
        this.conversions = [
            { regex: 'لاَ|لآ|لاً', to: 'ڵا'},
            { regex: 'لً|لَ|لأ', to: 'ڵ'},
            { regex: 'ة', to: 'ە'},
            { regex: "ه" + "([^ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆەهیێأإآثذصضطظكيىةڎۊؤ]|$)", to: "هـ$1"},
            { regex: 'للهـ', to: 'لله'},
            { regex: 'ض', to: 'چ'},
            { regex: 'ث', to: 'پ'},
            { regex: 'ظ', to: 'ڤ'},
            { regex: 'ط', to: 'گ'},
            { regex: 'ىَ|يَ|یَ|آ', to: 'ێ'},
            { regex: 'رِ', to: 'ڕ'},
            { regex: 'ؤ|وَ', to: 'ۆ'},
            { regex: 'ي|ى', to: 'ی'},
            { regex: 'ء', to: '\u200Cو'},
            { regex: 'ِ', to: ''},
            { regex: 'ك', to: 'ک'},
            { regex: 'ذ', to: 'ژ'}
        ]
    }
}
