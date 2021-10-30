import { components } from 'react-select';

const ControlComponent = (props) => (
  <div className='brd'>
    <components.Control {...props} />
  </div>
);

export default ControlComponent;
