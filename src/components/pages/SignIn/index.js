import { BUTTON_HTML_TYPES, BUTTON_TYPES, Heading, Input, Spacing, Button } from '@atoms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import { useRouter } from '@hooks';
import { PATHS } from '@constants/paths';

const classes = {
  root: 'h-screen perfect-center bg-grey-light',
  form: 'w-96 grid gap-y-4 mx-auto text-center',
};

const SignIn = () => {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const { history } = useRouter();
  const onFormSuccess = (values) => {
    console.log(values);
    history.push(PATHS.DASHBOARD);
  };
  const onFormError = () => {};

  return (
    <div className={classes.root}>
      <Spacing className='pt-40' />
      <form onSubmit={handleSubmit(onFormSuccess, onFormError)} className={classes.form}>
        <Heading level={3} children='Sign in' />
        <Input placeholder='Email' {...register('email')} />
        <Input placeholder='Password' {...register('password')} />
        <div>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            htmlType={BUTTON_HTML_TYPES.SUBMIT}
            children='Submit'
            className='rounded-30px'
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
