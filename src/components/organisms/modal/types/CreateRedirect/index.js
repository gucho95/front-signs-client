import actions from '@actions/redirects';
import { Button, BUTTON_HTML_TYPES, BUTTON_SIZES, BUTTON_TYPES, Heading, Input, Spacing } from '@atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import schema from './schema';

const CreateRedirect = ({ closeModal, params }) => {
  const findAll = params.findAll;
  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(schema), defaultValues: params || {} });
  const { errors } = formState;
  const dispatch = useDispatch();
  const create = (payload) => dispatch(actions.create(payload));
  const update = (payload) => dispatch(actions.update(payload));
  const request = params?.id ? update : create;

  const onFormSuccess = (values) => {
    request({
      ...values,
      afterSuccess: () => {
        findAll();
        closeModal();
      },
    });
  };

  const onFormError = (err) => {
    console.log(err);
  };

  return (
    <div className='w-400px'>
      <form onSubmit={handleSubmit(onFormSuccess, onFormError)}>
        <Heading level={3} children='Create redirect' className='text-center' />
        <Spacing className='pt-3' />
        <div className='grid gap-y-2'>
          <Input
            placeholder='Old url'
            error={errors.oldUrl}
            showError={false}
            autoFocus={true}
            {...register('oldUrl')}
          />
          <Input placeholder='New url' error={errors.newUrlTo} showError={false} {...register('newUrlTo')} />
          <Input placeholder='Regex url' error={errors.regexUrl} showError={false} {...register('regexUrl')} />
          <Input
            defaultValue={301}
            placeholder='Status code'
            type='number'
            error={errors.statusCode}
            showError={false}
            {...register('statusCode')}
          />
        </div>
        <Spacing className='pt-2' />
        <div className='flex justify-end space-x-2'>
          <Button type={BUTTON_TYPES.DANGER} children='Cancel' onClick={closeModal} />
          <Button type={BUTTON_TYPES.PRIMARY} htmlType={BUTTON_HTML_TYPES.SUBMIT} children='Submit' />
        </div>
      </form>
    </div>
  );
};

export default CreateRedirect;
