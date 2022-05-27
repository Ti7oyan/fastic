import { Outlet } from 'react-router-dom';
import { Container } from '@mantine/core';
import Footer from '@/Footer';

const App = () => (
  <Container
    style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    fluid
  >
    <Outlet />
    <Footer />
  </Container>
);

export default App;
