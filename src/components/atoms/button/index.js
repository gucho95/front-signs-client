import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TYPES = { PRIMARY: 'primary', SECONDARY: 'secondary', LINK: 'link', CUSTOM: 'custom' };
export const SIZES = { CUSTOM: 'custom', SMALL: 'small', MIDDLE: 'middle' };
export const HTML_TYPES = { RESET: 'reset', SUBMIT: 'submit', BUTTON: 'button' };

const DEFAULT_CLASSES = 'flex-shrink-0 active:opacity-75 rounded-3px text-p4-24 transition-all';

export const TYPE_CLASSES = {
  [TYPES.PRIMARY]: 'bg-blue-light text-white hover:bg-yellow-hover disabled:bg-grey-light px-5 py-4',
  [TYPES.SECONDARY]:
    'bg-white text-blue-light border-1px border-blue-light hover:bg-blue-light hover:text-white  hover:border-0 disabled:bg-white disabled:border-grey-light disabled:text-grey-light px-5 py-4',
  [TYPES.LINK]: 'bg-white text-blue-light hover:underline disabled:text-blue-dark disabled:no-underline px-5 py-4',
  [TYPES.CUSTOM]: '',
};

export const SIZE_CLASSES = {
  [SIZES.SMALL]: 'px-1 py-2',
  [SIZES.MIDDLE]: 'py-2 px-3',
  [SIZES.DEFAULT]: 'py-3 w-4',
  [SIZES.BIG]: 'px-4 py-5',
  [SIZES.CUSTOM]: '',
};

const Button = forwardRef((props, ref) => {
  const { className, type, size, htmlType, ...buttonProps } = props;
  const typeClasses = TYPE_CLASSES?.[type] || '';
  const sizeClasses = SIZE_CLASSES?.[size] || '';

  return (
    <button
      ref={ref}
      type={htmlType}
      className={classNames(DEFAULT_CLASSES, typeClasses, sizeClasses, className)}
      {...buttonProps}
    />
  );
});

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  htmlType: PropTypes.oneOf(Object.values(HTML_TYPES)),
};

Button.defaultProps = {
  size: SIZES.CUSTOM,
  type: TYPES.CUSTOM,
  htmlType: HTML_TYPES.BUTTON,
};

export default Button;
