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
import Footer from './components/Footer';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Box>
        <Box
          width='100%'
          h='700px'
          py='2rem'
          bgGradient='linear(to-r, #F9F1E7 65%, #FCF8F3 35%)'
          position='relative'
        >
          <TopBar />
          <ImageCarousel />
          <VStack
            position='absolute'
            width='450px'
            p='3rem'
            top='7rem'
            left='5rem'
            backdropFilter='auto'
            backdropBlur='6px'
            backgroundColor='#FFFFFFB8'
            spacing={10}
          >
            <Heading
              fontSize='5xl'
              fontWeight='extrabold'
              color='#3A3A3A'
              lineHeight='4rem'
            >
              High-Quality Furniture Just For You
            </Heading>

            <Text fontSize='xl' color='#898989' fontWeight='medium'>
              Our furniture is made from selected and best quality materials
              that are suitable for your dream home
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
        </Box>
        <Feature />
        <ProductsSection />
        <Inspiration />
        <Tips />

        <Footer />
      </Box>
    </CartProvider>
  );
}

export default App;
