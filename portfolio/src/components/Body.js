import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/Software.png';

const Body = () => {
  return (
    <div className="body">
      <div className="body-container">
        <div className="body-profile">
          <img className="body-img" alt="avatar" src={Image}/>
          <div className="body-content">
            <div className="body-headline">Grace Messo</div>
            <div className="body-text">Student</div>
            <div className="body-icons">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-link">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;