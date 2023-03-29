import React from 'react';
import { UseContent } from '../../context/Context';
import './project.scss';
import logo from '../../asset/image/logo.png';

import { Link } from 'react-router-dom';
import { GoMarkGithub, GoLink } from 'react-icons/go';
import { MdOutlineSort } from 'react-icons/md';
import { motion } from 'framer-motion';
import { TimeHoc } from '../../hoc/timeHoc';
const style2 = {
  maxWidth: '80%',
  marginLeft: 'auto',
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.6,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Project = () => {
  const { navToggle, setNavToggle, dataInfo } = UseContent();
  console.log(dataInfo);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      style={style2}
      className={`projectSection ${navToggle === true ? 'active' : ''}`}
    >
      <motion.span
        variants={item}
        className="navToggleBtn"
        onClick={() => setNavToggle(!navToggle)}
      >
        <MdOutlineSort></MdOutlineSort>
      </motion.span>
      <motion.div variants={item} className="headingText mt-5">
        <h2 className="text-center">Project views</h2>
      </motion.div>
      <div className="reactProject">
        <motion.div className="title mb-2 border-bottom pb-1" variants={item}>
          <h4>Full-Project</h4>
        </motion.div>
        <div className="row mt-3 viewproject">
          {dataInfo?.map((cart) => {
            return (
              <motion.div
                variants={item}
                className="col-xl-4 col-lg-6 col-md-6 mb-3 col-12"
                key={cart.id}
              >
                <div className="ProjectCart">
                  <div className="Project">
                    <div className="d-flex gap-3">
                      <div className="project-logo">
                        <img src={logo} alt=""></img>
                      </div>
                      <div className="project-title">
                        <h6>{cart?.projectName}</h6>
                        <p>Tols : {cart?.tools.slice(0, 80) + '...'}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="date">
                        Date: {TimeHoc(cart?.timeStamp.seconds).slice(0, 10)}
                      </p>
                      <p>Status :{cart.status && 'Complete'}</p>
                    </div>
                  </div>
                  <div className="showlink d-flex justify-content-between">
                    <Link className="viewPro">View project</Link>
                    <div className="projectshowCase">
                      <a
                        href={cart?.clientUrl === '' ? null : cart?.clientUrl}
                        target="_blank"
                        rel="noreferrer noopeners"
                      >
                        <GoLink></GoLink> Client Side
                      </a>
                      <a
                        href={cart?.sourceUrl}
                        target={'_blank'}
                        rel="noreferrer noopeners"
                      >
                        <GoMarkGithub></GoMarkGithub>
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
