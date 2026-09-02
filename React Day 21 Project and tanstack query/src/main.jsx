import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './app/store.jsx';
import { Provider } from 'react-redux';
import Approutes from './routes/Approutes.jsx';
import { ToastContainer } from 'react-toastify';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Approutes />
      <ToastContainer />
    </Provider>
  </QueryClientProvider>
);
