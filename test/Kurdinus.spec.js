
import * as Kurdinus from '@/Kurdinus.js';
import * as Latin from '@/converters/latin';
import { CaseType } from '@/enums';
jest.mock('@/converters/latin');

const convertFn = jest.fn();

describe('Kurdinus', ()=> {
  beforeEach(()=> {
    convertFn.mockClear();
    Latin.CaseConverter.mockClear();
    Latin.CaseConverter.mockReturnValue({convert: convertFn})
  })

  it('shoyld create converter with LOWER when LOWER provided', ()=> {
    Kurdinus.changeCase('abc', CaseType.SENTENSE);
    expect(Latin.CaseConverter).toHaveBeenCalledWith(CaseType.SENTENSE)
  })

  it('should pass text to the created Converter', () => {
    Kurdinus.changeCase('abc', CaseType.SENTENSE);
    expect(convertFn).toHaveBeenCalledWith('abc')
  })

})
