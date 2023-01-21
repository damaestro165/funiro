import {
  Card,
  CardBody,
  Image,
  Text,
  Heading,
  Flex,
  Stack,
  Box,
  Center,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ProductCard = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  function over() {
    setIsVisible(true);
  }
  function out() {
    setIsVisible(false);
  }

  return (
    <Card onMouseOver={over} onMouseOut={out} position='relative'>
      <Image src={data.image} w='245px' h='265px' />
      <CardBody bg='#F4F5F7'>
        <Stack spacing={3}>
          <Heading fontSize='xl'>{data.heading}</Heading>
          <Text color='#898989'>{data.text}</Text>
          <Flex>
            <Text fontSize='xl' fontWeight='bold'>
              {data.price}
            </Text>
          </Flex>
        </Stack>
        <Center
          display={isVisible ? 'block' : 'none'}
          position='absolute'
          w='full'
          h='full'
          backdropFilter='auto'
          backdropBlur='5px'
          backgroundColor='#3A3A3A'
          top='0'
          right='0'
        >
          <Button>Check Out</Button>
        </Center>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
