import {
  SimpleGrid,
  Card,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Image,
  Stack,
  Divider,
} from '@chakra-ui/react';
import { MyNFT } from 'components/NFTComponents/MyNFT';

const nftCollection = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
    >
      <Card maxW='sm'>
        <CardBody>
          <MyNFT />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Titulo Pelicula</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Text color='blue.600' fontSize='2xl'>
            10 Disponibles
          </Text>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};
export default nftCollection;
