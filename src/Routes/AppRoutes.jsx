import { Routes, Route } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import Landing from '../Landing';
import Courses from '../Courses';
import ProtectedRoute from './ProtectedRoute';
import NewCourse from '../NewCourse';

function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Landing/>} />
      
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
          {/* nested routes on Course */}
          <Route
            path='new'
            element={
              <ProtectedRoute>
                <NewCourse />
              </ProtectedRoute>  
            }
          />
      </Route>

      {/* 404 */}
      <Route path='*' element={<p> 404 </p>} />
    </Routes>
  )
}

export default AppRoutes;