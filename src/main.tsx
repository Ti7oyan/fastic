import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

const HeroSection = lazy(() => import('@/components/HeroSection'));
const AddAccounts = lazy(() => import('@/components/AddAccounts'));

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={(
            <Suspense fallback={<p>Loading...</p>}>
              <HeroSection />
            </Suspense>
          )}
        />

        <Route
          path="add-accounts"
          element={(
            <Suspense fallback={<p>Loading...</p>}>
              <AddAccounts />
            </Suspense>
          )}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
