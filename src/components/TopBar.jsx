import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
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
import { BsHeart, BsCart2 } from 'react-icons/bs';
import { useCart } from '../CartContext';

function TopBar() {
  const { products } = useCart();
  return (
    <Flex alignItems='center' justifyContent='center' gap='2rem'>
      <Heading fontSize='2xl'>Funiro.</Heading>
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
        <Icon as={BsHeart} />

        <Box>
          <Badge colorScheme='red' borderRadius='10rem'>
            {' '}
            {products.length}{' '}
          </Badge>
          <Icon as={BsCart2} />
        </Box>

        <Avatar />
      </Flex>
    </Flex>
  );
}

export default TopBar;
