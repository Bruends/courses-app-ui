import LoginPage from "./LoginPage/LoginPage";
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector(state => state) 
  console.log(state);

  return (
    <div className="App">      
      <LoginPage />
    </div>
  );
}

export default App;
