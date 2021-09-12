import { Input, Select, Spacing, Textarea } from '@atoms';
import { useFormContext } from 'react-hook-form';
import { useMemo, useEffect } from 'react';
import { OPTIONS } from './options';
import { OPTION_FIELDS } from './optionFields';
import { useMount } from '@hooks';

const TextForm = () => {
  const { register, watch, control, setValue, formState } = useFormContext();
  const { errors } = formState;
  const activeOption = watch('option');
  const optionFields = useMemo(() => (activeOption ? OPTION_FIELDS[activeOption] : null), [activeOption]);
  console.log('optionFields', optionFields);
  console.log(`activeOption`, activeOption);

  useMount(() => setValue('option', OPTIONS[0].value));

  return (
    <div>
      <div className='w-6/12'>
        <Select options={OPTIONS} placeholder='Select text option' {...register('option')} />
      </div>
      <Spacing className='pt-4' />
      <div className='grid gap-y-2'>
        {optionFields
          ? optionFields.map(({ component: Component, name, rules, ...rest }) => {
              const fieldProps = name ? register(name, { ...rules }) : rules;
              return <Component {...fieldProps} {...rest} error={errors?.[name]} control={control} />;
              //   <Input placeholder={option} {...register(option)} />
            })
          : null}
      </div>
      {/* <div className='w-6/12'>{activeOption && OptionComponent ? <OptionComponent children='AA' /> : null}</div> */}
    </div>
  );
};

export default TextForm;
