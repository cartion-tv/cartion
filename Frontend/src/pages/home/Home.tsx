import './home.css';
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Center,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  AspectRatio,
  Divider,
  Box,
  Image,
  Badge,
  Stack,
} from '@chakra-ui/react';

function Home() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

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
      <Divider />
      <section>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={property.imageUrl} alt={property.imageAlt} />

          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {property.title}
            </Box>

            <Box>
              {property.formattedPrice}
              <Box as='span' color='gray.600' fontSize='sm'>
                / wk
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
      <Divider />
      <section>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>The perfect latte</Heading>

              <Text py='2'>
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </section>
    </div>
  );
}

export { Home };
