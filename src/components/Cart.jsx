import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useCart } from '../CartContext';

function Cart({ children, products }) {
  const productInCart = products.length === 0 ? false : true;
  const initRef = React.useRef();
  const { removeFromCart } = useCart();

  const handleClick = (data) => {
    removeFromCart(data);
  };

  return (
    <Popover closeOnBlur={false} initialFocusRef={initRef}>
      <PopoverTrigger>
        <Box position='relative'>{children}</Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverHeader fontWeight='semibold'>Items</PopoverHeader>
          <PopoverCloseButton />
          {productInCart ? (
            <PopoverBody>
              {products.map((product) => (
                <HStack key={product.heading} mb={2}>
                  <Image
                    src={product.image}
                    width='5rem'
                    h='4rem'
                    border='4px'
                    p={0.5}
                    borderRadius='md'
                    borderColor='#E89F71'
                  />
                  <Flex flexDirection='column' gap={2}>
                    <Text fontSize='sm' fontWeight='extrabold'>
                      {product.heading}
                    </Text>
                    <Text fontWeight='extrabold' fontSize='sm'>
                      {product.price}
                    </Text>
                  </Flex>
                  <Flex flexDirection='column' gap={2}>
                    <Button fontSize='sm' variant='link' color='orange.300'>
                      Check Out
                    </Button>
                    <Button
                      fontSize='sm'
                      variant='link'
                      color='red'
                      onClick={() => handleClick(product)}
                    >
                      Deletes
                    </Button>
                  </Flex>
                </HStack>
              ))}
              <Button colorScheme='teal'>Check Out All</Button>
            </PopoverBody>
          ) : (
            <PopoverBody>
              <Center>
                <Text>Empty Cart</Text>
              </Center>
            </PopoverBody>
          )}
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default Cart;
