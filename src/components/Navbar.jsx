import React, { use } from 'react';
import { SiSololearn } from 'react-icons/si';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
// import { toast } from 'react-toastify';
import toast from "react-hot-toast";
import { FaUser } from 'react-icons/fa';
// import Login from '../pages/Login';
const Navbar = () => {
  const {user,logOut}=use(AuthContext);
  const handleLogOut=()=>{
   logOut()
   .then(()=>{
    toast.success('Logged out successfully');
   }).catch(error=>{
    console.log(error)
   })
  }
    const links = <>
             <li><NavLink to='/'>Home</NavLink></li>       
              <li><NavLink to='/profile'>My Profile</NavLink></li>          
               </>
    return (
       <div className="navbar bg-base-100 shadow-sm justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><SiSololearn></SiSololearn> SkillSwap</a>
  </div>
  <div className="navbar-center hidden lg:flex mr-10">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
   {/* <div className="login-btn flex gap-5">
         {user && user.photoURL ? (
         <img
           className="w-12 h-12 rounded-full object-cover"
           src={user.photoURL}
           alt={user.displayName || 'User'}
         />
       ) : (
         <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl text-gray-600">
           <FaUser />
         </div>
       )}

       
        {
          user ? <button onClick={handleLogOut} className="btn btn-primary">LogOut</button> : ( <Link to='/auth/login' className="btn btn-primary">Login</Link>
     
        )}
         </div> */}
        <div className="login-btn flex items-center gap-5">
        <div className="tooltip tooltip-bottom" data-tip={user?.displayName || 'Guest'}>
          {user && user.photoURL ? (
            <img
              className="w-12 h-12 rounded-full object-cover border-2 border-primary hover:border-secondary transition-colors"
              src={user.photoURL}
              alt={user.displayName || 'User'}
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl text-gray-600 hover:bg-gray-300 transition-colors">
              <FaUser />
            </div>
          )}
        </div>

        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
</div>
    );
};

export default Navbar;