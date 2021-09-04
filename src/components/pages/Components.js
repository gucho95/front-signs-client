import { Button, Heading, Text, Input, BUTTON_TYPES, TEXT_TYPES } from 'components/atoms';
import { Container } from 'components/organisms';
import { PageTemplate } from '@templates';

const Components = () => {
  return (
    <PageTemplate>
      <Container className='grid gap-y-4 py-4'>
        <div className='flex flex-wrap  gap-4 py-2 px-4 border-gray-800 border-2'>
          <Heading children='Buttons' />
          <Button type={BUTTON_TYPES.PRIMARY} children={BUTTON_TYPES.PRIMARY} />
          <Button type={BUTTON_TYPES.SECONDARY} children={BUTTON_TYPES.SECONDARY} />
          <Button type={BUTTON_TYPES.DANGER} children={BUTTON_TYPES.DANGER} />
          <Button type={BUTTON_TYPES.PRIMARY} disabled={true} children={`${BUTTON_TYPES.PRIMARY}-disabled`} />
          <Button type={BUTTON_TYPES.SECONDARY} disabled={true} children={`${BUTTON_TYPES.SECONDARY}-disabled`} />
          <Button type={BUTTON_TYPES.DANGER} disabled={true} children={`${BUTTON_TYPES.DANGER}-disabled`} />
        </div>

        <div className='py-2 px-4 border-gray-800 border-2'>
          <Heading level={1} children='Heading level 1 mw sad MWASDADSg' className='leading-tight' />
          <Heading level={2} children='Heading level 2' className='leading-tight' />
          <Heading level={3} children='Heading level 3' className='leading-tight' />
          <Heading level={4} children='Heading level 4' className='leading-tight' />
          <Heading level={5} children='Heading level 5' className='leading-tight' />
          <Heading level={6} children='Heading level 6' className='leading-tight' />
        </div>

        <div className='flex gap-x-4 border-gray-800 border-2 leading-tight'>
          <Text children='Standart text' />
          <Text type={TEXT_TYPES.BOLD} children='Bold text' />
          <Text type={TEXT_TYPES.ITALIC} children='Italic text' />
          <Text type={TEXT_TYPES.UNDERLINE} children='Underline text' />
        </div>

        <div className=' flex gap-x-3 py-2 px-4 border-gray-800 border-2 leading-tight'>
          <Input placeholder='Input here...' />
          <Input error={true} placeholder='Input with error' />
        </div>

        <div className=' flex gap-x-3 py-2 px-4 border-gray-800 border-2 leading-tight'>
          <div className='w-20 h-20 perfect-center '>1</div>
        </div>
      </Container>
    </PageTemplate>
  );
};

export default Components;
