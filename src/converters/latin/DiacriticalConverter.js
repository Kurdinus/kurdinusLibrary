import RegexConverter from "@/converters/RegexConverter.js";

export default class DiacriticalConverter extends RegexConverter{
constructor(){
        super();
        this.conversions = [
            {regex:"ch", to:"ç"},
            {regex:"gh", to:"ẍ"},
            {regex:"hh", to:"ḧ"},
            {regex:"sh", to:"ş"},
            {regex:"ll", to:"ɫ"},
            {regex:"rr", to:"ř"}
        ]
    }
}
