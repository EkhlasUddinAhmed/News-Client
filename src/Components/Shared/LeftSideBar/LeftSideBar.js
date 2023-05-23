import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [allCategory, setAllCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news/allcategory")
      .then((res) => res.json())
      .then((data) => {
        console.log("AllCategory are:", data);
        setAllCategory(data);
      });
  }, []);
  return (
    <div>
      <h3 className="text-center text-dark">News category</h3>
      <div>
        {allCategory.map((category) => (
          <h4 key={category.category_id}>
            <Link to={`/category/${category.category_id}`}>{category.category_Name}</Link>
          </h4>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
