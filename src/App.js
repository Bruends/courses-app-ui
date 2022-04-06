import Login from "./Login";
import Register from './Register';
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector(state => state) 
  console.log(state);

  return (
    <div className="App">      
      <Login />
      <p>Register</p>
      <div>
        <Register />
      </div>
      {state.auth && <p>Logged</p>}
      {state.loading && <p>loading...</p>}
    </div>
  );
}

export default App;
