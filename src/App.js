import { useSelector, useDispatch } from 'react-redux';
import { getTokenInStorage } from './util/localStorage';
import { authToken } from './store/AuthSlice';
import AppRoutes from './Routes';
import { useEffect } from 'react';
function App() {  
  const token = getTokenInStorage();
  const dispatch = useDispatch();  
  
  // check if already have a token in the storage
  useEffect(() => {
    if(token);
      dispatch(authToken(token));
  }, []);

  return (
    <AppRoutes />
  );
}

export default App;
