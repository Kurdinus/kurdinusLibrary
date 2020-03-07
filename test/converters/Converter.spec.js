import Converter from '../../src/converters/Converter.js';

class InvalidDerived extends Converter {

}

class ValidDerived extends Converter {
  convert(text) {
    
  }
}

describe('converter', () => {
  it('should not be instantiated', ()=> {
      expect(() => new Converter()).toThrow()
  })

  it('s method convert should be implemented', ()=> {
      expect(() => new InvalidDerived()).toThrow()
  })

  it('s method convert should be implemented', ()=> {
      expect(() => new ValidDerived()).not.toThrow()
  })
})
