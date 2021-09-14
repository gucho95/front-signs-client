import { TYPES } from '../types';
// TYPE COMPONENTS
import Type1 from './Options/Type1';
import Type2 from './Options/Type2';
import Type3 from './Options/Type3';
import Type4 from './Options/Type4';
import Type5 from './Options/Type5';
import Type6 from './Options/Type6';
import Type7 from './Options/Type7';
import Type8 from './Options/Type8';
import Type9 from './Options/Type9';
import Type10 from './Options/Type10';
import Type11 from './Options/Type11';

export const OPTION_COMPONENTS = {
  [TYPES[0].value]: Type1,
  [TYPES[1].value]: Type2,
  [TYPES[2].value]: Type3,
  [TYPES[3].value]: Type4,
  [TYPES[4].value]: Type5,
  [TYPES[5].value]: Type6,
  [TYPES[6].value]: Type7,
  [TYPES[7].value]: Type8,
  [TYPES[8].value]: Type9,
  [TYPES[9].value]: Type10,
  [TYPES[10].value]: Type11,
};

const TextWrapper = (props) => {
  const TextWidget = OPTION_COMPONENTS[props.option];
  return <TextWidget {...props} />;
};

export default TextWrapper;
