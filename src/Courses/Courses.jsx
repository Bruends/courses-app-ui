import CourseCard  from '../components/CourseCard';
import { Stack } from 'react-bootstrap';

function Courses({ courses, logout }) {
  return (
    <div>
      <Stack direction='horizontal' gap={5}>
        {courses && 
          courses.map((c, i) => <CourseCard key={i} course={c} />) 
        }      
      </Stack>
      <button onClick={ logout }>Logout</button>
    </div>
  );
}

export default Courses;