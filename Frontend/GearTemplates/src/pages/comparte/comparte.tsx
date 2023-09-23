import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

function Comparte() {
  return (
    <div className='main-body'>
      <section>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/comparte'>Comparte</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </section>
      <section>
        <Center>
          <Heading color='#b8860b' marginBottom='20px'>
            Comparte
          </Heading>
        </Center>
      </section>

      <section>
        <Box border='2px' borderColor='#055251' w='100%' p={4} color='white'>
          <Card align='center'>
            <CardHeader>
              <Heading size='md'>Comparte tu proyecto cinematográfico</Heading>
            </CardHeader>
            <CardBody>
              <Text>Tu vida de película.</Text>
            </CardBody>
            <CardFooter>
              <Button
                variant='solid'
                backgroundColor='#055251'
                color='white'
                as={Link}
                to='/nftForm'
              >
                Empezar
              </Button>
            </CardFooter>
          </Card>
          <Card align='center' border='2px' borderColor='#055251'>
            <CardHeader>
              <Heading size='md'>Revisa tus NFTs</Heading>
            </CardHeader>
            <CardFooter>
              <Button
                variant='solid'
                backgroundColor='#055251'
                color='white'
                as={Link}
                to='/nftCollection'
              >
                Ver más
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </section>
    </div>
  );
}
export { Comparte };
