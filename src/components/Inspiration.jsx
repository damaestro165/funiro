import {
  Flex,
  Center,
  Heading,
  Text,
  Button,
  Box,
  Circle,
  Image,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ImageOne from '../assets/image1.jpg';
import ImageTwo from '../assets/image2.jpg';
import ImageThere from '../assets/image3.png';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
function Inspiration() {
  const images = [ImageOne, ImageTwo, ImageThere, ImageThere];
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
    <Flex
      className='flex-col md:flex-row h-auto md:h-[600px] p-2  md:pl-5rem'
      marginTop='2rem'
      bg='#FCF8F3'
      gap={5}
    >
      <Flex
        className='flex-col md:p-[3rem] p-5 w-full md:w-[40%] text-center items-center md:items-start  md:justify-center  md:text-left'
        gap={5}
      >
        <Heading fontSize='4xl' className=''>
          50+ Beautiful rooms inspiration
        </Heading>
        <Text fontWeight='medium'>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </Text>

        <Button
          height='48px'
          width='176px'
          color='white'
          bg='#E89F71'
          className='justify-self-start'
        >
          Explore More
        </Button>
      </Flex>
      <Box className='md:w-[70%] '>
        <Flex align='center' justify='center' w='100%'>
          <Stack
            w='100%'
            align='center'
            justify='center'
            spacing={10}
            position='relative'
          >
            <Circle
              onClick={handleNext}
              children={<ChevronRightIcon boxSize='2rem' color='#E89F71' />}
              size='3.5rem'
              bg='white'
              position='absolute'
              right='0'
            />
            <Flex
              alignItems='center'
              className='w-full md:w-[95%]'
              overflow='hidden'
              gap={5}
              justifyContent='center'
            >
              <Image
                src={images[prevIndex]}
                height={currentIndex === 0 ? '356px' : '486px'}
                className='w-full md:w-[375px]'
                alt='Slider Image'
              />
              <Image
                src={images[currentIndex]}
                height={currentIndex === 1 ? '356px' : '486px'}
                className='w-full md:w-[375px]'
                alt='Slider Image'
              />
              <Image
                src={images[nextIndex]}
                height={currentIndex === 2 ? '356px' : '486px'}
                className='w-full md:w-[375px]'
                alt='Slider Image'
              />
              <Image
                src={images[nextIndex]}
                height={currentIndex === 3 ? '356px' : '486px'}
                className='w-full md:w-[375px]'
                alt='Slider Image'
              />
            </Flex>
            <Center gap='2' width='90%'>
              {images.map((image, index) => (
                <Circle
                  key={index}
                  size='0.75rem'
                  bg={index === currentIndex ? '#E89F71' : '#D8D8D8'}
                  mr={1}
                />
              ))}
            </Center>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Inspiration;
