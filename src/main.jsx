import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Write from './routes/Write.jsx';
import HomePage from './routes/homePage.jsx';
import PostlistPage from './routes/PostlistPage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx'; 
import MainLayout from './layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Clerk publishable key is not defined. Please set VITE_CLERK_PUBLISHABLE_KEY in your environment variables.");}

let router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/posts",
        element: <PostlistPage/>,
      },
      {
        path: "/:slug",
        element: <SinglePostPage/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/register",
        element: <RegisterPage/>,
      },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
     <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
)
