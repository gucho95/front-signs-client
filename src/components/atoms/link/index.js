import { Link } from 'react-router-dom';

export const External = (props) => <a {...props} target='_blank' />;
export const Internal = (props) => <Link {...props} />;
