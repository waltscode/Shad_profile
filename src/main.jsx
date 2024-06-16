import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './App.css'
import './index.css'
import './assets/css/styles.css'
import '../src/assets/css/media.css'
import '../src/assets/css/gradient.css'
import '../src/assets/css/text.css'
import'../src/assets/css/themes.css'
import '../src/assets/css/cyber.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Portfolio from './pages/Portfolio.jsx';
import AboutMe from './pages/AboutMe.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/about',
        element: <AboutMe />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
