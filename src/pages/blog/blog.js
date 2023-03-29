import React from 'react';
import '../../scss/Blog/blog.scss';
import { UseContent } from '../../context/Context';
import BlogCard from '../../components/blogCard/blogCard';
import { BlogCardData } from '../../util/Utility';
import { MdOutlineSort } from 'react-icons/md';
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

const Blog = () => {
  const { navToggle, setNavToggle } = UseContent();

  return (
    <div style={style2} className="blogPages">
      <motion.span
        variants={item}
        className="navToggleBtn"
        onClick={() => setNavToggle(!navToggle)}
      >
        <MdOutlineSort></MdOutlineSort>
      </motion.span>
      <div className="container mt-5 ">
        <h2>More Posts from Reader</h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="row mt-4"
        >
          {BlogCardData.map((card) => {
            return (
              <motion.div
                variants={item}
                className=" col-xl-3 col-lg-4  col-md-6 col-12 mb-4"
                key={card.id}
              >
                <BlogCard
                  thumbel={card.thumbel}
                  SortTitle={card.sortTitle}
                  id={card.id}
                ></BlogCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
