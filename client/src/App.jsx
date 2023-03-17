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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='cart' element={<CartPage />} />
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