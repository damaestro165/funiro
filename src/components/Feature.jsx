import { Box, Center, Heading, Image, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import Checkbadge from '../assets/checkbadge.svg';
import Headphone from '../assets/headphone.svg';
import Freeshipping from '../assets/freeshipping.svg';
import Trophy from '../assets/trophy.svg';

const FeatureData = [
  { icon: Trophy, heading: 'High Quality', text: 'crafted from top materials' },
  {
    icon: Checkbadge,
    heading: 'Warranty Protection',
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
    <Center className='flex-col lg:flex-row  mt-5 py-12 md:pt-10 gap-[2rem]  lg:gap-[5rem] md:m-5 w-full'>
      {FeatureData.map((data) => (
        <Box
          key={data.text}
          className='flex justify-center md:flex-row  flex-col items-center text-center gap-2 md:text-start'
        >
          <Image src={data.icon} width='2rem' />
          <Box gap={5} className=' '>
            <Heading fontSize='md'>{data.heading}</Heading>
            <Text fontSize='sm'>{data.text}</Text>
          </Box>
        </Box>
      ))}
    </Center>
  );
}

export default Feature;
