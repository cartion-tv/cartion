import {
  SimpleGrid,
  Card,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Stack,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  GridItem,
  Grid,
} from '@chakra-ui/react';
import { MintNFT } from 'components/NFTComponents/MintNFT';
import { MyNFT } from 'components/NFTComponents/MyNFT';

function CompraNFTs() {
  return (
    <>
      <section>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/compraNFTs'>
              Únete a un proyecto
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </section>
      <section>
        <Center>
          <Heading color='#b8860b'>Únete a un proyecto cinematográfico</Heading>
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
              <MintNFT />
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
              <MintNFT />
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
              <MintNFT />
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
              <MintNFT />
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
              <MintNFT />
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
              <MintNFT />
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}

export { CompraNFTs };
