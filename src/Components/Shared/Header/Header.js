import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthentication from "../../../Hooks/useAuthentication";
import {FaUserAlt} from"react-icons/fa";

const Header = () => {
  const { activeUser, setActiveUser, activeUserSignOut } = useAuthentication();
  const navigate=useNavigate();

  const activeUserSignOuthandler = () => {
    activeUserSignOut()
      .then(() => {
        console.log("Active User is SignOut Successfully");
        setActiveUser({});
        navigate('/',{replace:true});
      })
      .catch((error) => {
        console.log("Active User is not SignOut Successfully");
      });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand">AllNews</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            {!activeUser?.email ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" >
                    <FaUserAlt></FaUserAlt>
                  </Link>
                </li>
              </>
            ) : (
              <>
              <li className="nav-item">
                  <Link className="nav-link">
                    {activeUser?.displayName}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">
                    {
                      <img 
                       style={{height:"30px"}}
                      src={activeUser?.photoURL} alt="" />
                    }
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={activeUserSignOuthandler} className="nav-link">
                    SignOut
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
