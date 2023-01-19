import React, { useState } from 'react';
import { Box, Image, Stack, Flex, Button, Circle } from '@chakra-ui/react';
import ImageOne from '../assets/image1.jpg';
import ImageTwo from '../assets/image2.jpg';
import ImageThere from '../assets/image3.png';

function ImageCarousel() {
  const images = [ImageOne, ImageTwo, ImageThere, ImageThere];
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;
  return (
    <Box marginTop='2rem'>
      <Flex justifyContent='space-between' alignItems='center' width='100%'>
        <Flex alignItems='center' justifyContent='center' gap='2' width='90%'>
          {images.map((image, index) => (
            <Circle
              key={index}
              size='8px'
              bg={index === currentIndex ? '#E89F71' : '#D8D8D8'}
              outlineOffset='5rem'
              outlineColor={'#E89F71'}
              mr={1}
            />
          ))}
        </Flex>
        <Box>
          <Button onClick={handlePrevious}>Previous</Button>
          <Button onClick={handleNext}>Next</Button>
        </Box>
      </Flex>
      <Flex align='center' justify='center' w='100%' h='553px'>
        <Stack w='100%' align='center' justify='center' spacing={10}>
          <Flex
            alignItems='center'
            w='100%'
            overflow='hidden'
            gap='5'
            justifyContent='center'
          >
            <Image
              w='884px'
              h='553px'
              src={images[prevIndex]}
              alt='Slider Image'
            />
            <Image
              w='884px'
              h='553px'
              src={images[currentIndex]}
              alt='Slider Image'
            />
            <Image
              w='884px'
              h='553px'
              src={images[nextIndex]}
              alt='Slider Image'
            />
            <Image
              w='884px'
              h='553px'
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
