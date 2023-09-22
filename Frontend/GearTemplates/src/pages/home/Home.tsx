import './home.css';
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

import uneteLogo from '../../assets/images/manos_cuadrito.jpg';
import comparteLogo from '../../assets/images/subir_cuadrito.jpg';

function Home() {
  return (
    <div className='main-body'>
      <section>
        <Box border='2px' borderColor='#055251' w='100%' p={4} color='white'>
          <Card align='center'>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              w='700px'
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={uneteLogo}
                alt='Unete'
              />
              <Stack>
                <CardBody>
                  <Heading size='md'>
                    Únete a un proyecto cinematográfico
                  </Heading>
                </CardBody>
                <CardFooter>
                  <Button
                    variant='solid'
                    backgroundColor='#055251'
                    color='white'
                  >
                    Ver más
                  </Button>
                </CardFooter>
              </Stack>
            </Card>

            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              w='700px'
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={comparteLogo}
                alt='Comparte'
              />

              <Stack>
                <CardBody>
                  <Heading size='md'>
                    Comparte tu proyecto cinematográfico
                  </Heading>
                </CardBody>
                <CardFooter>
                  <Button
                    variant='solid'
                    backgroundColor='#055251'
                    color='white'
                  >
                    Ver más
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </Card>
        </Box>
      </section>
    </div>
  );
}

export { Home };
