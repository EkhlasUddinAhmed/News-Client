import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const NewsDetailsCard = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const { image_url, title, details, category_id, author, rating } = data[0];

  console.log("FRom News Details card", data[0].title);
  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <img src={image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="d-flex justify-content-around align-items-center my-3">
            <h6>
              Author:<span className="text-muted">{author.name}</span>
            </h6>

            <h6>
              Published Date:
              <span className="text-muted">{author.published_date}</span>
            </h6>

            <div className="d-flex align-items-center ">
              <FaStar className="text-warning me-2"></FaStar>
              <span>{rating?.number}</span>
            </div>
          </div>
          <p className="card-text">{details}</p>
          <Link to={`/category/${category_id}`} className="btn btn-secondary">
            All This Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
