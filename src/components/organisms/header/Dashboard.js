import { Heading, Input, Spacing, SearchBar } from '@atoms';

const classes = {
  root: 'bg-blue-dark flex pl-14 pt-1 pb-2',
  search: '',
};

const Header = () => {
  return (
    <header className={classes.root}>
      <Heading level={3} children='FS Panel' />
      <Spacing className='pl-28 ' />

      <div className='w-694px bg-white'>
        <SearchBar />
        {/* <Input placeholder='Search' className='bg-yellow' /> */}
      </div>
    </header>
  );
};

export default Header;
