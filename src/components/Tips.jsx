import { Box, Center, Heading, Circle } from '@chakra-ui/react';
import React, { useState } from 'react';
import Productone from '../assets/showcase.png';
import Producttwo from '../assets/producttwo.png';
import CardTips from './Card';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % Tricks.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + Tricks.length) % Tricks.length);
  };

  const prevIndex = (currentIndex - 1 + Tricks.length) % Tricks.length;
  const nextIndex = (currentIndex + 1) % Tricks.length;

  return (
    <Center flexDir='column' gap='1.5rem' paddingY='2rem' position='relative'>
      <Heading fontSize='4xl'>Tips & Tricks</Heading>
      <Box display='flex' overflowX='hidden' marginX='5rem' gap='2rem' h='full'>
        <Circle
          onClick={handlePrevious}
          children={<ChevronLeftIcon boxSize='2rem' color='#E89F71' />}
          size='3.5rem'
          boxShadow='2xl'
          bg='white'
          position='absolute'
          zIndex='5'
          left='2rem'
          bottom='14rem'
        />
        <Circle
          onClick={handleNext}
          children={<ChevronRightIcon boxSize='2rem' color='#E89F71' />}
          size='3.5rem'
          boxShadow='2xl'
          bg='white'
          position='absolute'
          zIndex='5'
          right='2rem'
          bottom='14rem'
        />
        <CardTips data={Tricks[prevIndex]} />
        <CardTips data={Tricks[currentIndex]} />
        <CardTips data={Tricks[nextIndex]} />
        <CardTips data={Tricks[nextIndex]} />
      </Box>
      <Center gap='2' width='90%' flexDir='row'>
        {Tricks.map((trikck, index) => (
          <Circle
            size='0.75rem'
            key={index}
            bg={index === currentIndex ? '#E89F71' : '#D8D8D8'}
            mr={1}
          />
        ))}
      </Center>
    </Center>
  );
}

export default Tips;
