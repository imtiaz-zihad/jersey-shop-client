import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddJersy from './componentes/AddJersy.jsx';
import UpdateJersy from './componentes/UpdateJersy.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader:() => fetch('http://localhost:5000/jersy')
  },
  {
    path: "addjersy",
    element: <AddJersy />,
  },
  {
    path: "/updatejersy/:id",
    element: <UpdateJersy />,
    loader: ({params}) => fetch(`http://localhost:5000/jersy/${params.id}`)
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
