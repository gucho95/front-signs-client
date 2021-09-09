import { check } from 'prettier';
import * as yup from 'yup';

const schema = yup.object().shape({
  label: yup.string().trim().min(1).required('Invalid value'),
  path: yup.string().trim().min(1).required('Invalid value'),
});

export default schema;
