import React, { useState } from "react";
import useAuthentication from "../../Hooks/useAuthentication";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const location=useLocation();
  const navigate=useNavigate();
  const REDIRECT_URL=location.state?.from?.pathname || '/'
  const {
    
     activeUser,
    setActiveUser,
    activeUserError,
    setActiveUserError,
    signInWithEmailAndPasswordHandler
 } = useAuthentication();
//  emailVerified

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPasswordHandler(userEmail,userPassword)
    .then((userCredential) => {
        
        const user = userCredential.user;
        setActiveUser(user);
        setUserEmail('');
        setUserPassword("");

        navigate(REDIRECT_URL,{replace:true});
        
        
      })
      .catch((error) => {
        
         const errorMessage = error.message;
         setActiveUserError("Login Error:",errorMessage);
      });
    
  };

  return (
    <div className="bg-light mt-3 shadow p-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form onSubmit={loginFormSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setUserPassword(e.target.value)}
                  value={userPassword}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
            <h4 className="text-center text-danger mt-4">{activeUserError}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
