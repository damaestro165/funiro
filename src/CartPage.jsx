import React from 'react';
import { VStack, HStack, Text, Button, Image, Spacer } from '@chakra-ui/react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartPage = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 9.99,
      image: 'https://via.placeholder.com/150',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
      quantity: 2,
    },
  ];

  const handleDecreaseQuantity = (productId) => {
    // decrease quantity logic
  };

  const handleIncreaseQuantity = (productId) => {
    // increase quantity logic
  };

  const handleRemoveProduct = (productId) => {
    // remove product logic
  };

  return (
    <VStack spacing={4} alignItems='stretch'>
      {products.map((product) => (
        <HStack key={product.id} spacing={4}>
          <Image
            src={product.image}
            alt={product.name}
            boxSize='150px'
            objectFit='contain'
          />
          <VStack alignItems='start'>
            <Text fontSize='xl' fontWeight='bold'>
              {product.name}
            </Text>
            <Text fontSize='md'>Price: ${product.price.toFixed(2)}</Text>
            <HStack>
              <Button
                size='sm'
                variant='outline'
                onClick={() => handleDecreaseQuantity(product.id)}
              >
                <AiOutlineMinus />
              </Button>
              <Text fontSize='md'>{product.quantity}</Text>
              <Button
                size='sm'
                variant='outline'
                onClick={() => handleIncreaseQuantity(product.id)}
              >
                <AiOutlinePlus />
              </Button>
              <Spacer />
              <Button
                size='sm'
                variant='outline'
                onClick={() => handleRemoveProduct(product.id)}
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
