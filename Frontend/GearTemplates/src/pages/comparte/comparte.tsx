import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react';
const Comparte = () => {
  return (
    <div className='main-body'>
      <section>
        <Card align='center'>
          <CardHeader>
            <Heading size='md'>Comparte tu proyecto cinematográfico</Heading>
          </CardHeader>
          <CardBody>
            <Text>Tu vida de película.</Text>
          </CardBody>
          <CardFooter>
            <Button backgroundColor='#055251'>Paso 1</Button>
          </CardFooter>
        </Card>
      </section>
      <section>
        <Card align='center'>
          <CardHeader>
            <Heading size='md'>Revisa tus NFTs</Heading>
          </CardHeader>
          <CardFooter>
            <Button backgroundColor='#055251'>Ir</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};
export default Comparte;
