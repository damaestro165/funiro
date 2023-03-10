import TopBar from './components/TopBar';
import {
  Box,
  Button,
  Heading,
  VStack,
  Text,
  Icon,
  Flex,
} from '@chakra-ui/react';
import ImageCarousel from './components/Carousel';
import { BsArrowRightShort } from 'react-icons/bs';
import Feature from './components/Feature';
import ProductsSection from './components/ProductsSection';
import Inspiration from './components/Inspiration';
import Tips from './components/Tips';
import Footer from './components/Footer';
import { CartProvider } from './CartContext';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Home from './Home';
import MobileMenu from './components/MobileMenu';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <CartProvider>
        <Box
          className='py-[2rem] w-full overflow-hidden '
          bgGradient='linear(to-r, #F9F1E7 65%, #FCF8F3 35%)'
        >
          <MobileMenu />
          <TopBar />
        </Box>
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
};

export default App;
