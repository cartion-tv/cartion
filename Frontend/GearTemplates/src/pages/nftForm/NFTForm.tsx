import {
  Card,
  Heading,
  CardFooter,
  Button,
  CardHeader,
  Input,
  Box,
  Center,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import { useState } from 'react';

import { Link } from 'react-router-dom';

function NFTForm() {
  const [value, setValue] = useState('');

  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  // };

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

          <BreadcrumbItem>
            <BreadcrumbLink href='/nftForm'>Ingresar Datos</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </section>
      <section>
        <Center>
          <Heading color='#b8860b' marginBottom='20px'>
            Ingresa tus datos
          </Heading>
        </Center>
      </section>
      <section>
        <Box border='2px' borderColor='#055251' w='100%' p={4} color='white'>
          <Center>
            <Card align='center' w='700px' marginTop='20px'>
              <Text>Nombre del Proyecto:</Text>
              <Input placeholder='Nombre del Proyecto' />
              <Text>Monto requerido para terminar el proyecto:</Text>
              <NumberInput>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text>Descripción del proyecto:</Text>
              <Textarea placeholder='Descripción del proyecto' />
              <Text>Fecha de terminara de la produccion de proyecto:</Text>

              <Input
                placeholder='Fecha de terminara de la produccion de proyecto'
                type='datetime-local'
              />
              <Text>Cuentános más de Ustedes:</Text>
              <Textarea placeholder='Cuentános más de Ustedes' />
              <Text>Cuentános más de anteriores proyectos:</Text>
              <Textarea placeholder='Cuentános más de anteriores proyectos' />
              <Text>Sube tus videos:</Text>
              <Input
                type='file'
                // onChange={handleFileUpload}
                accept='.jpg, .jpeg, .png, .gif'
                placeholder='Imagenes del proyecto'
              />
              <Text>Sube tus imágenes:</Text>
              <Input
                type='file'
                // onChange={handleFileUpload}
                accept='.jpg, .jpeg, .png, .gif'
                placeholder='Videos del proyecto'
              />
              <Text>Sube tu imagen para NFT:</Text>
              <Input
                type='file'
                // onChange={handleFileUpload}
                accept='.jpg, .jpeg, .png, .gif'
                placeholder='Imagen de NFT'
              />
              <Button
                variant='solid'
                backgroundColor='#055251'
                color='white'
                as={Link}
                to='/tuNFT'
                marginTop='20px'
                marginBottom='20px'
              >
                Enviar
              </Button>
            </Card>
          </Center>
        </Box>
      </section>
    </div>
  );
}

export { NFTForm };
