import React from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue as mode,
  HStack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { CartOrderSummary } from './components/CartOrderSummary';
import { FaTimes } from 'react-icons/fa';

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);

  const handleDecreaseQuantity = (product) => {
    // decrease quantity logic
  };

  const handleIncreaseQuantity = (product) => {
    // increase quantity logic
  };

  const handleRemoveProduct = (product) => {
    // remove product logic
  };

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
          <Stack spacing='6'>
            {products.map((product) => (
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify='space-between'
                align='center'
                key={product.headind}
                gap={5}
              >
                <Stack direction='row' spacing='5' width='full'>
                  <Image
                    src={product.image}
                    alt={product.heading}
                    boxSize='150px'
                    rounded='lg'
                    width='120px'
                    height='120px'
                    fit='cover'
                    draggable='false'
                    loading='lazy'
                  />
                  <Box>
                    <Stack
                      spacing='0.5'
                      className='flex  justify-center h-full'
                    >
                      <Text fontWeight='bold'>{product.heading}</Text>
                      <Text color={mode('gray.600', 'gray.400')} fontSize='sm'>
                        {product.text}
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
                <Flex
                  width='full'
                  justify='space-between'
                  display={{ base: 'flex', md: 'flex' }}
                >
                  <Box className='flex gap-4'>
                    <Button
                      size='sm'
                      variant='outline'
                      onClick={() => handleDecreaseQuantity(product.heading)}
                    >
                      <AiOutlineMinus />
                    </Button>
                    <Text>1</Text>
                    <Button
                      size='sm'
                      x
                      variant='outline'
                      onClick={() => handleIncreaseQuantity(product)}
                    >
                      <AiOutlinePlus />
                    </Button>
                  </Box>
                  <Text fontSize='md' fontWeight='bold'>
                    Price: {product.price}
                  </Text>
                  <Button
                    size='sm'
                    variant='unstlyed'
                    onClick={() => handleRemoveProduct(product)}
                  >
                    <FaTimes />
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Stack>
        </Stack>
        <Flex direction='column' align='center' flex='1'>
          <CartOrderSummary />
          <HStack mt='6' fontWeight='semibold'>
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default CartPage;
