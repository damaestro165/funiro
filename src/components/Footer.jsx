import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <Center>
      <Box
        className='flex flex-col md:flex-row '
        spacing='5rem'
        borderTop='2px'
        paddingY='2rem'
        borderTopColor='gray.200'
      >
        <Box>
          <Heading>Funiro.</Heading>
          <Text>
            Worldwide furniture store since 2020. We sell over 1000+ branded
            products on our website
          </Text>
          <Text>Sawojajar Malang, Indonesia</Text>
          <Text>www.funiro.com</Text>
        </Box>
        <Box>
          <Heading>Menu</Heading>
          <Text>Products</Text>
          <Text>Rooms</Text>
          <Text>Inspirations</Text>
          <Text>Terms & Policy</Text>
        </Box>
        <Box>
          <Heading>Account</Heading>
          <Text>My Account</Text>
          <Text>Checkout</Text>
          <Text>My Cart</Text>
          <Text>My catalog</Text>
        </Box>
      </Box>
    </Center>
  );
}

export default Footer;
