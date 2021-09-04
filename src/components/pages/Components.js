import { Container } from '@organisms';
import { PageTemplate } from '@templates';
import {
  Button,
  Heading,
  Text,
  Input,
  BUTTON_TYPES,
  TEXT_TYPES,
  HEADING_LEVELS,
  Paragraph,
  PARAGRAPH_OPTIONS,
  IconButton,
  SideButton,
  SearchInput,
} from '@atoms';
import classNames from '../../../node_modules/classnames/index';

const LOREM_IPSUM = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const COLORS = [
  'bg-blue-light',
  'bg-blue-dark',
  'bg-yellow',
  'bg-yellow-hover',
  'bg-grey-blue',
  'bg-grey-light',
  'bg-grey-dark',
];

const Components = () => {
  return (
    <PageTemplate>
      <Container className='grid gap-y-4 py-4'>
        <div className='grid gap-4 py-2 px-4 border-gray-800 border-2'>
          <Heading level={2} children='Colors' className='border-b-1px border-blue-dark ' />
          <div className='flex flex-wrap space-x-2'>
            {COLORS.map((bg) => {
              return <div className={classNames('w-20 h-20', bg)} />;
            })}
          </div>
        </div>
        <div className='grid gap-4 py-2 px-4 border-gray-800 border-2'>
          <Heading level={2} children='Buttons' className='border-b-1px border-blue-dark' />
          {Object.values(BUTTON_TYPES).map((type) => {
            return (
              <div className='flex gap-x-2'>
                <Button type={type} children={type} />
                <Button type={type} children={`${type} disabled`} disabled={true} />
              </div>
            );
          })}
          <div>
            <IconButton children='icon' />
          </div>
          <div>
            <SideButton icon='icon' text='Button text' />
          </div>
        </div>
        <div className='grid py-2 px-4 gap-4'>
          <Heading level={2} children='Inputs' className='border-b-1px border-blue-dark' />
          <div className='grid grid-cols-3 gap-4 border-gray-800 border-2'>
            <Input placeholder='Base input...' />
            <Input placeholder='Error input' error={true} />
            <Input placeholder='Disabled input...' disabled={true} />
            <SearchInput placeholder='Search...' />
          </div>
        </div>

        <div className='grid gap-4 py-2 px-4 border-gray-800 border-2'>
          <Heading level={2} children='Headings' className='border-b-1px border-blue-dark' />
          {Object.values(HEADING_LEVELS).map((level) => {
            return (
              <div className='flex gap-x-2'>
                <Heading level={level} children={`Heading level ${level}`} />
              </div>
            );
          })}
        </div>

        <div className='grid gap-4 py-2 px-4 border-gray-800 border-2'>
          <Heading level={2} children='Paragraphs' className='border-b-1px border-blue-dark' />
          {Object.values(PARAGRAPH_OPTIONS).map((option) => {
            return (
              <div>
                <Heading level={4} children={`Option ${option}`} />
                <Paragraph option={option} children={LOREM_IPSUM} />
              </div>
            );
          })}
        </div>

        <div className=' flex gap-x-3 py-2 px-4 border-gray-800 border-2 leading-tight'>
          <div className='w-20 h-20 perfect-center '>1</div>
        </div>
      </Container>
    </PageTemplate>
  );
};

export default Components;
