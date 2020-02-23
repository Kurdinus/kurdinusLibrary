import Kurdi from '../kurdi.js'


describe('Kurdi', () => {
    describe('convertLatinToArabic', () => {    
        test('single world translation', ()=> {
            expect(Kurdi.convertLatinToArabic('Hejar')).toBe('هەژار');
        })

        test('simple sentence', () => {
            expect(Kurdi.convertLatinToArabic('Hejar û Hêmin')).toBe('هەژار و هێمن');
        })

        test('complex sentense with numbers', () => {
            const sentense = "1945 – Şerê cîhanê yê duyem: Bajarê Poznańê yê Polonyayê bi hevkariya polon û sovyetan ji destê naziyan hate rizgarkirin.";
            const expected = "1945 – شەرێ جیهانێیێ دویەم: باژارێ پۆزناńئێیێ پۆلۆنیایێ ب هەڤکاریا پۆلۆن و سۆڤیەتان ژ دەستێ نازیان هاتە رزگارکرن.";
            expect(Kurdi.convertLatinToArabic(sentense)).toBe(expected);
        })
    })
})