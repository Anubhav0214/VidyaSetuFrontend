import React from 'react'
import './account.css' 
import { MdDashboard, MdLogout } from "react-icons/md"; 
import videoBg from '../../assets/images/187590-880681822.mp4'; // Adjust the path as needed
import { UserData } from '../../context/UserContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Account = ({user}) => {
  const {setIsAuth, setUser}=UserData();

  const navigate = useNavigate();
  const logoutHandler = () =>{
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  }
  return <div>
    {user && (
      <div className="profile">
      <video className="background-video" autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>
           
           <div className="profile-info">
           <h2>My Profile</h2>
              <p>
                  <strong>Name - {user.name}</strong>
              </p>
              <p>
                  <strong>Email - {user.email}</strong>
              </p>
              <button onClick={()=>navigate(`/${user._id}/dashboard`)} className="dash-btn">
                <MdDashboard/>Dashboard
              </button>
              <br/>
              {
                user.role === "admin" && (<button onClick={()=>navigate(`/admin/dashboard`)} className="dash-btn">
                <MdDashboard/>Admin Dashboard
              </button>)
              }
              <br/>
              <button onClick={logoutHandler} className="log" >
                <MdLogout/>Logout
              </button>
           </div>
      </div>
    )}
  </div>
}

export default Account