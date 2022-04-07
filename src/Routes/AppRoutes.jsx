import { Routes, Route } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import Landing from '../Landing';
import Courses from '../Courses';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Landing/>} />
      {/* course routes */}      
      <Route
        path='courses'
        element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>   
        }
      />
      {/* auth routes */}
      <Route  path='login' element={<Login />}/>
      <Route  path='register' element={<Register />}/>
      {/* 404 */}
      <Route path='*' element={<p> 404 </p>} />
    </Routes>
  )
}

export default AppRoutes;