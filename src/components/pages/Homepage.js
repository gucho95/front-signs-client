import { Button, Heading, Text, Input, BUTTON_TYPES, TEXT_TYPES } from 'components/atoms';
import { Container } from 'components/organisms';
import { PageTemplate } from 'components/templates';

const Homepage = () => {
  return (
    <PageTemplate>
      <Container className='grid gap-y-4 py-4'>
        <p className='text-h4'>
          Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
      </Container>
    </PageTemplate>
  );
};

export default Homepage;
