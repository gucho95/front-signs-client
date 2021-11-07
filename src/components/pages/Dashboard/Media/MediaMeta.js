import { Button, BUTTON_HTML_TYPES, BUTTON_TYPES, Input } from '@atoms';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import mediaActions from '@actions/media';

const MediaMeta = ({ selectedMedia, find, setSelectedMediaId }) => {
  const { comment, description, caption, altText, permalink, id } = selectedMedia;

  const { register, handleSubmit } = useForm({ defaultValues: { comment, description, caption, altText, permalink } });
  const dispatch = useDispatch();
  const resetActiveMedia = () => setSelectedMediaId(null);
  const updateMedia = (payload) => dispatch(mediaActions.update(payload));
  const removeMedia = () =>
    dispatch(
      mediaActions.remove({
        id,
        afterSuccess: () => {
          find();
          resetActiveMedia();
        },
      })
    );

  const onFormSuccess = (values) => {
    updateMedia({ ...values, id, afterSuccess: find });
  };

  const onFormError = (errors) => console.log(`errors`, errors);

  return (
    <form className='grid gap-y-2' onSubmit={handleSubmit(onFormSuccess, onFormError)}>
      <Input {...register('caption')} labelText='Caption' />
      <Input {...register('comment')} labelText='Comment' />
      <Input {...register('description')} labelText='Description' />
      <Input {...register('altText')} labelText='Alt text' />
      <Input {...register('permalink')} labelText='Permalink' />
      <Button type={BUTTON_TYPES.PRIMARY} htmlType={BUTTON_HTML_TYPES.SUBMIT} children='Update' className='w-full' />
      <Button
        type={BUTTON_TYPES.DANGER}
        htmlType={BUTTON_HTML_TYPES.BUTTON}
        children='Remove'
        className='w-full'
        onClick={removeMedia}
      />
    </form>
  );
};

export default MediaMeta;
