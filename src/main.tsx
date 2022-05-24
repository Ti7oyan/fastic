import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ChakraProvider, extendTheme, type ThemeConfig, ColorModeScript,
} from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

// Fonts
import '@fontsource/questrial';

// Pages
import Hero from './routes/Hero';
import BCSS from './routes/BCSS';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: '"Questrial", sans-serif',
    body: '"Questrial", sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Hero />} />
            <Route path="/bcss" element={<BCSS />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
