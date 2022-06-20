import React, { lazy, Suspense } from 'react';

import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'


// import layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// import pages
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import MoviePage from './pages/MoviePage';
// import BookingPage from './pages/BookingPage';


import LoadingPage from './pages/LoadingPage';




// import styled
import GlobalStyled from './global.styled'
import BookingLayout from './layouts/BookingLayout';



const HomePage = lazy(() => import('./pages/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const MoviePage = lazy(() => import('./pages/MoviePage'))
const BookingPage = lazy(() => import('./pages/BookingPage'))

function App() {

  return (
    <Suspense fallback={<LoadingPage></LoadingPage>}>
      <GlobalStyled />
      <Routes>
          <Route path='/loading' element={<LoadingPage />} />

          {/* Auth layout */}
          <Route path="/register" element={<AuthLayout><RegisterPage /> </AuthLayout>} />
          <Route path="/login" element={<AuthLayout><LoginPage /> </AuthLayout>} />

          {/* MainLayout */}
          <Route path="/movie/:id" element={<MainLayout><MoviePage /> </MainLayout>} />
          <Route path="/" element={<MainLayout><HomePage /> </MainLayout>} />
          <Route path="*" element={<Navigate to="/" replace />} />

          {/* BookingLayout */}
          <Route path="/booking/:id" element={<BookingLayout><BookingPage /> </BookingLayout>} />
      </Routes>

    </Suspense>
  );
}

export default App;

