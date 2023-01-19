import TopBar from './components/TopBar';
import { Box, Button, Heading, VStack, Text, Spacer } from '@chakra-ui/react';
import ImageCarousel from './components/Carousel';

function App() {
  return (
    <Box
      width='100%'
      h='774px'
      py='2rem'
      bgGradient='linear(to-r, #F9F1E7 65%, #FCF8F3 35%)'
      position='relative'
    >
      <TopBar />
      <ImageCarousel />
      <VStack
        position='absolute'
        width='494px'
        p='3rem'
        top='7rem'
        left='5rem'
        backdropFilter='auto'
        backdropBlur='6px'
        backgroundColor='#FFFFFFB8'
        spacing={10}
      >
        <Heading fontSize='6xl' fontWeight='900' color='#3A3A3A'>
          High-Quality Furniture Just For You
        </Heading>

        <Text fontSize='xl' color='#898989' fontWeight='medium'>
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
    </Box>
  );
}

export default App;
