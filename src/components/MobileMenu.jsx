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
import { useCart } from '../CartContext';
import Cart from './Cart';
function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { products, removeFromCart, liked } = useCart();

  const handleClick = (data) => {
    console.log(data);
    removeFromCart(data);
  };

  const isActive = products.length === 0 ? false : true;
  const isLiked = liked.length === 0 ? false : true;

  return (
    <div className='lg:hidden flex justify-between w-full '>
      <Heading className='w-4/5'>Funiro</Heading>
      <Button
        ref={btnRef}
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
        color='#E89F71'
        onClick={onOpen}
      >
        Open
      </Button>
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
              <Box position='relative'>
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
              </Box>

              <Cart products={products} handleClick={handleClick}>
                {isActive ? (
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
                <Icon as={BsCart2} />
              </Cart>

              <Avatar />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MobileMenu;
