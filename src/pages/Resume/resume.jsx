import React from 'react';
import '../../scss/resume/resume.scss';
import { UseContent } from '../../context/Context';
import myImg from '../../asset/image/logo.png';
import {
  personalInfo,
  Education,
  Skill,
  language,
  positions,
} from '../../util/Utility';
import { FaLinkedin } from 'react-icons/fa';
import {
  MdArrowCircleDown,
  MdOutlineFileOpen,
  MdCheckCircle,
  MdOutlineSort,
} from 'react-icons/md';

import { motion } from 'framer-motion';
import EduImg from '../../asset/image/university.png';

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
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const style2 = {
  maxWidth: '80%',
  marginLeft: 'auto',
};

const btns = [
  {
    id: 1,
    name: 'Overview',
  },
  {
    id: 2,
    name: 'Notes',
  },
  {
    id: 3,
    name: 'Tests',
  },

  {
    id: 3,
    name: 'History',
  },
];

const Resume = () => {
  const { navToggle, setNavToggle } = UseContent();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`AboutSection ${navToggle === true ? 'active' : ''}`}
      style={style2}
    >
      <motion.span
        variants={item}
        className="navToggleBtn"
        onClick={() => setNavToggle(!navToggle)}
      >
        <MdOutlineSort></MdOutlineSort>
      </motion.span>

      <motion.div variants={item} className="About">
        <div className="aboutInfo">
          <div className="info">
            <div className="info_content">
              <div className="MeImg">
                <img src={myImg} alt="me" />
              </div>
              <div className="MeTitle">
                <h4 className="title">Muhammad Mamun</h4>
                <p className="subtitle">
                  Coderspace : Junior Full-Stack Developer
                </p>
              </div>
            </div>
          </div>
          <div className="socilaBtn">
            <button className="btn">
              <FaLinkedin></FaLinkedin>
              Linkedin Account
            </button>
          </div>
        </div>
        <div className="aboutNotesBtn">
          <div className="note_btn">
            {btns.map((text, index) => {
              return (
                <button className="btn" key={index}>
                  {text.name}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div variants={item} className="PersonalInfomatios">
        <h5>Personal Informations</h5>
        <div className="informations">
          {personalInfo.map((info) => {
            return (
              <div key={info.id} className="info_content">
                <div className="icons">{info.icons}</div>
                <div className="info">
                  <h6>{info.email}</h6>
                  <p>{info.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div variants={item} className="ResumeCV">
        <h5>Resume</h5>
        <div className="cvFile">
          <div className="filename">
            <span className="icons">
              <MdOutlineFileOpen></MdOutlineFileOpen>
            </span>
            <span className="name">developerMamunCv.doc</span>
          </div>
          <div className="downloadBtn">
            <a
              href="https://drive.google.com/file/d/1rDJppVnmf8l1IHktb-p4GAZDH6abq4tN/view?usp=sharing"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download <MdArrowCircleDown></MdArrowCircleDown>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item} className="eductionsInfo">
        <h5>Education</h5>
        {Education.map((eduinfo) => {
          return (
            <div className="edu_info" key={eduinfo.id}>
              <div className="edu_logo">
                <img src={EduImg} alt="edu-logo"></img>
              </div>
              <div className="edu_infoContent">
                <h5 className="title">{eduinfo.Uname}</h5>
                <p className="subtitle">{eduinfo.Uname}</p>
                <p className="date_place">
                  <span>{eduinfo.date}</span>
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div variants={item} className="positions">
        <h5>Preffered Positions</h5>
        {positions.map((position, index) => {
          return (
            <div className="info_post" key={index}>
              <div className="info">
                <div className="text">
                  <h6>{position.name}</h6>
                  <span>
                    <MdCheckCircle></MdCheckCircle>
                  </span>
                </div>
                <div className="status">
                  <span>{position.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      <motion.div variants={item} className="skillsinfo">
        <h5>Skills</h5>
        <div className="skillsBtn">
          {Skill.map((text, index) => {
            return (
              <button key={index} className="btn">
                {text}
              </button>
            );
          })}
        </div>
      </motion.div>
      <motion.div variants={item} className="language">
        <h5>Language</h5>
        <div className="LanguageInfo">
          {language.map((text, index) => {
            return (
              <div className="langu_info" key={index}>
                <div className="EnCode">
                  <span>{text.sName}</span>
                </div>
                <div className="langu_name">
                  <h6>{text.name}</h6>

                  <p>{text.language + ' Language'}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
