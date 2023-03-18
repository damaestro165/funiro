import {
  Card,
  CardBody,
  Image,
  Text,
  Heading,
  Flex,
  Stack,
  Center,
  Button,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { HiShare } from 'react-icons/hi';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';

import {
  addToCart,
  addToFavourite,
  removeFromCart,
  removeFromFavourite,
} from '../store';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const { products, liked } = useSelector(({ cart, favourite }) => {
    return {
      products: cart.products,
      liked: favourite.like,
    };
  });
  const [isInCart, setIsInCart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find(
      (product) => product.heading === data.heading
    );
    const productIsLiked = liked.find(
      (product) => product.heading === data.heading
    );

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }

    if (productIsLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [products, data.heading, liked]);

  const handleClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(data));
    } else {
      dispatch(addToCart(data));
    }
  };

  const handleLiked = () => {
    if (isLiked) {
      dispatch(removeFromFavourite(data));
    } else {
      dispatch(addToFavourite(data));
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  function over() {
    setIsVisible(true);
  }
  function out() {
    setIsVisible(false);
  }

  return (
    <Card onMouseOver={over} onMouseOut={out} variant='outline'>
      <Image src={data.image} w='245px' h='265px' className=' object-cover' />
      <CardBody bg='#F4F5F7'>
        <Stack spacing={3}>
          <Heading fontSize='xl'>{data.heading}</Heading>
          <Text color='#898989'>{data.text}</Text>
          <Flex>
            <Text fontSize='xl' fontWeight='bold'>
              ${data.price}
            </Text>
          </Flex>
        </Stack>
        <Center
          display={isVisible ? 'flex' : 'none'}
          position='absolute'
          w='full'
          h='full'
          bg='blackAlpha.500'
          top='0'
          right='0'
          px='2rem'
          flexDir='column'
          gap={5}
        >
          <Button
            w='full'
            color='#E89F71'
            backgroundColor='white'
            onClick={handleClick}
          >
            {isInCart ? 'Remove From Cart' : ' Add to Cart'}
          </Button>
          <HStack spacing={6}>
            <HStack color='white'>
              <Icon as={HiShare} /> <Text>Share</Text>
            </HStack>
            <HStack color='white'>
              <Button
                variant='unstyled'
                onClick={handleLiked}
                display='flex'
                gap={2}
              >
                {!isLiked ? (
                  <Icon as={BsHeart} />
                ) : (
                  <Icon as={BsHeartFill} color='orange.300' />
                )}
                <Text>Like</Text>
              </Button>
            </HStack>
          </HStack>
        </Center>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
