import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({children}){
  const auth = useSelector(state => state.auth); 

  if(!auth) 
    return <Navigate to='/login' />
  
  return children;
}

export default ProtectedRoute;