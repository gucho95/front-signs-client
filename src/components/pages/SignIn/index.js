import { BUTTON_HTML_TYPES, BUTTON_TYPES, Heading, Input, Spacing, Button } from '@atoms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';

const classes = {
  root: 'h-screen perfect-center bg-grey-light',
  form: 'w-96 grid gap-y-4 mx-auto text-center',
};

const SignIn = () => {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const onFormSuccess = (values) => {
    console.log(values);
  };
  const onFormError = () => {};

  return (
    <div className={classes.root}>
      <Spacing className='pt-40' />
      <form onSubmit={handleSubmit(onFormSuccess, onFormError)} className={classes.form}>
        <Heading level={2} children='Sign in' />
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
