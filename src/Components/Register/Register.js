import React, { useState } from "react";
import useAuthentication from "../../Hooks/useAuthentication";
import { Link, useNavigate} from "react-router-dom";
// import { toast } from "react-hot-toast";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const navigate=useNavigate();
  
  const {
    setActiveUser,
    newUserRegistration,
    activeUserError,
    setActiveUserError,
    newUserNameAndPhotoSet,
    sendNewUserAnEmailVerificationEmail,
    activeUserSignOut
  } = useAuthentication();
   

  const registrationFormSubmitHandler = (e) => {
    e.preventDefault();
    newUserRegistration(userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("New Registered User is:", user);
        newUserProfileSetup(user);
        emailVerificationHandler();
        setActiveUser(user);
        navigate('/',{replace:true});
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("New User Registration Error:", errorMessage);
        setActiveUser({});
        setActiveUserError(errorMessage);
      });

    setUserName("");
    setUserEmail("");
    setUserPhoto("");
    setUserPassword("");
    
    
   
  };

  const newUserProfileSetup = (userGot) => {
    newUserNameAndPhotoSet({ displayName: userName, photoURL: userPhoto })
      .then(() => {
        console.log("Profile Updated Successfully");
        setActiveUser(userGot);
      })
      .catch((error) => {
        console.log("Profile Not Updated Successfully");
      });
  };

  const acceptTermsAndConditionsHandler = (e) => {
    setAccept(e.target.checked);
  };

  const emailVerificationHandler=()=>{
    sendNewUserAnEmailVerificationEmail()
    .then(()=>{
        
        toast('An Email is Sent For Verification')
    });
  }

  return (
    <div className="bg-light mt-3 shadow p-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form onSubmit={registrationFormSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
              </div>

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
                <label htmlFor="exampleInputPhotoURL" className="form-label">
                  Photo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPhotoURL"
                  onChange={(e) => setUserPhoto(e.target.value)}
                  value={userPhoto}
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
              <div class="mb-3 form-check">
                <input
                  onClick={acceptTermsAndConditionsHandler}
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  {accept?
                    <p className="text-success">
                      Terms & Conditions are Accepted
                  </p>
                  :
                    <p>
                    Accept{" "}
                    <Link to="/termsandconditions">Terms & Conditions</Link>
                  </p>
                  }
                </label>
              </div>

              <button
                disabled={!accept}
                type="submit"
                className="btn btn-primary"
              >
                Register Yourself
              </button>
            </form>
            <h4 className="text-center text-danger mt-4">{activeUserError}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
