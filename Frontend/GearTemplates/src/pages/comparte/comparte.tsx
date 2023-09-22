import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Box,
} from '@chakra-ui/react';

function Comparte() {
  return (
    <div className='main-body'>
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
              <Button variant='solid' backgroundColor='#055251' color='white'>
                Paso 1
              </Button>
            </CardFooter>
          </Card>
          <Card align='center' border='2px' borderColor='#055251'>
            <CardHeader>
              <Heading size='md'>Revisa tus NFTs</Heading>
            </CardHeader>
            <CardFooter>
              <Button variant='solid' backgroundColor='#055251' color='white'>
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
