import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromFavourite } from '../store';

function Favourite({ children, items }) {
  const productInCart = items.length === 0 ? false : true;
  const dispatch = useDispatch();

  const handleRemoveFavourite = (data) => {
    dispatch(removeFromFavourite(data));
  };

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };
  return (
    <Popover closeOnBlur={false}>
      <PopoverTrigger>
        <Box position='relative'>{children}</Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverHeader fontWeight='semibold'>Cart</PopoverHeader>
          <PopoverCloseButton />
          {productInCart ? (
            <PopoverBody>
              {items.map((product) => (
                <Flex
                  key={product.heading}
                  mb={2}
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <HStack>
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
                  </HStack>
                  <Flex flexDirection='column' gap={2}>
                    <Button
                      fontSize='sm'
                      variant='link'
                      color='orange.300'
                      onClick={() => handleAddToCart(product)}
                    >
                      Add To Cart
                    </Button>
                    <Button
                      fontSize='sm'
                      variant='link'
                      color='red'
                      onClick={() => handleRemoveFavourite(product)}
                    >
                      Remove
                    </Button>
                  </Flex>
                </Flex>
              ))}
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

export default Favourite;
