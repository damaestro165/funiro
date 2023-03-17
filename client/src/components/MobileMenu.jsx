import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  IconButton,
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

import { ChevronDownIcon, HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import { BsHeart, BsCart2 } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import Favourite from './Favourite';
import { Link } from 'react-router-dom';

function MobileMenu() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { products, liked } = useSelector(({ cart, favourite }) => {
    return {
      products: cart.products,
      liked: favourite.like,
    };
  });
  const handleClick = (data) => {
    dispatch(removeFromCart(data));
  };

  const isActive = products.length === 0 ? false : true;

  const isLiked = liked.length === 0 ? false : true;

  return (
    <Box
      className='lg:hidden flex justify-between w-full py-2 px-4 '
      bgGradient='linear(to-r, #F9F1E7 65%, #FCF8F3 35%)'
    >
      <Link to='/'>
        <Heading>Funiro.</Heading>
      </Link>
      <Button
        ref={btnRef}
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon w={7} h={7} />}
        variant='unstyled'
        color='#E89F71'
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody className='flex flex-col my-[5rem] w-full h-full gap-5 text-center text-[#E89F71]'>
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

              <Icon as={BsCart2} />

              <Avatar />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileMenu;