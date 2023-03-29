import React from 'react';
import { MdCalendarToday, MdPersonPin } from 'react-icons/md';
const blogCard = ({ thumbel, SortTitle }) => {
  return (
    <div className="blog-Cart">
      <div className="blog_img">
        <img src={thumbel} alt=""></img>
      </div>
      <div className="contentBlog">
        <h5>{SortTitle}</h5>
        <div className="dateORAuthor">
          <div className="date d-flex align-items-center">
            <span className="me-1 icons">
              <MdCalendarToday></MdCalendarToday>
            </span>
            <span>Jan 9, 2011</span>
          </div>
          <div className="authorName d-flex align-items-center">
            <span className="icons me-1">
              <MdPersonPin></MdPersonPin>
            </span>
            <span>mamun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogCard;
