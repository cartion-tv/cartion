import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Divider,
  Image,
  Stack,
} from '@chakra-ui/react';
const findHelp = () => {
  return (
    <div className='main-body'>
      <section>
        <Card align='center'>
          <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme='blue'>View here</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};
export default findHelp;
