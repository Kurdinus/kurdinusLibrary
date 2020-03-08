import { FontType } from '@/enums';

import AliKConverter from './AliKConverter';
import AliWebConverter from './AliWebConverter';
import DylanConverter from './DylanConverter';

const Fonts = {
  [FontType.ALI_K]: new AliKConverter(),
  [FontType.ALI_WEB]: new AliWebConverter(),
  [FontType.DYLAN]: new DylanConverter()
}

export {
    Fonts,
    AliKConverter,
    AliWebConverter,
    DylanConverter
}
