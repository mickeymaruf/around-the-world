import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './layout/Root';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import Home from './Pages/Home/Home';
import BookPlace from './Pages/Place/BookPlace';
import Hotels from './Pages/Place/Hotels';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: '/', element: <Home />, loader: () => fetch('https://travel-edge-server-mickeymaruf.vercel.app/places') },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/place/:id', element: <BookPlace />, loader: ({ params }) => fetch(`https://travel-edge-server-mickeymaruf.vercel.app/place/${params.id}`) },
      { path: '/hotels/:id', element: <Hotels />, loader: ({ params }) => fetch(`https://travel-edge-server-mickeymaruf.vercel.app/hotels/${params.id}`) },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
