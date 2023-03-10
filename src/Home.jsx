import React from 'react';
import TopBar from './components/TopBar';
import {
  Box,
  Button,
  Heading,
  VStack,
  Text,
  Icon,
  Flex,
} from '@chakra-ui/react';
import ImageCarousel from './components/Carousel';
import { BsArrowRightShort } from 'react-icons/bs';
import Feature from './components/Feature';
import ProductsSection from './components/ProductsSection';
import Inspiration from './components/Inspiration';
import Tips from './components/Tips';

function Home() {
  return (
    <Box className='relative w-full overflow-hidden'>
      <ImageCarousel />
      <VStack
        className=' absolute w-[20rem] md:w-[450px] md:p-12 p-5 top-28 left-12 md:left-20'
        position='absolute'
        backdropFilter='auto'
        backdropBlur='6px'
        backgroundColor='#FFFFFFB8'
        spacing={10}
      >
        <Heading className='text-md md:text-5xl font-extrabold text-[#3A3A3A] leading-10 md:leading-[4rem]'>
          High-Quality Furniture Just For You
        </Heading>

        <Text className=' md:text-xl md:font-semibold color-[#898989]'>
          Our furniture is made from selected and best quality materials that
          are suitable for your dream home
        </Text>

        <Button
          backgroundColor='#E89F71'
          color='white'
          fontSize='xl'
          fontWeight='light'
          h='78px'
          w='full'
        >
          Shop Now
        </Button>
      </VStack>
      <Flex
        position='absolute'
        p='2rem'
        bottom='4rem'
        right='5rem'
        backdropFilter='auto'
        backdropBlur='6px'
        backgroundColor='#FFFFFFB8'
        w='294px'
        flexDirection='column'
        gap={2}
      >
        <Heading fontSize='2xl'>Bohauss</Heading>
        <Text>Luxury big sofa 2-seat</Text>
        <Flex gap={5}>
          <Text w='90%' fontSize='2xl' fontWeight='bold'>
            Rp 17.000.000
          </Text>
          <Icon as={BsArrowRightShort} boxSize={8} />
        </Flex>
      </Flex>
      <Feature />
      <ProductsSection />
      <Inspiration />
      <Tips />
    </Box>
  );
}

export default Home;
