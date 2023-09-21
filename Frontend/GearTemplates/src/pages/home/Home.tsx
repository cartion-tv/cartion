import { MyNFT } from 'components/NFTComponents/MyNFT';
import './home.css';
import {
  Card,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Divider,
  Image,
  Stack,
} from '@chakra-ui/react';

function Home() {
  return (
    <div className='main-body'>
      <section>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <MyNFT />

          <Stack>
            <CardBody>
              <Heading size='md'>The perfect latte</Heading>
            </CardBody>
          </Stack>
        </Card>
      </section>
    </div>
  );
}

export { Home };
