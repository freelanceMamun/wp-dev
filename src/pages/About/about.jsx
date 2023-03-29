import React, { useState, useEffect } from 'react';
import { UseContent } from '../../context/Context';
import MeLogo from '../../asset/image/Me.png';
import '../../scss/About/about.scss';
import { experience } from '../../util/Utility';
import aniMiLogo from '../../asset/image/glasses.png';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import ReduxLogo from '../../asset/redux.png';
import NextJsLogo from '../../asset/nextjs.png';
import ReactLogo from '../../asset/logo192.png';
import ChartSkill from '../../components/chartSkill/ChartSkill';
import { frontData, backend } from '../../util/Utility';
import { motion } from 'framer-motion';
import { MdOutlineSort } from 'react-icons/md';

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
      delayChildren: 0.6,
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

const About = () => {
  const { navToggle, setNavToggle } = UseContent();

  const [skill, setSkill] = useState(null);

  const width = window.innerWidth;

  useEffect(() => {
    const myfun = () => {
      if (width >= 1120) {
        setSkill(500);
      } else {
        setSkill(350);
      }
    };
    myfun();
    return () => {
      myfun();
    };
  }, [navToggle, width]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`AboutPages  ${navToggle === true ? 'close' : 'active'}`}
      style={style2}
    >
      <motion.span
        variants={item}
        className="navToggleBtn"
        onClick={() => setNavToggle(!navToggle)}
      >
        <MdOutlineSort></MdOutlineSort>
      </motion.span>

      <motion.div variants={item} className="about">
        <h1>About Me</h1>
        <div className="about_hero relative">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center ">
              <div className="aboutContent  ms-lg-4 ps-lg-5">
                <h3>
                  Hi, I'm Mamun
                  <img src={aniMiLogo} className="aniMelogo" alt="" />
                </h3>
                <p>
                  A Lead Forn-End Developer Base in Bangladesh Web developer,
                  with extensive knowledge and years of experience, working in
                  web technologies and Ui / Ux design, delivering quality work
                </p>
                <div className="row experience">
                  {experience.map((ex, index) => {
                    return (
                      <div key={index} className="col-lg-4 col-md-6 col-4">
                        <div className="d-flex flex-column">
                          <div className="number">
                            <span className="fs-1">
                              <CountUp start={0} end={ex.number} delay={1} />
                            </span>
                            <span className="fs-2">+</span>
                          </div>
                          <div className="ex_title">{ex.p}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aboutContent  pt-2">
                <div className="imgBox relative shap2">
                  <img src={MeLogo} alt="Me-bg" />
                </div>
                <img className="reduxLogo" src={ReduxLogo} alt=""></img>
                <img className="nextLogo" src={NextJsLogo} alt="" />
              </div>
            </div>
          </div>
          <img src={ReactLogo} className="reactLogo" alt=""></img>
        </div>
      </motion.div>
      <motion.div variants={item} className="headingText pt-5 mt-5 pb-3">
        <h1 className="text-center">My worlflow</h1>
        <p className="text-center">
          always follow professional Workfollow and provide you best service
          with resealable costs
        </p>
      </motion.div>
      <motion.div variants={item} className="row w-100 mb-5 pb-5 AcrodingB ">
        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5">
          <div className="Working_Content mt-lg-5 ms-lg-5 ps-lg-5">
            <h3 className="">
              Design And Plan Your <br />
              Business Growth Steps
            </h3>
            <p>
              Use our staff and our expertise to design and plan your business
              growth strategy. Evolo team is eager to advise you on the best
              opportunities that you should look into
            </p>
            <Link className="btn Choosebtn">Choose your plan</Link>
          </div>
        </div>
        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
          <div
            className="accordion accordion-flush mt-lg-5 pe-lg-5 me-lg-5"
            id="accordionFlushExample"
          >
            <div className="accordion-item mb-2">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Frontend-Developer
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Dynamic Code <br />
                  SEO On page <br />
                  User Frienley
                  <br />
                  Revision
                </div>
              </div>
            </div>
            <div className="accordion-item mb-2">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Back-end Developer
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Dynamic Code <br />
                  Data Base <br />
                  Concept Design
                  <br />
                  Dynamic Animation
                  <br />
                </div>
              </div>
            </div>
            <div className="accordion-item mb-2">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  UI-UX Designer
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  I develop the user interface. <br />
                  Web page development. <br />
                  I create ux element interactions.. <br />I position your
                  company brand.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Search For Optimization Wherever Is Possible
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Basically we'll teach you step by step what you need to do{' '}
                  <br />
                  In order to develop your company and reach new heights <br />
                  Everyone will be pleased from stakeholders to employees
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.h1 variants={item} className="text-center">
        Skill Status
      </motion.h1>
      <div className="skillBar mt-3 pt-3 mb-5 pb-5">
        <motion.div variants={item} className="row w-100">
          <div className="col-lg-6 col-md-6">
            <h4 className="pb-2" style={{ marginLeft: '45px' }}>
              Front-end
            </h4>
            <ChartSkill data={frontData} size={skill}></ChartSkill>
          </div>
          <div className="col-lg-6 col-md-6">
            <h4 className="pb-2" style={{ marginLeft: '45px' }}>
              Back-end
            </h4>
            <ChartSkill data={backend} size={skill}></ChartSkill>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
