import { useState } from 'react';
import classNames from 'classnames';
import { Spacing } from '@atoms';
import SearchIcon from '../icons/Search';

const classes = {
  root: 'w-full h-full flex items-center text-white',
  inputWrapper: 'w-full',
  input: 'outline-none placeholder-white text-p5 w-full h-10 bg-transparent',
  icon: 'w-5 h-5 fill-current',
};

const SearchBar = (props) => {
  const { error, className, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <label className={classes.root} htmlFor='search'>
      <SearchIcon className={classNames(classes.icon)} />
      <Spacing className='pl-3' />
      <div className={classes.inputWrapper}>
        <input
          id='search'
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={focused ? null : 'Search'}
          className={classNames(classes.input, className)}
          {...inputProps}
        />
      </div>
    </label>
  );
};

export default SearchBar;
