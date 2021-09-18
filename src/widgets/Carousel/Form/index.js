import { useMemo, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { TYPES } from '../types';
import { TYPE_FIELDS } from './optionFields';
import { Button, BUTTON_TYPES, Select, Spacing } from '@atoms';
import { Tabs } from '@molecules';
import { useMount } from '@hooks';

const SLIDE = 'slide';

const CarouselForm = () => {
  const [activeKey, setActiveKey] = useState('0');
  const [tabs, setTabs] = useState([]);
  const { register, watch, control, setValue, formState, setFocus } = useFormContext();
  const { errors } = formState;
  const activeOption = watch('option');
  const slideFields = useMemo(() => (activeOption ? TYPE_FIELDS[activeOption] : null), [activeOption]);

  // SET DEFAULT OPTION VALUE FOR COMPONENT
  useMount(() => setValue('option', TYPES[0].value.toString()));

  // RESET CAROUSEL SLIDES DATA ON ACTIVE OPTION CHANGE
  useEffect(() => {
    setTabs([SLIDE]);
    setActiveKey(0);
  }, [activeOption]);

  const addSlide = () => {
    const tabKey = tabs.length;
    const newState = [...tabs, SLIDE];
    setTabs(newState);
    setActiveKey(tabKey);
  };

  const removeSlide = () => {
    const newState = tabs.filter((t, index) => index.toString() !== activeKey.toString());
    setTabs(newState);
    setActiveKey('0');
  };

  return (
    <div>
      <div className='w-6/12'>
        <Select options={TYPES} placeholder='Select text option' {...register('option')} />
      </div>
      <Spacing className='pt-7' />
      <div className='flex space-x-2'>
        <Button type={BUTTON_TYPES.SECONDARY} children='Add slide' onClick={addSlide} />
        {tabs.length > 1 && activeKey ? (
          <Button type={BUTTON_TYPES.DANGER} children='Remove slide' onClick={removeSlide} className='bg-danger' />
        ) : null}
      </div>

      <Tabs
        key={activeOption}
        titlePrefix='Slide'
        data={tabs}
        activeKey={activeKey?.toString()}
        setActiveKey={setActiveKey}
      />

      {tabs.map((item, parentKey) => {
        const isActiveSlide = parentKey.toString() === activeKey?.toString();
        return (
          <div className={isActiveSlide ? 'grid gap-y-2' : 'hidden'}>
            {slideFields.map(({ component: Component, name, rules, ...rest }) => {
              const fieldName = `slides.${parentKey}.${name}`;
              const error = errors?.slides?.[parentKey]?.[name];
              const fieldProps = name ? register(fieldName, { ...rules }) : rules;

              return <Component key={name} error={error} control={control} {...fieldProps} {...rest} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CarouselForm;
