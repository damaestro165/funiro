import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

function Cart({ children, products }) {
  const initRef = React.useRef();
  return (
    <Popover closeOnBlur={false} initialFocusRef={initRef}>
      <PopoverTrigger>
        <Box position='relative'>{children}</Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverHeader fontWeight='semibold'>Items</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            {products.map(({ image, heading, price }) => (
              <HStack key={heading} mb={2}>
                <Image
                  src={image}
                  width='5rem'
                  h='4rem'
                  border='4px'
                  p={0.5}
                  borderRadius='md'
                  borderColor='#E89F71'
                />
                <Flex flexDirection='column' gap={2}>
                  <Text fontSize='sm' fontWeight='extrabold'>
                    {heading}
                  </Text>
                  <Text fontWeight='extrabold' fontSize='sm'>
                    {price}
                  </Text>
                </Flex>
                <Button fontSize='sm' variant='outline'>
                  Check Out
                </Button>
              </HStack>
            ))}
          </PopoverBody>
          <PopoverFooter>
            <Button colorScheme='teal'>Check Out All</Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default Cart;
