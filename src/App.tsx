import {
  Container, useColorMode,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Footer from '@/Footer';

const App = () => {
  const { colorMode } = useColorMode();

  return (
    <Container
      maxWidth="100%"
      paddingInlineStart="unset"
      bgColor={colorMode === 'light' ? 'white' : 'blackAlpha.400'}
    >

      <Container
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Outlet />
      </Container>

      <Footer />
    </Container>
  );
};

export default App;
