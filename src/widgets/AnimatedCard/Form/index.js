import { useMemo, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { TYPES } from '../types';
import { TYPE_FIELDS } from './optionFields';
import { Select, Spacing } from '@atoms';
import { Tabs } from '@molecules';
import { useMount } from '@hooks';

const generateTabData = (data, register, errors, control) => {
  return data.map((i, parentKey) => ({
    title: `Item ${parentKey + 1}`,
    body: () => (
      <div className='grid gap-y-2'>
        {i.map(({ component: Component, name, rules, ...rest }) => {
          const fieldName = `items.${parentKey}.${name}`;
          const error = errors?.[fieldName];
          const fieldProps = name ? register(fieldName, { ...rules }) : rules;
          return <Component key={name} error={error} control={control} {...fieldProps} {...rest} />;
        })}
      </div>
    ),
  }));
};

const AnimatedCardForm = () => {
  const { register, watch, control, setValue, formState, reset } = useFormContext();
  const { errors } = formState;
  const activeOption = watch('option');
  const optionFields = useMemo(() => (activeOption ? TYPE_FIELDS[activeOption] : null), [activeOption]);
  const tabData = useMemo(
    () => activeOption && generateTabData(optionFields, register, errors, control),
    [activeOption, optionFields]
  );

  // SET DEFAULT OPTION VALUE FOR COMPONENT
  useMount(() => setValue('option', TYPES[0].value.toString()));

  return (
    <div>
      <div className='w-6/12'>
        <Select options={TYPES} placeholder='Select text option' {...register('option')} />
      </div>
      <Spacing className='pt-7' />
      <Tabs key={activeOption} tabKey={0} data={tabData} />
    </div>
  );
};

export default AnimatedCardForm;
