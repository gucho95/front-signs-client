import { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Text from '../text';

const STATES = { ERROR: 'error', BASE: 'base' };

const DEFAULT_CLASSES =
  'border-1px rounded-30px py-3 px-5 outline-none placeholder-grey-dark text-p5 text-blue-dark focus:border-blue-light disabled:border-grey-dark disabled:bg-transparent disabled:opacity-30';

const STATE_CLASSES = {
  [STATES.ERROR]: 'border-danger',
  [STATES.BASE]: 'border-grey-dark',
};

const Input = (props) => {
  const { error, className, ...inputProps } = props;
  const stateClasses = error ? STATE_CLASSES[STATES.ERROR] : STATE_CLASSES[STATES.BASE];

  return (
    <div className='flex flex-col'>
      <input className={classNames(DEFAULT_CLASSES, stateClasses, className)} {...inputProps} />
      {error ? <Text children={'error message'} className='text-danger text-9px px-5' /> : null}
    </div>
  );
};

Input.propTypes = { error: PropTypes.bool };
export default Input;
