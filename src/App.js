import TopBar from './components/TopBar';
import { Box } from '@chakra-ui/react';
import ImageCarousel from './components/Carousel';

function App() {
  return (
    <Box
      width='100%'
      h='774px'
      py='2rem'
      bgGradient='linear(to-r, #F9F1E7 65%, #FCF8F3 35%)'
    >
      <TopBar />
      <ImageCarousel />
    </Box>
  );
}

export default App;
