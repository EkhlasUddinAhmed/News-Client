import logo from './logo.svg';
import './App.css';
import { router } from './Routes/Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  
  return (
    <div>
       <RouterProvider router={router} />
       {/* <Toaster/> */}
       <ToastContainer/>
    </div>
  );
}

export default App;
