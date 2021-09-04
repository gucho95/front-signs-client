import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SearchIcon from '../icons/Search';

const classes = {
  root: 'w-full relative h-full flex items-center brd',
  input:
    'border-1px py-3 pl-10 pr-10 outline-none placeholder-grey-dark text-p5 text-blue-dark w-full h-5 bg-transparent brd',
  iconWrapper: 'absolute top-0 left-5 h-full perfect-center',
  icon: 'w-4 h-4 fill-current',
};

const SearchBar = (props) => {
  const { error, className, ...inputProps } = props;

  return (
    <form>
      <label className={classes.root} htmlFor='search'>
        <div className={classes.iconWrapper}>
          <SearchIcon className={classNames(classes.icon)} />
        </div>
        <input id='search' className={classNames(classes.input, className)} {...inputProps} />
      </label>
    </form>
  );
};

export default SearchBar;
