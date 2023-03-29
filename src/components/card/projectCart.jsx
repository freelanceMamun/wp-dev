import React from 'react';
import logo from '../../asset/image/logo.png';
import './projectcart.scss';

const projectCart = ({ title, date, project, urlLink }) => {
  return (
    <div className="ProjectCart">
      <div className="Project">
        <div className="d-flex gap-3">
          <div className="project-logo">
            <img src={logo} alt=""></img>
          </div>
          <div className="project-title">
            <h6>{title}</h6>
            <p>{project}</p>
          </div>
        </div>
        <p className="date"> Data : {date}</p>
      </div>
      <div className="showlink">
        <a href={urlLink} target="_blank" rel="noopener noreferrer">
          View project
        </a>
      </div>
    </div>
  );
};

export default projectCart;
