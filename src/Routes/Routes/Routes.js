import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Components/Home/Home/Home";
import Category from "../../Components/Category/Category";
import NewsDetailsCard from "../../Components/Shared/NewsDetailsCard/NewsDetailsCard";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import NotFound from "../../Components/NotFound/NotFound";
import Protected from "../../Components/Protected/Protected";
import TermsAndConditions from "../../Components/TermsAndConditions/TermsAndConditions";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        
        {
            path:"/",
            element:<Home></Home>,
            loader:()=> {
                return fetch(`http://localhost:5000/news/allNews`
                )
              }
        },
        {
            path:"/home",
            element:<Home></Home>,
            loader:()=> {
                return fetch(`http://localhost:5000/news/allNews`
                )
              }
        },
        {
            path:"/category/:id",
            element:<Protected><Category/></Protected>
            // loader:({params})=> {
            //     return fetch(`http://localhost:5000/news/category/${params.id}`
            //     )
            //   }
        },
        {
            path:"/newsdetails/:id",
            element:<Protected><NewsDetailsCard/></Protected>,
            loader:({params})=> {
                return fetch(`http://localhost:5000/news/selectedNews/${params.id}`
                )
              }
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/termsandconditions",
          element:<TermsAndConditions/>
        },
        {
          path:"*",
          element:<NotFound/>
        },

      ]
    },
  ]);