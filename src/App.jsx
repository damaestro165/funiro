import React, { useState, useEffect } from 'react';

import { app } from './firebase';
import TopBar from './components/TopBar';
import { Box } from '@chakra-ui/react';
import Footer from './components/Footer';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Home from './Home';
import MobileMenu from './components/MobileMenu';
import CartPage from './CartPage';

import AuthForm from './components/authForm';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AuthRoot />}>
        <Route>
          <Route path='login' element={<AuthForm title='Sign In' id={1} />} />
          <Route path='/signup' element={<AuthForm title='Sign Up' id={2} />} />
        </Route>
        <Route path='/' element={<Root />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
const AuthRoot = () => {
  return (
    <>
      <Box className=''>
        <Outlet />
      </Box>
    </>
  );
};

const Root = () => {
  return (
    <>
      <Box
        className='md:py-[2rem] p-[1rem] w-full overflow-hidden '
        bgGradient='linear(to-r, #F9F1E7 65%, #FCF8F3 35%)'
      >
        <MobileMenu />
        <TopBar />
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
