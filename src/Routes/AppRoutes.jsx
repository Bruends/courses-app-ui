import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import Courses from '../Courses';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Navigate to="/courses" replace/>} />
      
      {/* auth routes */}
      <Route  path='login' element={<Login />}/>
      <Route  path='register' element={<Register />}/>

      {/* course routes */}
      <Route path='courses'>
        <Route
          index
          path=''
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>  
          }
        />         
      </Route>

      {/* 404 */}
      <Route path='*' element={<Navigate to="/" replace/>} />
    </Routes>
  )
}

export default AppRoutes;