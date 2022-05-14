import {
  AppShell, ColorSchemeProvider, Global, MantineProvider, Title,
} from '@mantine/core';
import useTheme from './hooks/useTheme';

// Fonts
import light from '@/assets/fonts/Poppins-Light.woff2';
import medium from '@/assets/fonts/Poppins-Medium.woff2';
import regular from '@/assets/fonts/Poppins-Regular.woff2';
import semiBold from '@/assets/fonts/Poppins-SemiBold.woff2';

// Components
import Header from '@/components/Header';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ColorSchemeProvider colorScheme={theme} toggleColorScheme={toggleTheme}>
      <Global
        styles={[
          {
            '@font-face': {
              fontFamily: 'Poppins',
              src: `url('${light}') format('woff2')`,
              fontWeight: 300,
            },
          },
          {
            '@font-face': {
              fontFamily: 'Poppins',
              src: `url('${medium}') format('woff2')`,
              fontWeight: 400,
            },
          },
          {
            '@font-face': {
              fontFamily: 'Poppins',
              src: `url('${regular}') format('woff2')`,
              fontWeight: 500,
            },
          },
          {
            '@font-face': {
              fontFamily: 'Poppins',
              src: `url('${semiBold}') format('woff2')`,
              fontWeight: 600,
            },
          },
        ]}
      />
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          colorScheme: theme,
          fontFamily: 'Poppins, sans-serif',
          colors: {
            brand: ['#FCA311', '#14213D', '#E5E5E5'],
          },
        }}
      >
        <AppShell
          header={<Header />}
        >
          <Title>Fastic</Title>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
