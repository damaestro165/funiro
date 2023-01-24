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
    <Flex
      flexDirection='row'
      marginTop='2rem'
      bg='#FCF8F3'
      height='600px'
      gap={5}
      paddingLeft='5rem'
    >
      <Center flexDirection='column' gap={5} p='2rem' width='40%'>
        <Heading>50+ Beautiful rooms inspiration</Heading>
        <Text>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </Text>
        <Button>Explore More</Button>
      </Center>
      <Box width='60%'>
        <Flex
          justifyContent='space-between'
          alignItems='center'
          width='100%'
          marginTop='5'
          marginBottom='5'
          px='5rem'
        >
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
          <Flex width='10%' gap='2'>
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
                w='800px'
                h='500px'
                src={images[prevIndex]}
                alt='Slider Image'
              />
              <Image
                w='800px'
                h='500px'
                src={images[currentIndex]}
                alt='Slider Image'
              />
              <Image
                w='800px'
                h='500px'
                src={images[nextIndex]}
                alt='Slider Image'
              />
              <Image
                w='800px'
                h='500px'
                src={images[nextIndex]}
                alt='Slider Image'
              />
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Inspiration;
