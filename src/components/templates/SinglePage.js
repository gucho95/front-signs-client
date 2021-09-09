import { Button, BUTTON_TYPES, Heading, Text } from '@atoms';
import { Header } from '@organisms';

const BackButton = () => (
  <Button type={BUTTON_TYPES.CUSTOM}>
    <Text className='text-p1 text-dark-beta'>&#60; Back</Text>
  </Button>
);
const SinglePage = ({ children }) => {
  return (
    <div>
      <div>
        <BackButton />
      </div>
      <Text className='text-28px text-black' children={children} />
    </div>
  );
};

export default SinglePage;