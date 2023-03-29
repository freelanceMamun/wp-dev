import React from 'react';
import '../../scss/Blog/blog.scss';

import { UseContent } from '../../context/Context';
const style = {
  maxWidth: '94%',
  marginLeft: 'auto',
};

const style2 = {
  maxWidth: '81%',
  marginLeft: 'auto',
};

const Blog = () => {
  const { navToggle } = UseContent();
  return (
    <div style={navToggle ? style : style2} className="blogPages">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="blog-Cart">
              <img
                src="https://assets.website-files.com/5d04fc355b89160a98bf3697/5d08cdac95e837798a81058c_will-francis-1070259-unsplash-thumb.jpg"
                alt=""
              ></img>
              <div className="contentBlog">
                <h5>Elastic Themes And The Chuck Norris Effect</h5>
                <div className="dateOR Author">
                  <div className="date">
                    <span>icons</span>
                    <span>Jan 9, 2011</span>
                  </div>
                  <div className="authorName">
                    <span>icons</span>
                    <span>Mamun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">Hello</div>
          <div className="col-lg-3">Hello</div>
          <div className="col-lg-3">Hello</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
