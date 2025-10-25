import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const {createUser,setUser} = use(AuthContext)
   const [nameError,setNameError] = useState('') 
  const handleSignup = (e) => {
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if(name.length < 5){
      setNameError("namexjsnck")
      return
    }else {
      setNameError('')
    }
     createUser(email,password)
     .then(result=>{
      const user=result.user;
      // console.log(user)
      setUser(user)
     })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  alert(errorMessage)
  });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className=" flex-col bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-5 text-center">SignUp </h1>
          </div>
          <div className="card ">
            <form onSubmit={handleSignup} className="card-body">
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                />
                {nameError && <p className="
                text-error text-xs">{nameError}</p>}

                {/* email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                {/* photo URL */}
                <label className="label">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                  required
                />

                {/* password */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Signup
                </button>
                <p className="my-3">
                  Already Have An Account?{" "}
                  <Link
                    className="text-secondary font-semibold"
                    to="/auth/login"
                  >
                    Login
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

export default SignUp;
