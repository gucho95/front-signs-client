import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import schema from './schema';
import { v4 as uuidv4 } from 'uuid';
import { add } from '@actions/page';
import { selectPages } from '@selectors/page';
import { useRouter } from '@hooks';
import { generateSinglePagePath } from '@constants/paths';
import { Button, BUTTON_HTML_TYPES, BUTTON_TYPES, Input } from '@atoms';

const checkDuplicate = (data, current) => {
  const isDuplicate = data.find(
    (i) => i.label.toLowerCase() === current.label.toLowerCase() || i.path.toLowerCase() === current.path.toLowerCase()
  );
  return !!isDuplicate;
};

const classes = {
  wrapper: '',
  form: 'w-6/12 grid gap-y-4',
  buttonWrapper: 'flex justify-center',
};

const AddPage = () => {
  const dispatch = useDispatch();
  const pages = useSelector(selectPages);
  const { history } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), context: { pages } });

  const addPage = (payload) => dispatch(add(payload));

  const onFormSuccess = (values) => {
    const isDuplicate = checkDuplicate(pages, values);
    if (isDuplicate) {
      alert('Duplicate');
      return;
    }

    const data = { ...values, data: '', count: 5, icon: 'Icon', id: uuidv4() };
    const path = generateSinglePagePath(values.path);
    addPage(data);
    history.push(path);
  };

  const onFormError = (errors) => {
    console.error(errors);
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit(onFormSuccess, onFormError)} className={classes.form}>
        <Input placeholder='Title' error={errors.label} {...register('label')} />
        <Input placeholder='Pathname' error={errors.pathname} {...register('path')} />
        <div className={classes.buttonWrapper}>
          <Button type={BUTTON_TYPES.PRIMARY} htmlType={BUTTON_HTML_TYPES.SUBMIT} children='Submit' />
        </div>
      </form>
    </div>
  );
};

export default AddPage;
