import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TYPES = { CUSTOM: 'custom', PRIMARY: 'primary', SECONDARY: 'secondary', DANGER: 'danger' };
export const SIZES = { CUSTOM: 'custom', SMALL: 'small', MIDDLE: 'middle', MIDDLE: 'middle' };
export const HTML_TYPES = { RESET: 'reset', SUBMIT: 'submit', BUTTON: 'button' };

const DEFAULT_CLASSES =
  'flex-shrink-0 active:opacity-75 rounded-sm text-sm px-3 py-2 transition-all disabled:ring-0 disabled:opacity-50';

export const TYPE_CLASSES = {
  [TYPES.PRIMARY]: 'bg-blue-500 hover:bg-blue-600 focus:ring ring-blue-100 text-white',
  [TYPES.SECONDARY]: 'text-white bg-green-500 hover:bg-green-700 focus:ring ring-green-100',
  [TYPES.DANGER]: 'bg-red-500 hover:bg-red-700 focus:ring ring-red-100  text-white',
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
