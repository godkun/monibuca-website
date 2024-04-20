/**
 *react-router-dom router configuration
 */

import { createBrowserRouter } from 'react-router-dom'
import Doc from '../pages/Doc'
import Home from '../pages/Home'
import Video from '../pages/Video'
import About from '../pages/About'
import Plugin from '../pages/Plugin'
import Product from '../pages/Product'
import Download from '../pages/Download'
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
        path: '/doc',
        element: <Doc />
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
