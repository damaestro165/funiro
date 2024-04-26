import { Box, Center, Heading, SimpleGrid, Button } from '@chakra-ui/react';
import React from 'react';
import ProductCard from './ProductCard';
import Productone from '../assets/productone.png';
import Producttwo from '../assets/producttwo.png';
import Productthree from '../assets/productthree.png';
import Productfour from '../assets/productfour.png';
import Mug from '../assets/mug.png';
import lamp from '../assets/lamp.png';
import vast from '../assets/vast.png';
import Chair from '../assets/chair.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Products = [
  {
    image: Productone,
    heading: 'Syltherine',
    text: 'Stylish cafe chair',
    price: 650.99,
  },
  {
    image: Producttwo,
    heading: 'Bohauss',
    text: 'Luxury big sofa 2-seat',
    price: 600.99,
  },
  {
    image: lamp,
    heading: 'Lolito',
    text: 'Luxury big sofa',
    price: 450.99,
  },
  {
    image: Mug,
    heading: 'Muggo',
    text: 'Small mug',
    price: 500.99,
  },
  {
    image: Productthree,
    heading: 'Pingky',
    text: 'Cute bed set',
    price: 650.99,
  },
  {
    image: vast,
    heading: 'Grifo',
    text: 'Night lamp',
    price: 430.99,
  },
  {
    image: Productfour,
    heading: 'Respira',
    text: 'Minimalist fan',
    price: 559.99,
  },
  {
    image: Chair,
    heading: 'Potty',
    text: 'Minimalist flower pot',
    price: 500.0,
  },
];

function ProductsSection() {
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#productCard', {
      scrollTrigger:{
        trigger: '#productBox',
        start: 'top center',
        end: 'top top',
        toggleActions: 'restart pause play restart',
        scrub: true,
      },
      opacity: 1,
      duration: 3,
      ease: 'power2.inOut',
      stagger: 0.5,
    })
  })
  return (
    <Box id="productBox">
      <Center>
        <Heading color='#3A3A3A' fontSize='3xl' my='5'>
          Our Products
        </Heading>
      </Center>
      <Center className=' my-5'>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
          {Products.map((data, index) => (
            <ProductCard id='productCard'  data={data} key={index} />
          ))}
        </SimpleGrid>
      </Center>
      <Center>
        <Button
          color='#E89F71'
          borderColor='#E89F71'
          borderWidth='thin'
          bg='white'
          px='5rem'
          py='1.5rem'
        >
          Show more
        </Button>
      </Center>
    </Box>
  );
}

export default ProductsSection;
