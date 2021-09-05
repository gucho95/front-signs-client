import { Spacing } from '@atoms';
import { VerticalMenu } from '@molecules';

const Sidebar = ({ data }) => (
  <div className='bg-dark-alpha min-h-full text-white flex flex-col w-60'>
    <Spacing className='pt-5' />
    <VerticalMenu data={data} />
    <Spacing className='pt-5' />
  </div>
);

export default Sidebar;
