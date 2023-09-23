import {
  SimpleGrid,
  Card,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Divider,
  Center,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  GridItem,
  Grid,
} from '@chakra-ui/react';
import { MyNFT } from 'components/NFTComponents/MyNFT';

import { Link } from 'react-router-dom';

function TuNFT() {
  return (
    <>
      <section>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/comparte'>Comparte</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/nftForm'>Ingresar Datos</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/nftCollection'>Tu NFT</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </section>
      <section>
        <Center>
          <Heading color='#b8860b' marginBottom='20px'>
            Tu NFT
          </Heading>
        </Center>
      </section>
      <Grid
        templateColumns='repeat(3, 1fr)'
        gap={3}
        border='1px'
        borderColor='#055251'
      >
        <GridItem
          colStart={2}
          colEnd={3}
          w='100%'
          h='100%'
          marginTop='20px'
          marginBottom='20px'
          marginLeft='40px'
        >
          <Card w='sm' border='1px' borderColor='#055251'>
            <CardBody>
              <MyNFT />
            </CardBody>
            <Divider />
            <CardFooter>
              <Text color='blue.600' fontSize='2xl' marginLeft='90px'>
                10 Disponibles
              </Text>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}

export { TuNFT };
