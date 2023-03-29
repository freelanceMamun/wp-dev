import React, { useEffect, useState } from 'react';
import { MdEmail } from 'react-icons/md';
import '../../scss/Uploading/uploading.scss';
import { Skill } from '../../util/Utility';
import Shape from '../../asset/image/My Shape1.png';
import { MdOutlineUploadFile } from 'react-icons/md';
import { storage, db } from '../../firebase/firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { MdOutlineSort } from 'react-icons/md';
import { UseContent } from '../../context/Context';
const style2 = {
  maxWidth: '81%',
  marginLeft: 'auto',
};

const initalState = {
  projectName: '',
  clientUrl: ' ',
  sourceUrl: '',
  details: '',
  status: null,
  id: uuidv4(),
  tools: [],
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

const UploadProject = () => {
  const [mainState, setMainState] = useState(initalState);
  const [progrss, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const { setNavToggle, navToggle } = UseContent();
  const { projectName, clientUrl, sourceUrl, details } = mainState;

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, `myInfo/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress.toFixed(1));
          switch (snapshot.state) {
            case 'paused':
              console.log('upload is pause!');
              break;
            case 'running':
              console.log('upload is runnig');
              break;
            case 'success':
              return toast.success('Upload Successfully');

            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrL) => {
            toast.success('Upload Successfully');
            setMainState((prevState) => ({
              ...prevState,
              img: downloadUrL,
              id: uuidv4(),
            }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const onchangeEvent = (e) => {
    return setMainState({ ...mainState, [e.target.name]: e.target.value });
  };

  const SubmitInfData = async (e) => {
    e.preventDefault();
    setMainState({ ...mainState, tools: mainState.tools });
    try {
      await addDoc(collection(db, 'Info'), {
        ...mainState,
        timeStamp: serverTimestamp(),
      });
      toast.success('Project Info uploading successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="UploadingInfo"
      style={style2}
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
          <div className=" col-xl-12 col-12 d-flex InfoSide justify-content-center">
            <div className="infoContent mb-3 mt-4">
              <h1>My Informations. Uploading Task.</h1>
              <p className="text1">🤝 Let's uploading info 🤝</p>
              <div className="emai mt-2">
                <span className="icons">
                  <MdEmail></MdEmail>
                </span>
                <p>
                  <span>Mail me at</span>
                  <span>mamunkhan@gamil.com</span>
                </p>
              </div>
              <img src={Shape} alt="shape" className="shape"></img>
            </div>
          </div>
          <div className="col-xl-12 col-12">
            <div className="contactForm relative mb-5">
              <h3> Project Informations 🚀</h3>
              <form className="form" onSubmit={SubmitInfData}>
                <div className="inputbox mb-4">
                  <input
                    name="projectName"
                    type="text"
                    value={projectName}
                    placeholder="Project name*"
                    onChange={onchangeEvent}
                    required
                  ></input>
                </div>
                <div className="inputbox mb-4">
                  <input
                    name="clientUrl"
                    type="text"
                    placeholder="Client Live URL"
                    onChange={onchangeEvent}
                    value={clientUrl}
                    required
                  ></input>
                </div>
                <div className="inputbox mb-4">
                  <input
                    name={'sourceUrl'}
                    type="text"
                    value={sourceUrl}
                    required
                    onChange={onchangeEvent}
                    placeholder="Source Code URL*"
                  ></input>
                </div>
                <div className="inputbox mb-4">
                  <textarea
                    name={'details'}
                    value={details}
                    type="text"
                    required
                    onChange={onchangeEvent}
                    placeholder="details*"
                  ></textarea>
                </div>
                <div className="inputbox mb-4">
                  <label className="label">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      hidden
                      className="file-input"
                    />
                    <MdOutlineUploadFile className="fs-1"></MdOutlineUploadFile>
                    <p className="mt-2">Browse File to Upload</p>
                    <span>{progrss}</span>
                  </label>
                </div>

                <div className="form-check form-switch mt-1 mb-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    value={true}
                    name={'status'}
                    onChange={onchangeEvent}
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Complete Status Check
                  </label>
                </div>

                <div className="toolsBtn">
                  {Skill.map((text, index) => {
                    return (
                      <button
                        className="toolButton btn ms-1 mt-1 mb-1"
                        type="button"
                        key={index}
                        value={text}
                        onClick={() => mainState.tools.push(text)}
                      >
                        {text}
                      </button>
                    );
                  })}
                </div>

                <button className="ms-1 mt-2 mb-2" type="submit">
                  Upload Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UploadProject;
