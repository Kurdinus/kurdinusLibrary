import RegexConverter from '@/converters/RegexConverter.js';

describe('regex converter', () => {
  it('should return same input when its empty', () => {
    expect(new RegexConverter([]).convert('the wings')).toBe('the wings');
  })
  it('should replace by regex', ()=> {
    const regex = new RegexConverter([
      { regex: 'cat', to: 'dog' }
    ])

    expect(regex.convert('the cute cat!')).toBe('the cute dog!');
  })
})
