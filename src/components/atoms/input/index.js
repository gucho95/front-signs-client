import classNames from 'classnames';
import PropTypes from 'prop-types';

const STATES = { ERROR: 'error', BASE: 'base' };
const DEFAULT_CLASSES = 'border-2 focus:ring focus:ring-1 text-xs p-1 outline-none rounded-sm';

const STATE_CLASSES = {
  [STATES.ERROR]: 'border-red-200 focus:ring-red-100',
  [STATES.BASE]: 'border-blue-200 focus:ring-blue-100',
};

const Input = (props) => {
  const { error, className, ...inputProps } = props;
  const stateClasses = error ? STATE_CLASSES[STATES.ERROR] : STATE_CLASSES[STATES.BASE];
  return <input className={classNames(DEFAULT_CLASSES, stateClasses, className)} {...inputProps} />;
};

Input.propTypes = { error: PropTypes.bool };
export default Input;
