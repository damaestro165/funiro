import { Box, Center, Heading, Circle } from '@chakra-ui/react';
import React, { useState } from 'react';
import Productone from '../assets/showcase.png';
import Producttwo from '../assets/producttwo.png';
import Tipso from '../assets/tipso.png';
import Tipsa from '../assets/tipsa.png';
import CardTips from './Card';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Tricks = [
  {
    image: Productone,
    text: 'Solution for clean look working space',
    date: '20 jan 2020',
  },
  {
    image: Producttwo,
    text: 'How to create a living room to love',
    date: '20 jan 2020',
  },
  {
    image: Tipsa,
    text: 'Make your cooking activity more fun with good setup',
    date: '20 jan 2020',
  },
  {
    image: Tipso,
    text: 'Solution for clean look working space and more ...',
    date: '20 jan 2020',
  },
];

function Tips() {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((currentIndex + 1) % Tricks.length);
  // };

  // const handlePrevious = () => {
  //   setCurrentIndex((currentIndex - 1 + Tricks.length) % Tricks.length);
  // };

  // const prevIndex = (currentIndex - 1 + Tricks.length) % Tricks.length;
  // const nextIndex = (currentIndex + 1) % Tricks.length;

  return (
    <Center flexDir='column' gap='1.5rem' paddingY='2rem' position='relative'>
      <Heading color='#3A3A3A' fontSize='3xl' my='5'>
        Tips & Tricks
      </Heading>
      <Box className='flex md:px-[5rem] w-[70%] md:w-[80%] h-full'>
        {/* <Circle
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
        /> */}
        <Splide
          options={{
            rewind: true,
            gap: '2rem',
            focus: 'center',
            perPage: 3,

            breakpoints: {
              750: {
                perPage: 1,
                gap: '0rem',
                padding: '0.2rem',
                width: '100%',
              },
            },
          }}
        >
          {Tricks.map((trick) => (
            <SplideSlide key={trick.text}>
              <CardTips data={trick} />
            </SplideSlide>
          ))}
        </Splide>
      </Box>
      {/* <Center gap='2' width='90%' flexDir='row'>
        {Tricks.map((trikck, index) => (
          <Circle
            size='0.75rem'
            key={index}
            bg={index === currentIndex ? '#E89F71' : '#D8D8D8'}
            mr={1}
          />
        ))}
      </Center> */}
    </Center>
  );
}

export default Tips;
