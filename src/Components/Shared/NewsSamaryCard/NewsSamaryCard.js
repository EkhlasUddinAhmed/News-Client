import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsSamaryCard = ({ summaryNews }) => {
  const {
    author,
    details,
    image_url,
    rating,
    title,
    total_view,
    _id,
    category_id,
  } = summaryNews;
  return (
    <div className="card shadow-lg  mb-5">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <img
            src={author?.img}
            alt=""
            style={{ height: "60px" }}
            className="rounded-circle me-3"
          />
          <div>
            <h5>{author?.name}</h5>
            <h5>{author?.published_date}</h5>
            
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-2" />
          <FaShareAlt />
        </div>
      </div>
      <div className="card-body">
        <img className="img-fluid w-100 mb-3" src={image_url} alt="" />
        <h5 className="card-title ">{title}</h5>
        {details.length > 250 ? (
          <p className="card-text">
            {details.slice(0, 250) + "..."}
            <Link to={`/newsdetails/${_id}`}>readmore</Link>
          </p>
        ) : (
          <p className="card-text">{details}</p>
        )}
      </div>
      <div className="card-footer text-body-secondary d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center ">
          <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsSamaryCard;
