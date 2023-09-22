import {
  Card,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Image,
  Stack,
  Center,
  CardHeader,
  Divider,
  Box,
} from '@chakra-ui/react';

function NFTForm() {
  return (
    <div className='main-body'>
      <section>
        <Box bg='#055251' w='100%' p={4} color='white'>
          <Card align='center'>
            <CardHeader>
              <Heading size='md'>Únete a un proyecto cinematográfico</Heading>
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

export { NFTForm };
