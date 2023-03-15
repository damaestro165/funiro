import React from 'react';
import { VStack, HStack, Text, Button, Image, Spacer } from '@chakra-ui/react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useSelector } from 'react-redux';

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
    <VStack spacing={4} alignItems='stretch'>
      {products.map((product) => (
        <HStack key={product.headind} spacing={4}>
          <Image
            src={product.image}
            alt={product.heading}
            boxSize='150px'
            objectFit='contain'
          />
          <VStack alignItems='start'>
            <Text fontSize='xl' fontWeight='bold'>
              {product.heading}
            </Text>
            <Text fontSize='md'>Price: ${product.price}</Text>
            <HStack>
              <Button
                size='sm'
                variant='outline'
                onClick={() => handleDecreaseQuantity(product.heading)}
              >
                <AiOutlineMinus />
              </Button>
              <Text fontSize='md'></Text>
              <Button
                size='sm'
                variant='outline'
                onClick={() => handleIncreaseQuantity(product)}
              >
                <AiOutlinePlus />
              </Button>
              <Spacer />
              <Button
                size='sm'
                variant='outline'
                onClick={() => handleRemoveProduct(product)}
              >
                Remove
              </Button>
            </HStack>
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default CartPage;
