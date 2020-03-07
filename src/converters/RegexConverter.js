import Converter from './Converter.js'

export default class RegexConverter extends Converter {
    constructor(conversions) {
        super();
        this.conversions = conversions
    }

    convert(text) {
        for(let {regex, to} of this.conversions) {
            text = text.replace(new RegExp(regex, 'gim'), to)
        }
	    return text;
    }
}
