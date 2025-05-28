import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Write from './routes/Write.jsx';

let router = createBrowserRouter([
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
    element: <PostlistPage/>,
  },
  {
    path: "/write",
    element: <Write/>,
  },
  {
    path: "/:slug",
    element: <PostlistPage/>,
  },
  {
    path: "/:slug",
    element: <PostlistPage/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
