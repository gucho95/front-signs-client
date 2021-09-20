import { useMemo, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { TYPES } from '../types';
import { TYPE_FIELDS } from './optionFields';
import { Select, Spacing } from '@atoms';
import { useMount, useRouter } from '@hooks';

const CardForm = () => {
  const { params } = useRouter();
  const { register, watch, control, setValue, formState } = useFormContext();
  const { errors } = formState;
  const activeOption = watch('option');
  const optionFields = useMemo(() => (activeOption ? TYPE_FIELDS[activeOption] : null), [activeOption]);
  const isCreateMode = !params?.widgetId;

  // RESET FORM DATA ON COMPONENT OPTION CHANGE //:TODO
  useEffect(() => {}, [activeOption]);

  // SET DEFAULT OPTION VALUE FOR COMPONENT
  useMount(() => isCreateMode && setValue('option', TYPES[0].value.toString()));

  return (
    <div>
      <div className='w-6/12'>
        <Select options={TYPES} placeholder='Select text option' {...register('option')} disabled={!isCreateMode} />
      </div>
      <Spacing className='pt-4' />
      <div className='grid gap-y-2'>
        {optionFields
          ? optionFields.map(({ component: Component, name, rules, ...rest }, key) => {
              const fieldProps = name ? register(name, { ...rules }) : rules;
              return <Component key={name} {...fieldProps} {...rest} error={errors?.[name]} control={control} />;
            })
          : null}
      </div>
    </div>
  );
};

export default CardForm;
