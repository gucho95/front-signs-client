import { Spacing } from '@atoms';
import { VerticalMenu } from '@molecules';

const Sidebar = ({ pagesMenu, staticMenu }) => (
  <div className='bg-dark-alpha min-h-full text-white flex flex-col w-60'>
    <Spacing className='pt-5' />
    <VerticalMenu data={pagesMenu} />
    <Spacing className='pt-2' />
    <div className='h-1px w-full bg-grey-blue' />
    <Spacing className='pt-2' />
    <VerticalMenu data={staticMenu} />
  </div>
);

export default Sidebar;
