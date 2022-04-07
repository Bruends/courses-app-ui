import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <Link to='/'>landing</Link>
      <Link to='login'>login</Link>
      <Link to='courses'>cursos</Link>
      <Link to='register'>registrar</Link>
    </div>
  )
}

export default Landing;