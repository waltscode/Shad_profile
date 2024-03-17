import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './App.css'
import './index.css'
import './assets/css/styles.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Portfolio from './pages/Portfolio.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
