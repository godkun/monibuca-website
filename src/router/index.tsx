import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Video from '../pages/Video'
import About from '../pages/About'
import Plugin from '../pages/Plugin'
import Product from '../pages/Product'
import Download from '../pages/Download'
import React from 'react'
import MainLayout from '../layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/video',
        element: <Video />
      },
      {
        path: '/plugin',
        element: <Plugin />
      },

      {
        path: '/product',
        element: <Product />
      },

      {
        path: '/download',
        element: <Download />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

export default router
