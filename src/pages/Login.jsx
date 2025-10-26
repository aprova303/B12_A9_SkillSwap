// ...existing code...
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [error,setError] = useState("")
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success("Logged in successfully");
        // navigate(from, { replace: true });
        navigate(location.state || '/')
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(error?.message || "Login failed");
        setError(errorCode)
      });
  };

const handleGoogleSignIn = ()=>{
 signInWithGoogle()
 .then(result=>{
  toast.success("Logged in successfully with Google")
  navigate(location?.state || '/')
 }).catch(error=>{
  console.log(error)
 })
}

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className=" flex-col bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-5 text-center">Login now!</h1>
          </div>
          <div className="card ">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" 
                placeholder="Email" 
                required/>

                <label className="label">Password</label>
                <input name="password" type="password" className="input"
                 placeholder="Password"  required/>

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                {error && <p className="text-red-400 text-xs">{error}</p>}

                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>

                <button onClick={handleGoogleSignIn} className="btn btn-secondary btn-outline w-full mt-3"><FcGoogle></FcGoogle> Login with Google</button>

                <p className="my-3">
                  Don't Have An Account?{" "}
                  <Link className="text-secondary font-semibold" to="/auth/signup">
                    SignUp
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
// ...existing code...