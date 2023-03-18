import React, { useEffect } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';

function TopBar() {
  const { products, liked } = useSelector(({ cart, favourite }) => {
    return {
      products: cart.products,
      liked: favourite.like,
    };
  });

  const isActive = products.length === 0 ? false : true;
  const isLiked = liked.length === 0 ? false : true;

  const user = useSelector((state) => state.user.user);

  return (
    <Box
      className=' items-center justify-evenly hidden lg:flex-row lg:flex h-[5rem] '
      bgGradient='linear(to-r, #F9F1E7 65%, #FCF8F3 35%)'
    >
      <Link to='/'>
        <Heading className='font-bold' fontSize='3xl'>
          Funiro.
        </Heading>
      </Link>
      <Menu isLazy>
        <MenuButton>
          Products <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Chairs</MenuItem>
          <MenuItem>Mugs</MenuItem>
        </MenuList>
      </Menu>
      <Menu isLazy>
        <MenuButton>
          Rooms <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Bed Room</MenuItem>
          <MenuItem>Sitting Room</MenuItem>
        </MenuList>
      </Menu>
      <Text>Inspirations</Text>
      <InputGroup w={{ base: '15rem', xl: '35rem' }}>
        <InputLeftElement children={<Search2Icon />} />
        <Input
          type='text'
          placeholder='search for minimalist chair'
          background='white'
          variant='unstyled'
          h='45px'
          w={{ base: '15rem', xl: '35rem' }}
        />
      </InputGroup>
      <Flex gap={5} alignItems='center' ml='16'>
        <Favourite items={liked}>
          {isLiked ? (
            <Badge
              colorScheme='red'
              borderRadius='10rem'
              position='absolute'
              top='-.6rem'
              left='0.5rem'
            >
              {liked.length}
            </Badge>
          ) : null}
          <Icon as={BsHeart} />
        </Favourite>

        <Box className='relative'>
          {isActive && (
            <Badge
              colorScheme='red'
              borderRadius='10rem'
              position='absolute'
              top='-.6rem'
              left='0.5rem'
            >
              {products.length}
            </Badge>
          )}
          <Link to='/cart'>
            <Icon as={BsCart} />
          </Link>
        </Box>

        {user === null ? (
          <Link to='/login'>
            <Avatar />
          </Link>
        ) : (
          <Avatar name={user.email} src={user?.photoURL} />
        )}
      </Flex>
    </Box>
  );
}

export default TopBar;
