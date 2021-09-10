import { Button, BUTTON_TYPES, Text } from '@atoms';

// TODO check to use
const BackButton = () => (
  <Button type={BUTTON_TYPES.CUSTOM}>
    <Text className='text-p1 text-dark-beta'>&#60; Back</Text>
  </Button>
);
<BackButton />;

const SinglePage = ({ children }) => {
  return (
    <div>
      <Text className='text-28px text-black' children={children} />
    </div>
  );
};

export default SinglePage;
