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
import { BsHeart } from 'react-icons/bs';
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
          <Button w='full' color='#E89F71' backgroundColor='white'>
            Check Out
          </Button>
          <HStack spacing={6}>
            <HStack color='white'>
              <Icon as={HiShare} /> <Text>Share</Text>
            </HStack>
            <HStack color='white'>
              <Icon as={BsHeart} />
              <Text>Like</Text>
            </HStack>
          </HStack>
        </Center>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
