import {
  SimpleGrid,
  Card,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Stack,
  Divider,
} from '@chakra-ui/react';
import { MyNFT } from 'components/NFTComponents/MyNFT';
import { TransferNFT } from 'components/NFTComponents/TransferNFT';

function CompraNFTs() {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
      border='1px'
      borderColor='#055251'
    >
      <Card w='sm' border='1px' borderColor='#055251'>
        <CardBody>
          <MyNFT />
        </CardBody>
        <Divider />
        <CardFooter>
          <Text color='blue.600' fontSize='2xl'>
            10 Disponibles
          </Text>
          <TransferNFT />
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}

export { CompraNFTs };
