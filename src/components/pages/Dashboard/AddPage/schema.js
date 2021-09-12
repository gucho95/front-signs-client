import * as yup from 'yup';

const schema = yup.object().shape({
  label: yup.string().trim().min(1).required('Invalid value'),
  path: yup.string().min(1).required('Invalid value'),
});

export default schema;
