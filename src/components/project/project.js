import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Project.scss';
import { ProjectFilter } from '../../util/Utility';
const filter = [
  'View all',
  'Projuct design',
  'Web design',
  'App design',
  'UI-UX research',
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const btnStyle = {
  backgroundColor: '#dbcdfad3',
  color: '#654E9C',
};
const Project = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState(ProjectFilter);

  const ActiveList = (currentIndex, text) => {
    const dataFilter = ProjectFilter.filter((cart) => cart.categories === text);
    if (dataFilter.length === 0) {
      setActive(currentIndex);
      return setData(ProjectFilter);
    } else {
      setData(dataFilter);
    }
    setActive(currentIndex);
  };
  return (
    <div className="ProjectPreview">
      <h4 className="title">Projects</h4>
      <div className="filterBtn">
        <ul className="listItem">
          {filter.map((text, index) => {
            return (
              <li
                onClick={() => ActiveList(index, text)}
                className={`listBtn`}
                style={active === index ? btnStyle : null}
                key={index}
              >
                {text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="ProjectImage">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="row"
          layout
        >
          {data.map((cart) => {
            return (
              <motion.div
                layout
                transition={{ duration: 0.4 }}
                variants={item}
                key={cart.id}
                className="col-xl-3 col-lg-4 mb-3 col-md-6 col-12"
              >
                <div className="image">
                  <img src={cart.url} alt=""></img>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
