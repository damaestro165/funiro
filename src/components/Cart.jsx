import {
  Box,
  Button,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import React from 'react';

function Cart({ children }) {
  const initRef = React.useRef();
  return (
    <Popover closeOnBlur={false} placement='right' initialFocusRef={initRef}>
      <PopoverTrigger>
        <Box>{children}</Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverHeader fontSize='2rem' fontWeight='semibold'>
            Items
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody></PopoverBody>
          <PopoverFooter>
            <Button colorScheme='teal'>Check Out All</Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default Cart;
