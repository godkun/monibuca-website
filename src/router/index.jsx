import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
// import Video from '../pages/Video'
import React from 'react';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  // {
  //   path: '/video',
  //   element: <Video />,
  // },
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
