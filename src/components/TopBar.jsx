import React from 'react';
import { removeFromCart } from '../store';
import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Avatar,
  Badge,
} from '@chakra-ui/react';
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons';
import { BsHeart, BsCart2, BsCart } from 'react-icons/bs';

import { useSelector } from 'react-redux';
import Favourite from './Favourite';
import { Link } from 'react-router-dom';

function TopBar() {
  const { products, liked } = useSelector(({ cart, favourite }) => {
    return {
      products: cart.products,
      liked: favourite.like,
    };
  });
  const handleClick = (data) => {
    console.log(data);
    removeFromCart(data);
  };

  const isActive = products.length === 0 ? false : true;
  const isLiked = liked.length === 0 ? false : true;

  return (
    <Box
      className=' items-center justify-center gap-[2rem] hidden lg:flex-row lg:flex h-[5rem] '
      bgGradient='linear(to-r, #F9F1E7 65%, #FCF8F3 35%)'
    >
      <Heading className='font-bold'>Funiro.</Heading>
      <Menu isLazy>
        <MenuButton>
          Products <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Menu>
      <Menu isLazy>
        <MenuButton>
          Rooms <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Menu>
      <Text>Inspirations</Text>
      <InputGroup w='473px'>
        <InputLeftElement children={<Search2Icon />} />
        <Input
          type='text'
          placeholder='search for minimalist chair'
          background='white'
          variant='unstyled'
          h='45px'
        />
      </InputGroup>
      <Flex gap={5} alignItems='center' ml='16'>
        <Favourite items={liked} handleClick={handleClick}>
          {isLiked ? (
            <Badge
              colorScheme='red'
              borderRadius='10rem'
              position='absolute'
              top='-.6rem'
              left='0.5rem'
            >
              {products.length}
            </Badge>
          ) : null}
          <Icon as={BsHeart} />
        </Favourite>
        <Link to='/cart'>
          <Icon as={BsCart} />
        </Link>

        <Avatar />
      </Flex>
    </Box>
  );
}

export default TopBar;
