import React from 'react';

import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue as mode,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import { CartOrderSummary } from './components/CartOrderSummary';
import CartItems from './components/CartItems';
import { useSelector } from 'react-redux';
import { FaOpencart } from 'react-icons/fa';

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);
  const isCartEmpty = products.length === 0 ? false : true;
  const subTotal = products.reduce((acc, product) => acc + product.price, 0);
  return (
    <Box
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx='auto'
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex='2'
        >
          <Heading fontSize='2xl' fontWeight='extrabold'>
            Shopping Cart
          </Heading>

          {isCartEmpty ? (
            <Box className='md:h-[27rem]  overflow-x-scroll'>
              <CartItems products={products} />
            </Box>
          ) : (
            <Flex className='items-center justify-center flex-col'>
              <Icon as={FaOpencart} w={250} h={250} color='#E89F71' />
              <Text fontSize='2xl' fontWeight='bold'>
                Your Cart Is Currently Empty!
              </Text>
            </Flex>
          )}
        </Stack>
        <Flex direction='column' align='center' flex='1'>
          <CartOrderSummary subTotal={subTotal} />
          <HStack mt='6' fontWeight='semibold'>
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')} href='/'>
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default CartPage;
