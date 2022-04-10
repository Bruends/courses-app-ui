import { useDispatch } from 'react-redux';
import { getTokenInStorage } from './util/localStorage';
import { authToken } from './store/AuthSlice';
import AppRoutes from './Routes';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {  
  const token = getTokenInStorage();
  const dispatch = useDispatch();  
  
  // check if already have a token in the storage
  useEffect(() => {
    if(token);
      dispatch(authToken(token));
  }, []);

  return (
    <>
    <AppRoutes />
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
