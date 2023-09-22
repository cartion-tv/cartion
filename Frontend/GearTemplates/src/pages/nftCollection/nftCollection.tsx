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

function NFTCollection() {
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
            <BreadcrumbLink href='/nftCollection'>
              Colección NFTs
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </section>
      <section>
        <Center>
          <Heading color='#b8860b'>Tu Colección NFTs</Heading>
        </Center>
      </section>
      <Grid
        templateColumns='repeat(3, 1fr)'
        gap={6}
        border='1px'
        borderColor='#055251'
      >
        <GridItem w='100%' h='100%'>
          <Card w='sm' border='1px' borderColor='#055251'>
            <CardBody>
              <MyNFT />
            </CardBody>
            <Divider />
            <CardFooter>
              <Text color='blue.600' fontSize='2xl'>
                10 Disponibles
              </Text>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem w='100%' h='100%'>
          <Card w='sm' border='1px' borderColor='#055251'>
            <CardBody>
              <MyNFT />
            </CardBody>
            <Divider />
            <CardFooter>
              <Text color='blue.600' fontSize='2xl'>
                10 Disponibles
              </Text>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem w='100%' h='100%'>
          <Card w='sm' border='1px' borderColor='#055251'>
            <CardBody>
              <MyNFT />
            </CardBody>
            <Divider />
            <CardFooter>
              <Text color='blue.600' fontSize='2xl'>
                10 Disponibles
              </Text>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem w='100%' h='100%'>
          <Card w='sm' border='1px' borderColor='#055251'>
            <CardBody>
              <MyNFT />
            </CardBody>
            <Divider />
            <CardFooter>
              <Text color='blue.600' fontSize='2xl'>
                10 Disponibles
              </Text>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem w='100%' h='100%'>
          <Card w='sm' border='1px' borderColor='#055251'>
            <CardBody>
              <MyNFT />
            </CardBody>
            <Divider />
            <CardFooter>
              <Text color='blue.600' fontSize='2xl'>
                10 Disponibles
              </Text>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem w='100%' h='100%'>
          <Card w='sm' border='1px' borderColor='#055251'>
            <CardBody>
              <MyNFT />
            </CardBody>
            <Divider />
            <CardFooter>
              <Text color='blue.600' fontSize='2xl'>
                10 Disponibles
              </Text>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}

export { NFTCollection };
