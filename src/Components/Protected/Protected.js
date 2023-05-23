import React from "react";
import useAuthentication from "../../Hooks/useAuthentication";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Protected = ({ children }) => {
  const { activeUser, isLoading } = useAuthentication();
  const location = useLocation();
  if (isLoading) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }
  
  
  if (activeUser?.email  ) {
    return children;
  }
  return <Navigate to="/login" replace state={{ from: location }} />;
  
  
  
};

export default Protected;
