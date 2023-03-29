import React from 'react';
import { FaStar } from 'react-icons/fa';
import './style.scss';
const SliderCard = ({ name, title, imgsrc }) => {
  return (
    <div className="review_item">
      <div className="test_avater">
        <img src={imgsrc} alt="" />
      </div>
      <div className="ReviewText- mt-5">
        <div className="star mb-2">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
        <p className="text mb-3">
          Use our staff and our expertise to design and plan your business
          growth strategy. Evolo team is eager to advise you on the best
          opportunities that you should look into
        </p>
        <div className="Review-name">
          <p className=" mb-0">{name}</p>
          <span className="">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
