import React from 'react';
import '../../scss/Hero/hero.scss';
import { MdAdd } from 'react-icons/md';
import userLogo from '../../asset/image/logo.png';
import { Link } from 'react-router-dom';
import ProjectCart from '../../components/card/projectCart';
import { UseContent } from '../../context/Context';
import Project from '../../components/project/project';
import { motion } from 'framer-motion';
import Slider from '../../components/slider/slider';
import { MdOutlineSort } from 'react-icons/md';
import { TimeHoc } from '../../hoc/timeHoc';
const style2 = {
  maxWidth: '82%',
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
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Home = () => {
  const { navToggle, setNavToggle, dataInfo } = UseContent();

  return (
    <div className="myhomeContainer" style={style2}>
      <div className="home">
        <div className="divider">
          <span
            className="navToggleBtn"
            onClick={() => setNavToggle(!navToggle)}
          >
            <MdOutlineSort></MdOutlineSort>
          </span>
        </div>
        <div className="userProfileContent">
          <div className="imageOrTitle">
            <div className="image">
              <img src={userLogo} alt="mamun..."></img>
            </div>
            <div className="nameContent">
              <div className="name">
                <h4> Developer Mamun</h4>
                <p>I'm Product Designer and Font-end Developer In React JS</p>
              </div>
            </div>
          </div>
          <div className="mySocilInfo">
            <div className="infoBtn">
              <button>...</button>
              <button>View portfolio</button>
              <button>
                <MdAdd></MdAdd> Follow
              </button>
            </div>
          </div>
        </div>
        <motion.div variants={item} className="ExprienceDescriptions">
          <h4>Experience</h4>
          <p>
            I specialize in Front-end custom coding design,brand strategy,and
            Webflow development.
          </p>
        </motion.div>
        <div className="aboutSrotDis">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutMe">
                <h4>About me</h4>
                <p>
                  I'm Full-Stack Front-end Focus Developer in React Or Next JS.
                  I specialize in Front-end custom coding design and Webfollw in
                  development. I specialize in Convert Figma, PSD, OR XD File
                  Landing page Designer. I'm always striving to grow and learn
                  something new and I take myself to seriously. I'm passionate
                  about helping startups grow, improve their customer
                  experience, and to raise venture capital throught good design.
                </p>
                <Link>Read more</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="address">
                <h5>Location</h5>
                <p>Dhaka,Bangladesh</p>
              </div>
              <div className="resume">
                <h5>Github</h5>
                <p>
                  <a
                    href="https://github.com/freelanceMamun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FreelanceMamun.github.com
                  </a>
                  <></>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="website">
                <h5>Website</h5>
                <p>
                  <a
                    href="https://portfolio-webpage82.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    portfolio-netlify.app
                  </a>
                </p>
              </div>

              <div className="Email">
                <h5>Email</h5>
                <p>
                  <Link>mamunkhan16345@gmail.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="projectCartD">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="row"
          >
            {dataInfo?.map((cart) => {
              return (
                <motion.div
                  variants={item}
                  className=" col-xl-4 col-lg-6 mb-3 col-md-6"
                  key={cart.id}
                >
                  <ProjectCart
                    title={cart.projectName}
                    date={TimeHoc(cart?.timeStamp.seconds).slice(0, 10)}
                    project={cart.tools}
                    urlLink={cart.clientUrl}
                  ></ProjectCart>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div className="showProjectDemo">
          <Project></Project>
        </div>

        <div className="HappyClient pt-4">
          <div className="review_header">
            <h4>Happy Client</h4>
          </div>
          <div className="SliderCompoents pt-3 mb-5 pb-5">
            <div className="row" style={{ maxWidth: '100%' }}>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="review_img">
                  <video
                    autoPlay
                    loop="loop"
                    muted="muted"
                    src="https://cdnl.iconscout.com/lottie/premium/thumb/employee-communicating-6128439-5073101.mp4"
                  ></video>
                </div>
              </div>
              <div className=" col-xl-6 col-lg-12 col-md-12">
                <Slider></Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
