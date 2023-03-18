import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

import { PasswordField } from './PasswordField';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

function AuthForm({ title }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const passWordref = useRef('');
  const emailRef = useRef('');

  const typeQuest =
    title === 'Sign Up' ? 'Already have an account?' : "Don't have an account?";
  const typeButton = title === 'Sign Up' ? 'Login' : 'Sign Up';

  const handleAuth = () => {
    const authentication = getAuth();
    setPassword(passWordref.current.value);
    setEmail(emailRef.current.value);

    if (title === 'Sign Up') {
      createUserWithEmailAndPassword(authentication, email, password).then(
        (response) => {
          console.log(response);
        }
      );
    }
  };

  return (
    <Container
      maxW='lg'
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing='8'>
        <Stack spacing='6'>
          <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
            <Heading size={{ base: 'xs', md: 'sm' }}>{title}</Heading>
            <HStack spacing='1' justify='center'>
              <Text color='muted'>{typeQuest}</Text>
              <Button variant='link' colorScheme='blue'>
                {typeButton}
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing='6'>
            <Stack spacing='5'>
              <FormControl>
                <Input id='email' type='email' ref={emailRef} />
              </FormControl>
              <PasswordField ref={passWordref} />
            </Stack>

            <Stack spacing='6'>
              <Button variant='solid' colorScheme='orange' onClick={handleAuth}>
                {title}
              </Button>
              <HStack>
                <Divider />
                <Text fontSize='sm' whiteSpace='nowrap' color='muted'>
                  or continue with
                </Text>
                <Divider />
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default AuthForm;
