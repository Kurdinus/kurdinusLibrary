import { ArabicNormalizer } from '@/converters/arabic';

describe('ArabicNormalizer', () => {
  const normalizer = new ArabicNormalizer()
  it('should normalize ی and ک letters', () => {
    expect(normalizer.convert('ئاوەردي وە سۆز زامانے سەختم'))
        .toBe('ئاوەردی وە سۆز زامانی سەختم')

    expect(normalizer.convert('گوڵگوڵی ڪەردی جە هووناو ڕەختم'))
        .toBe('گوڵگوڵی کەردی جە هووناو ڕەختم')
  })

  it ('should normalize double Quotations',() => {
    expect(normalizer.convert('کچ دەچوە دەرێ ”دڵێکی“ ببڕێ'))
        .toBe("کچ دەچوە دەرێ «دڵێکی» ببڕێ")
  })

  // TODO: more tests needed
})
