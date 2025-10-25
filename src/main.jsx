import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/Router.jsx'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "animate.css";
import AuthProvider from './provider/AuthProvider.jsx'
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider >
     <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
    {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover /> */}
        <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>,
)