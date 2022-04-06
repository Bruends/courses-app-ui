import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import { useSelector, useDispatch } from 'react-redux';

function AppRoutes() {
  const state = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return(
    <Routes>
      {/* course routes */}
      <Route path='/' element={
        state.auth ? <div>Logged in</div> : <Navigate to='/login' />
      }/>        
      {/* auth routes */}
      <Route  path='login' element={<Login />}/>
      <Route  path='register' element={<Register />}/>
      {/* 404 */}
      <Route path='*' element={<p>404</p>} />
    </Routes>
  )
}

export default AppRoutes;