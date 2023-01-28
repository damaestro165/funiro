import { Box, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import Productone from '../assets/showcase.png';
import Producttwo from '../assets/producttwo.png';
import CardTips from './Card';

const Tricks = [
  {
    image: Productone,
    text: 'Solution for clean look working space',
    date: '20 jan 2020',
  },
  {
    image: Producttwo,
    text: 'Solution for clean look working space',
    date: '20 jan 2020',
  },
  {
    image: Producttwo,
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
    <Center flexDir='column' gap='1.5rem' paddingY='2rem'>
      <Heading fontSize='4xl'>Tips & Tricks</Heading>
      <Box display='flex' overflow='hidden' marginX='5rem' gap='2rem'>
        {Tricks.map((data) => (
          <CardTips data={data} />
        ))}
      </Box>
    </Center>
  );
}

export default Tips;
