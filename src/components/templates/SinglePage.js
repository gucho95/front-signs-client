import { Text } from '@atoms';

const SinglePage = ({ children }) => {
  return (
    <div>
      <Text className='text-28px text-black' children={children} />
    </div>
  );
};

export default SinglePage;
