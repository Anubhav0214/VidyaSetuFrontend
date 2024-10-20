import React ,{useState} from 'react';
import "./auth.css";
import { Link, useNavigate } from 'react-router-dom';
import videoBg from '../../assets/images/139586-773417795.mp4'; // Adjust the path as needed
import { UserData } from '../../context/UserContext';
import { CourseData } from '../../context/CourseContext';

const Login = () => {
  const navigate=useNavigate()
  const{btnLoading,loginUser}=UserData();
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  

  const {fetchMyCourse} = CourseData()

  const submitHandler=async(e)=>{
    e.preventDefault()
    await loginUser(email, password, navigate , fetchMyCourse)
  }
  return (
    <div className="auth-page">
      <video className="background-video" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input type='email' value={email} 
          onChange={(e)=>setEmail(e.target.value)}
           required />

          <label htmlFor="password">Password</label>
          <input type='password' value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required />

          <button disabled={btnLoading} type="submit" className='common-btn'>{btnLoading?"Please wait...":"Login"}</button>
        </form>
        <p>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
