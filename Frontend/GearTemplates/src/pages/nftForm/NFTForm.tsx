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
              {/* <label>
                Nombre del Proyecto
                <Input type='text' value={value} />
              </label> */}
              <Input placeholder='Nombre del Proyecto' />
              <Input placeholder='Monto requerido para terminar el proyecto' />
              <Input placeholder='Description del proyecto' />
              <Input
                placeholder='Fecha de terminara de la produccion de proyecto'
                type='datetime-local'
              />
              <Input placeholder='Cuentanos mas de Ustedes' />
              <Input placeholder='Cuentanos mas de anteriores proyectos' />
              <Input
                type='file'
                // onChange={handleFileUpload}
                accept='.jpg, .jpeg, .png, .gif'
                placeholder='Imagenes del proyecto'
              />
              <Input
                type='file'
                // onChange={handleFileUpload}
                accept='.jpg, .jpeg, .png, .gif'
                placeholder='Videos del proyecto'
              />
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
