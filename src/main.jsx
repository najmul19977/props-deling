import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Container/Home/Home.jsx';
import Main from './Container/Layout/Main.jsx';
import About from './Container/About/About.jsx';
import Order from './Container/Order/Order.jsx';
import Contact from './Container/Contact/Contact.jsx';
import Grandpa from './Container/Grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:([
      {
        path:'/',
        element:<Home></Home>,
        loader:() =>fetch('post.JSON')

      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/order',
        element:<Order></Order>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
