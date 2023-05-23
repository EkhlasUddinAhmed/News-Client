import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {

    
    const navigate=useNavigate();

    const termsAndConditionsHandler=()=>{
        navigate('/register',{replace:true})
    }
    return (
        <div>
            <h1 className='text-center text-danger'>Terms And Conditions Are</h1>
            <Link 
            
            to="/register"> Return To Register Page</Link>
            <br></br>
            <button 
            onClick={termsAndConditionsHandler}
            className="btn btn-info mt-5">Return To Register Page</button>
              <br></br>
            <Link to="/register">
              <button className='btn btn-success mt-5'>Go to Regsiter page</button>
            </Link>
        </div>
    );
};

export default TermsAndConditions;