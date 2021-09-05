import { Heading, Spacing } from '@atoms';
import { VerticalMenu } from '@molecules';
import { DashboardHeader as Header } from '@organisms';
import { DashboardTemplate as Template } from '@templates';

const menuItemData = [
  {
    icon: 'Icon',
    label: 'Page 1',
    count: 11,
    path: '/page1',
  },
  {
    icon: 'Icon',
    label: 'Page 2',
    count: 8,
    path: '/page2',
  },
  {
    icon: 'Icon',
    label: 'Page 3',
    count: 333,
    path: '/page3',
  },
  {
    icon: 'Icon',
    label: 'Page 4',
    count: null,
    path: '/page4',
  },

  {
    icon: 'Icon',
    label: 'Settings',
    count: null,
    path: '/settings',
  },
  {
    icon: 'Icon',
    label: 'Sign out',
    count: null,
    appendBase: false,
    path: '/sign-in',
  },
];

const Sidebar = () => (
  <div className='bg-dark-alpha min-h-full text-white flex flex-col w-60'>
    <Spacing className='pt-5' />
    <VerticalMenu data={menuItemData} />
    <Spacing className='pt-5' />
  </div>
);

const Content = () => (
  <div className='min-h-full bg-grey-body'>
    <div className='py-7 px-12'>
      <Heading level={1} children='Content' />
      <Heading level={1} children='Content' />
      <Heading level={1} children='Content' />
      <Heading level={1} children='Content' />
      <Heading level={1} children='Content' />
      <Heading level={1} children='Content' />
      <Heading level={1} children='Content' />
      <Heading level={1} children='Content' />
      <Heading level={1} children='Content' />
      <Heading level={1} children='Content' />
      <Heading level={1} children='Content' />
    </div>
  </div>
);

const Dashboard = () => {
  return <Template components={{ Header, Sidebar, Content }} />;
};

export default Dashboard;
