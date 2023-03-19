import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  Center,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../store';

function ProfilePopOver({ children, user }) {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const signOut = () => {
    dispach(removeUser());
    navigate('/');
  };

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Center className='flex-col gap-2 h-[5rem]'>
              <Box>
                <Text color=''>Hi {user.displayName || user.email}</Text>
              </Box>

              <Button colorScheme='red' onClick={signOut}>
                Sign Out
              </Button>
            </Center>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default ProfilePopOver;
