import { Box, Center, Heading, SimpleGrid, Button } from '@chakra-ui/react';
import React from 'react';
import ProductCard from './ProductCard';
import Productone from '../assets/productone.png';
import Producttwo from '../assets/producttwo.png';
import Productthree from '../assets/productthree.png';
import Productfour from '../assets/productfour.png';
const Products = [
  {
    image: Productone,
    heading: 'Syltherine',
    text: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
  },
  {
    image: Producttwo,
    heading: 'Bohauss',
    text: 'Luxury big sofa 2-seat',
    price: 'Rp 17.000.000',
  },
  {
    image: Productone,
    heading: 'Lolito',
    text: 'Luxury big sofa',
    price: 'Rp 7.000.000',
  },
  {
    image: Producttwo,
    heading: 'Muggo',
    text: 'Small mug',
    price: 'Rp 17.000.000',
  },
  {
    image: Productfour,
    heading: 'Pingky',
    text: 'Cute bed set',
    price: 'Rp 17.000.000',
  },
  {
    image: Productthree,
    heading: 'Grifo',
    text: 'Night lamp',
    price: 'Rp 17.000',
  },
  {
    image: Productfour,
    heading: 'Respira',
    text: 'Minimalist fan',
    price: 'Rp 14.000',
  },
  {
    image: Productthree,
    heading: 'Potty',
    text: 'Minimalist flower pot',
    price: 'Rp 500.00',
  },
];

function ProductsSection() {
  return (
    <Box>
      <Center>
        <Heading as='h3' color='#3A3A3A' className=' text-2xl'>
          Our Products
        </Heading>
      </Center>
      <Center className=' my-5'>
        <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
          {Products.map((data, index) => (
            <ProductCard data={data} key={index} />
          ))}
        </SimpleGrid>
      </Center>
      <Center>
        <Button
          color='#E89F71'
          borderColor='#E89F71'
          borderWidth='thin'
          bg='white'
          px='5rem'
          py='1.5rem'
        >
          Show more
        </Button>
      </Center>
    </Box>
  );
}

export default ProductsSection;
