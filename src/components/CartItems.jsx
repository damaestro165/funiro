import React from 'react';
import { removeFromCart } from '../store';
import { FaTimes } from 'react-icons/fa';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {
  Box,
  Flex,
  Stack,
  useColorModeValue as mode,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { increaseInCart, decreaseInCart } from '../store/slices/cartSlice';

function CartItems({ products }) {
  const dispatch = useDispatch();
  const handleDecreaseQuantity = (product) => {
    // decrease quantity logic
    dispatch(decreaseInCart(product));
  };

  const handleIncreaseQuantity = (product) => {
    // increase quantity logic
    dispatch(increaseInCart(product));
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <Stack spacing='6'>
      {products.map((product) => (
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify='space-between'
          align='center'
          key={product.id}
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
              <Stack spacing='0.5' className='flex  justify-center h-full'>
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
                onClick={() => handleDecreaseQuantity(product)}
              >
                <AiOutlineMinus />
              </Button>
              <Text>{product.quantity}</Text>
              <Button
                size='sm'
                variant='outline'
                onClick={() => handleIncreaseQuantity(product)}
              >
                <AiOutlinePlus />
              </Button>
            </Box>
            <Text fontSize='md' fontWeight='bold'>
              ${Number(product.price.toFixed(2))}
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
  );
}

export default CartItems;
