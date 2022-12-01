import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AppTheme from './contextAPI/AppTheme';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import NotFound from './Youtube/pages/NotFound';
import Videos from './Youtube/pages/Videos';
import VideoDetail from './Youtube/pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos />},
      { path: 'videos', element: <Videos />},
      { path: 'videos/:keyword', element: <Videos />},
      { path: 'videos/watch/:videoId', element: <VideoDetail />}
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppTheme /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
