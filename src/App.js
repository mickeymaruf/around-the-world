import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './layout/Root';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {path: '/', element: <Root />, children: [
    {path: '/', element: <Home />},
    {path: '/login', element: <Login />},
    {path: '/signup', element: <Signup />},
  ]}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
