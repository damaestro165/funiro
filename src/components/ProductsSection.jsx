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
    heading: 'Bohauss',
    text: 'Luxury big sofa 2-seat',
    price: 'Rp 17.000.000',
  },
  {
    image: Producttwo,
    heading: 'Bohauss',
    text: 'Luxury big sofa 2-seat',
    price: 'Rp 17.000.000',
  },
  {
    image: Productone,
    heading: 'Bohauss',
    text: 'Luxury big sofa 2-seat',
    price: 'Rp 17.000.000',
  },
  {
    image: Producttwo,
    heading: 'Bohauss',
    text: 'Luxury big sofa 2-seat',
    price: 'Rp 17.000.000',
  },
  {
    image: Productfour,
    heading: 'Bohauss',
    text: 'Luxury big sofa 2-seat',
    price: 'Rp 17.000.000',
  },
  {
    image: Productthree,
    heading: 'Bohauss',
    text: 'Luxury big sofa 2-seat',
    price: 'Rp 17.000.000',
  },
  {
    image: Productfour,
    heading: 'Bohauss',
    text: 'Luxury big sofa 2-seat',
    price: 'Rp 17.000.000',
  },
  {
    image: Productthree,
    heading: 'Bohauss',
    text: 'Luxury big sofa 2-seat',
    price: 'Rp 17.000.000',
  },
];

function ProductsSection() {
  return (
    <Box>
      <Center>
        <Heading as='h3' fontSize='2xl' color='#3A3A3A'>
          Our Products
        </Heading>
      </Center>
      <Center my='1.5rem'>
        <SimpleGrid columns={4} spacing={10}>
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
