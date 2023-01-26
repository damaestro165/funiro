import { Box, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import ProductCard from './ProductCard';
import Productone from '../assets/productone.png';
import Producttwo from '../assets/producttwo.png';
import CardTips from './Card';

const Tricks = [
  {
    image: Productone,
    text: 'Solution for clean look working space',
    date: '20 jan 2020',
  },
  {
    image: Productone,
    text: 'Solution for clean look working space',
    date: '20 jan 2020',
  },
  {
    image: Productone,
    text: 'Solution for clean look working space',
    date: '20 jan 2020',
  },
  {
    image: Productone,
    text: 'Solution for clean look working space',
    date: '20 jan 2020',
  },
];

function Tips() {
  return (
    <Center>
      <Heading>Tips & Tricks</Heading>
      <Box>
        {Tricks.map((data) => (
          <CardTips data={data} />
        ))}
      </Box>
    </Center>
  );
}

export default Tips;
