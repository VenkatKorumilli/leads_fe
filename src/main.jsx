import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddLead from './pages/AddLead.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import Leads from './pages/Leads.jsx';
import EditLead from './pages/EditLead.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/addLead",
        element: <AddLead/>
      },
      {
        path: "/",
        element: <Leads/>
      },
      {
      path:"/editLead/:id",
      element:<EditLead></EditLead>
      }
    ]
  },
  {
  path:"/login",
  element:<Login></Login>
  },
  {
  path:"/signup",
  element:<Signup></Signup>
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
