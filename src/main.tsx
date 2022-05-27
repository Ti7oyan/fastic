import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import App from './App';

// Fonts
import '@fontsource/questrial';

// Pages
import Hero from './routes/Hero';
import BCSS from './routes/BCSS';

render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        fontFamily: 'Questrial, sans-serif',
        headings: { fontFamily: 'Questrial, sans-serif' },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Hero />} />
            <Route element={<BCSS />} path="bcss" />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
