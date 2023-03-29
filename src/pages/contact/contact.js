import React, { useState } from 'react';
import '../../scss/contact/contact.scss';
import { UseContent } from '../../context/Context';
import Shape from '../../asset/image/My Shape1.png';
import { MdEmail, MdOutlineSort } from 'react-icons/md';

import { motion } from 'framer-motion';

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

const initalState = {
  name: '',
  email: '',
  subject: '',
  text: '',
};
const ContactUs = () => {
  const { navToggle, setNavToggle } = UseContent();
  const [state, setState] = useState(initalState);

  const onChangeEvent = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const fromSubmitEventHandel = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      style={style2}
      className="ContactInforamation"
    >
      <motion.span
        variants={item}
        className="navToggleBtn"
        onClick={() => setNavToggle(!navToggle)}
      >
        <MdOutlineSort></MdOutlineSort>
      </motion.span>
      <div className="container">
        <div className="row">
          <div className=" col-xl-6 col-lg-12 col-12 d-flex InfoSide">
            <motion.div variants={item} className="infoContent">
              <h1>
                Let's chat. <br></br> Tell me about your project.
              </h1>
              <p className="text1">🤝 Let's create somethging together 🤝</p>
              <div className="emai">
                <span className="icons">
                  <MdEmail></MdEmail>
                </span>
                <p>
                  <span>Mail me at</span>
                  <span>mamunkhan@gamil.com</span>
                </p>
              </div>
              <img src={Shape} alt="shape" className="shape"></img>
            </motion.div>
          </div>
          <div className="col-xl-6 col-lg-12 col-12">
            <motion.div variants={item} className="contactForm">
              <h3>Send us a message🚀</h3>
              <form onSubmit={fromSubmitEventHandel} className="form">
                <div className="inputbox">
                  <input
                    onChange={onChangeEvent}
                    name="name"
                    value={state.name}
                    type="text"
                    placeholder="Full name*"
                    required
                  ></input>
                </div>
                <div className="inputbox">
                  <input
                    onChange={onChangeEvent}
                    name="email"
                    value={state.email}
                    type="email"
                    required
                    placeholder="Email address*"
                  ></input>
                </div>
                <div className="inputbox">
                  <input
                    onChange={onChangeEvent}
                    type="text"
                    name="subject"
                    value={state.subject}
                    placeholder="Subject*"
                    required
                  ></input>
                </div>
                <div className="inputbox">
                  <label>Tell us more about your project*</label>
                  <textarea
                    onChange={onChangeEvent}
                    value={state.text}
                    name="text"
                    required
                  ></textarea>
                </div>
                <button type="submit">Send message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
