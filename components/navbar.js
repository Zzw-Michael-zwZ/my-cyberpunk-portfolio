import React from "react";
import Link from "next/link";

import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <>
      <header className={`navbar-navbar ${props.rootClassName} `}>
        <div className="navbar-container">
          <nav className="navbar-container1">
            <Link href="/" className="navbar-link">
              <div className="navbar-home-nav-button navContainer">
                <svg
                  className="navbar-home"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_665_2560)">
                    <path
                      d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_665_2560">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="navbar-text">
                  <span>Home</span>
                </span>
              </div>
            </Link>
            <Link href="/project" className="navbar-link">
              <div className="navbar-project-nav-button navContainer">
                <svg
                  className="navbar-folder"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_665_2565)">
                    <path
                      d="M11.17 8L10.59 7.41L9.17 6H4V18H20V8H12H11.17Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L10.58 7.41L11.17 8H20V18Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_665_2565">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="navbar-text">
                  <span>Projects</span>
                </span>
              </div>
            </Link>
          </nav>
          <Link href="/#contactContentContainer" className="navbar-link">
            <div className="navbar-project-nav-button navContainer">
              <svg
                className="navbar-person"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_665_2556)">
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_665_2556">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="navbar-text">
                <span>Contact</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-container3"></div>
      </header>
      <style jsx>
        {`
          .navbar-navbar {
            top: 0;
            width: 100%;
            height: 68px;
            display: flex;
            padding: 18px;
            z-index: 888;
            position: fixed;
            box-shadow: 0px 0px 30px 0px rgba(68, 18, 18, 1);
            align-items: flex-end;
            border-color: transparent;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-default-cyberbackground);
            background-image: linear-gradient(
              180deg,
              rgba(20, 3, 3, 1) 0%,
              rgba(11, 9, 9, 1) 17%,
              rgba(11, 9, 9, 1) 79%,
              rgba(20, 3, 3, 1) 100%
            );
          }
          .navbar-container {
            top: 8px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .navbar-container1 {
            gap: 18px;
            height: fit-content;
            display: flex;
          }
          .navbar-link {
            display: contents;
          }
          .navbar-home-nav-button {
            text-decoration: none;
          }
          .navbar-home {
            width: 16px;
            height: 16px;
          }
          .navbar-text {
            font-size: 16px;
            font-style: Regular;
            font-family: Play;
            font-weight: 400;
          }
          .navbar-project-nav-button {
            text-decoration: none;
          }
          .navbar-folder {
            width: 16px;
            height: 16px;
          }
          .navbar-text2 {
            font-size: 16px;
            font-style: Regular;
            font-family: Play;
            font-weight: 400;
          }
          .navbar-person {
            width: 16px;
            height: 16px;
          }
          .navbar-text4 {
            font-size: 16px;
            font-style: Regular;
            font-family: Play;
            font-weight: 400;
          }
          .navbar-container3 {
            width: 100%;
            height: 1px;
            box-shadow: 0px 0px 15px 0px rgba(91, 45, 58, 1);
            background-color: var(--dl-color-default-brightred);
          }
        `}
      </style>
    </>
  );
};

Navbar.defaultProps = {
  rootClassName: "",
  home_alt: "homeI627",
  folder_src: "/playground_assets/folderi627-xvm5.svg",
  person_alt: "personI627",
  person_src: "/playground_assets/personi627-kvcm.svg",
  home_src: "/playground_assets/homei627-wecnj.svg",
  folder_alt: "folderI627",
};

Navbar.propTypes = {
  rootClassName: PropTypes.string,
  home_alt: PropTypes.string,
  folder_src: PropTypes.string,
  person_alt: PropTypes.string,
  person_src: PropTypes.string,
  home_src: PropTypes.string,
  folder_alt: PropTypes.string,
};

export default Navbar;
