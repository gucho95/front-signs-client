import {
  Heading,
  Input,
  Paragraph,
  Spacing,
  Textarea,
  Text,
  Button,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_HTML_TYPES,
  Checkbox,
} from '@atoms';
import classNames from 'classnames';
import Menu, { MenuItem, Divider } from 'rc-menu';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CollapseMenu = () => (
  <Menu>
    <MenuItem className='px-7 py-5'>
      <Checkbox name='a1' before={<Text className=''>Do you need us to design your signs?</Text>} />
    </MenuItem>
    <MenuItem className='px-7 py-5'>
      <Checkbox name='a2' before={<Text className='flex-1'>Where do you plan to display your sign(s)?</Text>} />
    </MenuItem>
    <MenuItem className='px-7 py-5'>
      <Checkbox
        name='a3'
        before={<Text className='flex-1'>Do you know if you need illuminated or non-illuminated sign?</Text>}
      />
    </MenuItem>
    <MenuItem className='px-7 py-5'>
      <Checkbox name='a4' before={<Text className='flex-1'>Do you know the sizes of your sign?</Text>} />
    </MenuItem>
    <MenuItem className='px-7 py-5'>
      <Checkbox name='a5' before={<Text className='flex-1'>Do you need us to install your signs?</Text>} />
    </MenuItem>
    <MenuItem className='w-full flex flex-col py-5 px-7'>
      <Text className='flex-1'>Please select the service/s you require</Text>
      <Spacing className='pt-5' />
      <div className='bg-grey-blue p-5 rounded-12px grid gap-y-5'>
        <div className='flex space-x-4'>
          <Checkbox name='a' after={<Text>3D Signage Rendering</Text>} />
          <Checkbox name='b' after={<Text>Cutting and Engraving </Text>} />
          <Checkbox name='c' after={<Text>Large Format Printing</Text>} />
          <Checkbox name='d' after={<Text>Permitting</Text>} />
        </div>
        <div className='flex space-x-4'>
          <Checkbox name='e' after={<Text>Manufacturing and Installation</Text>} />
          <Checkbox name='f' after={<Text>Sign Painting</Text>} />
          <Checkbox name='g' after={<Text>Sign Repair and Replacement</Text>} />
        </div>
      </div>
    </MenuItem>
  </Menu>
);

const CollapseButton = ({ menuVisible, onClick, visible = true }) => (
  <Button
    className={classNames('text-left flex items-center text-p4-24 p-5', visible ? 'visible' : 'invisible')}
    onClick={onClick}
  >
    <Text>
      Please click here and answer the questions in the dropdown window. The more we know about your project(s) the
      faster you’ll get the accurate quote.
    </Text>
    {menuVisible ? <ArrowUp /> : <ArrowDown />}
  </Button>
);

const Collapse = ({ menuVisible, setMenuVisible }) => (
  <div className='relative'>
    <div className={classNames('border-1px border-blue-dark rounded-10px', menuVisible ? 'absolute' : 'static')}>
      <CollapseButton menuVisible={menuVisible} onClick={() => setMenuVisible(!menuVisible)} visible={true} />
      <div className={classNames('top-full left-0 w-full flex-col bg-white', menuVisible ? 'flex' : 'hidden')}>
        <CollapseMenu />
      </div>
    </div>
  </div>
);

const MOCK = {
  title: `See What Front Signs Can Do For You`,
  description: `Enter your details, attach your project files (if you have any) and our agent will get in touch with you as soon as possible to provide a quote for your project. Please note that Front Signs is a full-cycle sign manufacturing company. We handle all your signage needs in-house – starting with fabrication/printing and ending with installation and getting a permit for your sign (when necessary) in compliance with local laws and ordinances.`,
};

const classes = {
  root: 'flex py-20 px-28 shadow-3 mt-8 rounded-10px',
  textSection: '',
  formSection: '',
};

const ArrowUp = () => <Text>&#8593;</Text>;
const ArrowDown = () => <Text>&#8595;</Text>;

const Type1 = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const methods = useForm({ mode: 'onChange' });
  const { register, control, handleSubmit, getValues } = methods;

  const onFormSuccess = (values) => {
    console.log(`values`, values);
  };
  const onFormError = (error) => {
    console.log(`errro`, error);
  };

  console.log('get', getValues());

  return (
    <div className='mx-130px'>
      <div className={classes.root}>
        <div className='w-4/12 text-blue-dark'>
          <Heading level={3} children={MOCK.title} className='uppercase' />
          <Spacing className='pt-7' />
          <Paragraph children={MOCK.description} className='text-p2-32 font-light' />
        </div>
        <Spacing className='pl-36' />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onFormSuccess, onFormError)} className='flex-1 '>
            <Spacing className='pt-5' />
            <div className='grid grid-cols-2 gap-x-7'>
              <Input className='rounded-30px' placeholder='Full name' {...register('fullName')} />
              <Input className='rounded-30px' placeholder='Email*' {...register('email')} />
            </div>
            <Spacing className='pt-5' />
            <div className='grid grid-cols-2 gap-x-7'>
              <Input className='rounded-30px' placeholder='Company' {...register('company')} />
              <Input className='rounded-30px' placeholder='Phone' {...register('phone')} />
            </div>
            <Spacing className='pt-5' />
            <Textarea className='rounded-30px' placeholder='Tell us about your project*' {...register('description')} />
            <Spacing className='pt-5' />
            <Collapse menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
            {menuVisible ? <CollapseButton visible={false} /> : null}
            <Spacing className='pt-5' />
            <div className='flex'>
              <div className='flex-1 py-4'>brd</div>
              <div className='w-215px'>
                <Button type={BUTTON_TYPES.PRIMARY} htmlType={BUTTON_HTML_TYPES.SUBMIT} className='w-full'>
                  Send
                </Button>
              </div>
            </div>
            <Checkbox name='test' />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Type1;
