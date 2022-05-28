import { Outlet } from 'react-router-dom';
import { Container, createStyles } from '@mantine/core';
import Footer from '@/Footer';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    minHeight: '100vh',
    overflow: 'scroll',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const App = () => {
  const { classes } = useStyles();

  return (
    <>
      <Container
        className={classes.container}
        fluid
      >
        <Outlet />
      </Container>
      <Footer />
    </>

  );
};

export default App;
