import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Video from '../pages/Video'
import About from '../pages/About'
import Plugin from '../pages/Plugin'
import Product from '../pages/Product'
import Download from '../pages/Download'
import React from 'react';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/video',
    element: <Video />,
  },
  {
    path: '/plugin',
    element: <Plugin />,
  },

  {
    path: '/product',
    element: <Product />,
  },

  {
    path: '/download',
    element: <Download />,
  },
  {
    path: '/about',
    element: <About />,
  },
  // {
  //   path: '/buka',
  //   element: <Home />,
  // },
  // {
  //   path: '/download',
  //   element: <Home />,
  // },
  // {
  //   path: '/plugin',
  //   element: <Home />,
  // },
  // {
  //   path: '/about',
  //   element: <Home />,
  // }
])

export default router
