import { useSelector } from 'react-redux';
import AppRoutes from './Routes'
function App() {
  const state = useSelector(state => state) 
  console.log(state);

  return (
    <AppRoutes />
  );
}

export default App;
