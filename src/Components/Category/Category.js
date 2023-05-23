import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsSamaryCard from '../Shared/NewsSamaryCard/NewsSamaryCard';
import useAuthentication from '../../Hooks/useAuthentication';
import { toast } from 'react-toastify';

const Category = () => {
    // const data=useLoaderData();
   const {activeUser}=useAuthentication();
    const [oneCategory,setOneCategory]=useState([]);
    const {id}=useParams();

    

    useEffect(()=>{
        fetch(`http://localhost:5000/news/category/${id}`)
        .then(res=>res.json())
        .then(data=>{
            
            setOneCategory(data)
        })
    },[id]);




    return (
        <div>
          
          
          {
            oneCategory.map(specificCategory=><NewsSamaryCard 
            key={specificCategory._id}
            summaryNews={specificCategory}
            
            ></NewsSamaryCard>)
          }
        </div>
    );
};

export default Category;