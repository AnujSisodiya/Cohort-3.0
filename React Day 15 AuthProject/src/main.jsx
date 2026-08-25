import { createRoot } from 'react-dom/client';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import App from './App.jsx';
import Approutes from './routes/Approutes.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Approutes />
    <ToastContainer />
  </AuthProvider>
);
