import { Spacing } from '@atoms';
import Header from './Header';
import Body from './Body';

const AddWidget = () => {
  return (
    <div>
      <Header />
      <Spacing className='pt-4' />
      <Body />
    </div>
  );
};

export default AddWidget;
