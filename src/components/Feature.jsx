import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Checkbadge from '../assets/checkbadge.svg';
import Headphone from '../assets/headphone.svg';
import Freeshipping from '../assets/freeshipping.svg';
import Trophy from '../assets/trophy.svg';

const FeatureData = [
  { icon: Trophy, heading: 'High Quality', text: 'crafted from top materials' },
  {
    icon: Checkbadge,
    heading: 'Warrany Protection',
    text: 'Over 2 years',
  },
  {
    icon: Freeshipping,
    heading: 'Free Shipping',
    text: 'Order over 150 $',
  },
  {
    icon: Headphone,
    heading: '24 / 7 Support',
    text: 'Dedicated support',
  },
];

function Feature() {
  return (
    <Center className='flex-col md:flex-row  pt-[6rem] mt-5 py-12 md:pt-10 gap-[2rem] md:gap-[5rem] md:m-5'>
      {FeatureData.map((data) => (
        <HStack key={data.text} className='flex justify-center items-center'>
          <Image src={data.icon} width='2rem' />
          <Box gap={5}>
            <Heading fontSize='md'>{data.heading}</Heading>
            <Text fontSize='sm'>{data.text}</Text>
          </Box>
        </HStack>
      ))}
    </Center>
  );
}

export default Feature;
