import {
  Card,
  Heading,
  CardFooter,
  Button,
  CardHeader,
  Input,
  Box,
  Center,
} from '@chakra-ui/react';

import { useState } from 'react';

function NFTForm() {
  const [value, setValue] = useState('');

  return (
    <div className='main-body'>
      <section>
        <Box border='2px' borderColor='#055251' w='100%' p={4} color='white'>
          <Center>
            <Card align='center' w='700px'>
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
              <Input placeholder='Imagenes del proyecto' />
              <Input placeholder='Videos del proyecto' />
              <Input placeholder='Imagen de NFT' />
            </Card>
          </Center>
        </Box>
      </section>
    </div>
  );
}

export { NFTForm };
