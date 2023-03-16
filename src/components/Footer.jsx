import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <Box className='p-5  flex flex-col md:flex-rol justify-evenly gap-4 md:gap-0'>
      <Box className='flex flex-col gap-4 md:w-1/5'>
        <Heading fontSize='xl'>Funiro.</Heading>
        <Text>
          Worldwide furniture store since 2020. We sell over 1000+ branded
          products on our website
        </Text>
        <Text>Sawojajar Malang, Indonesia</Text>

        <Text>+6289 456 3455</Text>
        <Text>www.funiro.com</Text>
      </Box>
      <Box className='flex flex-col gap-4 '>
        <Heading fontSize='xl'>Menu</Heading>
        <Text>Products</Text>
        <Text>Rooms</Text>
        <Text>Inspirations</Text>
        <Text>Terms & Policy</Text>
      </Box>
      <Box className='flex flex-col gap-4 '>
        <Heading fontSize='xl'>Account</Heading>
        <Text>My Account</Text>
        <Text>Checkout</Text>
        <Text>My Cart</Text>
        <Text>My catalog</Text>
      </Box>
      <Box className='flex flex-col gap-4 '>
        <Heading fontSize='xl'>Stay Connected</Heading>
        <Text>My Account</Text>
        <Text>Checkout</Text>
      </Box>
      <Box className='flex flex-col gap-4 '>
        <Heading fontSize='xl'>Stay Updated</Heading>
        <Text>My Account</Text>
      </Box>
    </Box>
  );
}

export default Footer;
