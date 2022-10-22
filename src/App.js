import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './layout/Root';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {path: '/', element: <Root />, children: [
    {path: '/', element: <Home />}
  ]}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
