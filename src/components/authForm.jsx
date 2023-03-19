import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VisuallyHidden,
  createStandaloneToast,
} from '@chakra-ui/react';

import { PasswordField } from './PasswordField';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { GoogleIcon } from './GoogleIcon';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store';
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '../firebase';

function AuthForm({ title, id }) {
  const { ToastContainer, toast } = createStandaloneToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const passWordref = useRef('');
  const emailRef = useRef('');

  const typeQuest =
    title === 'Sign Up' ? 'Already have an account?' : "Don't have an account?";

  const typeButton = title === 'Sign Up' ? 'Login' : 'Sign Up';
  const linkText = title === 'Sign Up' ? 'login' : 'signup';

  const googleAuth = () => {
    const authentication = getAuth();

    signInWithPopup(authentication, provider).then((response) => {
      dispatch(addUser(response.user));
      localStorage.setItem('User', JSON.stringify(response.user));
      navigate('/');
      toast({
        title: 'Login Successful ',
        position: 'top',
        description: `welcome ${response.user.displayName}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    });
  };
  const handleAuth = () => {
    const authentication = getAuth();
    const email = emailRef.current.value;
    const password = passWordref.current.value;
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          dispatch(addUser(response.user));
          console.log(response.user);
          localStorage.setItem('User', JSON.stringify(response.user));
          navigate('/');
          toast({
            title: 'Account successfully created ',
            position: 'top',
            description: `welcome ${response.user.email}`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast({
              title: 'User already has an account.',
              description: 'Login instead',
              status: 'error',
              duration: 5000,
              isClosable: true,
              position: 'top',
            });
          }
        });
    } else if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          dispatch(addUser(response.user));
          console.log(response.user);
          localStorage.setItem('User', JSON.stringify(response.user));
          navigate('/');
          toast({
            title: 'Login Successful ',
            description: `welcome ${response.user.email}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top',
          });
        })

        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            toast({
              title: 'Wrong password',
              description: 'Check your password and retry',
              status: 'error',
              duration: 9000,
              isClosable: true,
              position: 'top',
            });
          }
          if (error.code === 'auth/user-not-found') {
            toast({
              title: 'User not found',
              description: 'Check your email and retry, or SignUp instead',
              status: 'error',
              duration: 9000,
              isClosable: true,
              position: 'top',
            });
          }
        });
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
            <Link href='/'>
              <Heading size={{ base: 'sm', md: 'xl' }}>Funiro.</Heading>
            </Link>
            <Heading size={{ base: 'xs', md: 'sm' }}>{title}</Heading>
            <HStack spacing='1' justify='center'>
              <Text color='muted'>{typeQuest}</Text>
              <Button variant='link' colorScheme='blue'>
                <Link href={`/${linkText}`}> {typeButton}</Link>
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
                <FormLabel>Email</FormLabel>
                <Input id='email' type='email' ref={emailRef} />
              </FormControl>
              <PasswordField ref={passWordref} />
            </Stack>
            w
            <Stack spacing='6'>
              <Button variant='solid' colorScheme='orange' onClick={handleAuth}>
                {title}
              </Button>
              <HStack>
                <Divider />
                <Text fontSize='sm' whiteSpace='nowrap' color='muted'>
                  or continue with
                </Text>
                <Button
                  width='full'
                  variant='outline'
                  colorScheme='messenger'
                  onClick={googleAuth}
                >
                  <VisuallyHidden>Sign in with Google</VisuallyHidden>
                  <GoogleIcon boxSize='5' />
                </Button>
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
