import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";
import useAuthentication from "../../../Hooks/useAuthentication";
import { useLocation, useNavigate } from "react-router-dom";
const RightSideBar = () => {
  const { activeUser, setActiveUser, googleLoginActiveUser } =useAuthentication();
  const location=useLocation();
  const navigate=useNavigate();
  const REDIRECT_URL=location.state?.from?.pathname || "/"

  const googleSignInhandler = () => {
    googleLoginActiveUser()
      .then((result) => {
        const user = result.user;
        setActiveUser(user);
        console.log("From GoogleSignInhandler:", user);
        navigate(REDIRECT_URL,{replace:true});
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("From GoogleSignInHandler Error:", errorMessage);
      });
  };

  return (
    <div>
      <div>
        {activeUser?.email?
          <button
          onClick={googleSignInhandler}
          type="button"
          className="btn btn-outline-primary w-100 fw-semibold mb-3"
          disabled
        >
          <FaGoogle className="me-2" />
          Login via Google{" "}
        </button>

         :
         <button
         onClick={googleSignInhandler}
         type="button"
         className="btn btn-outline-primary w-100 fw-semibold mb-3"
       >
         <FaGoogle className="me-2" />
         Login via Google{" "}
       </button>

        }
        <button
          type="button"
          className="btn btn-outline-secondary w-100 fw-semibold"
        >
          <FaGithub className="me-2" />
          Login via Github{" "}
        </button>
      </div>
      <div className="mt-3">
        <h5 className="text-muted">Find Us On</h5>
        <ul class="list-group shadow-lg fw-semibold">
          <li class="list-group-item mb-1">
            <FaFacebook className="me-2 text-primary mb-1" />
            FaceBook
          </li>
          <li class="list-group-item mb-1">
            <FaYoutube className="me-2 text-danger" />
            YouTube
          </li>
          <li class="list-group-item mb-1">
            <FaTwitter className="me-2 text-info mb-1" />
            Twitter
          </li>
          <li class="list-group-item mb-1">
            <FaWhatsapp className="me-2 text-success mb-1" />
            WhatsApp
          </li>
          <li class="list-group-item mb-1">
            <FaDiscord className="me-2 mb-1" />
            Discord
          </li>
          <li class="list-group-item mb-1">PrivacyPolicy</li>
          <li class="list-group-item mb-1">Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
