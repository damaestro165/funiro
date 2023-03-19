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
import { BsHeart, BsCart2, BsCart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import Favourite from './Favourite';
import { Link } from 'react-router-dom';

function MobileMenu() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const user = useSelector((state) => state.user.user);
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
      <Box className='flex items-center gap-2'>
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
            <Icon as={BsCart} w={5} h={5} color='#E89F71' />
          </Link>
        </Box>
        <Button
          ref={btnRef}
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon w={7} h={7} />}
          variant='unstyled'
          color='#E89F71'
          onClick={onOpen}
        />
      </Box>
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
            <Flex gap={5} alignItems='center' justifyContent='center'>
              {user === null ? (
                <Link to='/login'>
                  <Avatar />
                </Link>
              ) : (
                <Avatar name={user.email} src={user?.photoURL} />
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileMenu;
