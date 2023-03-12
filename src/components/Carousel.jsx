import React, { useState } from 'react';
import {
  Box,
  Image,
  Stack,
  Flex,
  Button,
  Circle,
  Center,
} from '@chakra-ui/react';
import ImageOne from '../assets/image1.jpg';
import ImageTwo from '../assets/image2.jpg';
import ImageThere from '../assets/image3.png';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function ImageCarousel() {
  const images = [ImageOne, ImageTwo, ImageThere];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;
  return (
    <Box
      className='pt-2 md:pt-[5rem]'
      bgGradient='linear(to-r, #F9F1E7 65%, #FCF8F3 35%)'
    >
      <Flex
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        marginTop='5'
        marginBottom='5'
        px='5rem'
      >
        <Center gap='2' className=' w-2/3 md:w-[90%]'>
          {images.map((image, index) => (
            <Circle
              key={index}
              size='0.75rem'
              bg={index === currentIndex ? '#E89F71' : '#D8D8D8'}
              mr={1}
            />
          ))}
        </Center>
        <Flex gap='2' className=' w-1/3 md:w-[10%]'>
          <Circle
            onClick={handlePrevious}
            children={<ChevronLeftIcon boxSize='2rem' color='white' />}
            size='3.5rem'
            bg='#E89F71'
          />
          <Circle
            onClick={handleNext}
            children={<ChevronRightIcon boxSize='2rem' color='white' />}
            size='3.5rem'
            bg='#E89F71'
          />
        </Flex>
      </Flex>
      <Flex align='center' justify='center' w='100%'>
        <Stack w='100%' align='center' justify='center' spacing={10}>
          <Flex
            alignItems='center'
            w='100%'
            overflow='hidden'
            gap='5'
            justifyContent='center'
          >
            <Image
              w='550px'
              h='500px'
              src={images[prevIndex]}
              alt='Slider Image'
            />
            <Image
              w='550px'
              h='500px'
              src={images[currentIndex]}
              alt='Slider Image'
            />
            <Image
              w='550px'
              h='500px'
              src={images[nextIndex]}
              alt='Slider Image'
            />
            <Image
              w='550px'
              h='500px'
              src={images[nextIndex]}
              alt='Slider Image'
            />
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}

export default ImageCarousel;
