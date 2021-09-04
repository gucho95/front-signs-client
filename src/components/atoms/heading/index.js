import PropTypes from 'prop-types';
import classNames from 'classnames';

const getHeadingElement = ({ level, ...props }) => {
  switch (level) {
    case LEVELS[1]:
      return () => <h1 {...props} />;
    case LEVELS[2]:
      return () => <h2 {...props} />;
    case LEVELS[3]:
      return () => <h3 {...props} />;
    case LEVELS[4]:
      return () => <h4 {...props} />;
    default:
      return () => <h4 {...props} />;
  }
};

export const LEVELS = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 };
const DEFAULT_CLASSES = 'leading-0';

export const LEVEL_CLASSES = {
  [LEVELS[1]]: 'text-7xl',
  [LEVELS[2]]: 'text-6xl',
  [LEVELS[3]]: 'text-5xl',
  [LEVELS[4]]: 'text-4xl',
  [LEVELS[5]]: 'text-3xl',
  [LEVELS[6]]: 'text-2xl',
};

const Heading = (props) => {
  const { className, level, ...headingProps } = props;
  const levelClasses = LEVEL_CLASSES?.[level] || '';
  const elementClassNames = classNames(DEFAULT_CLASSES, levelClasses, className);
  const HeadingElement = getHeadingElement({ level, className: elementClassNames, ...headingProps });

  return <HeadingElement />;
};

Heading.propTypes = { level: PropTypes.oneOf(Object.values(LEVELS)) };

Heading.defaultProps = { level: LEVELS[4] };

export default Heading;
