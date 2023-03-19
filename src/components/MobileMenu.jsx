import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Icon,
  Avatar,
  Badge,
  Center,
} from '@chakra-ui/react';

import { ChevronDownIcon, HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import { BsCart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../store';

import { Link, useNavigate } from 'react-router-dom';

function MobileMenu() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navigate = useNavigate();

  const signOut = () => {
    dispatch(removeUser());
    navigate('/');
  };

  const user = useSelector((state) => state.user.user);
  const { products, liked } = useSelector(({ cart, favourite }) => {
    return {
      products: cart.products,
      liked: favourite.like,
    };
  });

  const isActive = products.length === 0 ? false : true;

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
                  <Center gap={5} flexDirection='column'>
                    <Avatar />
                    <Button colorScheme='blue'>Login</Button>
                  </Center>
                </Link>
              ) : (
                <Avatar name={user.email} src={user?.photoURL} />
              )}
            </Flex>
            {user && (
              <Center color='black' gap={5} flexDirection='column'>
                <Text>Welcome {user?.displayName || user?.email}</Text>
                <Button colorScheme='red' onClick={signOut}>
                  Sign Out
                </Button>
              </Center>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileMenu;
