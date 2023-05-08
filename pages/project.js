import React from "react";
import Head from "next/head";

import Navbar from "../components/navbar";

const Project = (props) => {
  return (
    <>
      <div className="project-container">
        <Head>
          <title>Project - Cyberpunk Profolio</title>
          <meta property="og:title" content="Project - Cyberpunk Profolio" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="project-info">
          <span className="project-text">
            <span>Last update: XXXX-XX-XX</span>
          </span>
          <article className="project-project-container">
            <img
              alt="omniCalc"
              src="/images/omni_homgpage.webp"
              className="project-project-image"
            />
            <div className="project-project-text-container">
              <h1 className="project-text2">
                <span>PROJECT TITLE</span>
              </h1>
              <p className="project-text4">
                <span>
                  Here lies a random description as a placee filler , yes i know
                  pretty crazy right
                </span>
              </p>
              <div className="project-container1">
                <span className="project-text6">
                  <span>
                    Built with:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
                <img
                  alt="Vector7968"
                  src="/images/vector7968-8hkm.svg"
                  className="project-vector"
                />
                <img
                  alt="Vector7968"
                  src="/images/vector7968-8hkm.svg"
                  className="project-vector1"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
      <style jsx>
        {`
          .project-container {
            width: 100%;
            display: flex;
            background: linear-gradient(
              180deg,
              #140303 0%,
              #0b0909 16.84%,
              #0b0909 79.34%,
              #140303 100%
            );
            min-height: 100vh;
            align-items: center;
            padding-top: 68px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .project-info {
            width: 100%;
            height: 927px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .project-text {
            color: var(--dl-color-default-white85primary);
            margin: 38px;
            opacity: 0.8;
            font-size: 14px;
            font-family: Play;
            text-shadow: 0px 0px 15px rgba(178, 211, 232, 0.5),
              0px 0px 40px rgba(73, 155, 206, 0.5);
          }
          .project-project-container {
            width: 780px;
            height: 280px;
            display: flex;
            align-items: center;
            margin-bottom: 88px;
          }
          .project-project-image {
            left: 8px;
            width: 55%;
            height: 95%;
            position: relative;
            box-shadow: 0px 0px 23.202299118041992px 0px rgba(68, 18, 18, 1);
            object-fit: cover;
          }
          .project-project-text-container {
            gap: 18px;
            width: 55%;
            height: 100%;
            display: flex;
            padding: 1.5em;
            box-shadow: 0px 0px 23.202299118041992px 0px rgba(68, 18, 18, 1);
            padding-left: 1.8em;
            flex-direction: column;
            background-color: rgba(50, 23, 30, 0.47999998927116394);
          }
          .project-text2 {
            color: var(--dl-color-default-white85primary);
            height: auto;
            font-size: 32px;
            font-family: Play;
            font-weight: normal;
            text-shadow: 0px 0px 15px rgba(178, 211, 232, 0.5),
              0px 0px 40px rgba(73, 155, 206, 0.5);
          }
          .project-text4 {
            color: var(--dl-color-default-white85primary);
            width: 100%;
            height: 38%;
            font-size: 18px;
            font-family: Play;
            text-shadow: 0px 0px 15px rgba(178, 211, 232, 0.5),
              0px 0px 40px rgba(73, 155, 206, 0.5);
          }
          .project-container1 {
            gap: 8px;
            display: flex;
            flex-wrap: wrap;
          }
          .project-text6 {
            color: var(--dl-color-default-white85primary);
            width: 100%;
            font-size: 16px;
            font-family: Play;
            text-shadow: 0px 0px 15px rgba(178, 211, 232, 0.5),
              0px 0px 40px rgba(73, 155, 206, 0.5);
          }
          .project-vector {
            width: 38px;
            height: 38px;
            box-shadow: 0px 0px 11.601149559020996px 0px
              rgba(178, 211, 232, 0.5);
          }
          .project-vector1 {
            width: 38px;
            height: 38px;
            box-shadow: 0px 0px 11.601149559020996px 0px
              rgba(178, 211, 232, 0.5);
          }
          @media (max-width: 767px) {
            .project-info {
              height: auto;
            }
            .project-project-container {
              width: 380px;
              height: auto;
              flex-direction: column;
            }
            .project-project-image {
              left: 0;
              width: 100%;
            }
            .project-project-text-container {
              width: 100%;
              padding-left: 1.5em;
            }
            .project-text2 {
              font-size: 28px;
            }
            .project-text4 {
              font-size: 14px;
            }
            .project-text6 {
              font-size: 12px;
            }
          }
          @media (max-width: 479px) {
            .project-project-container {
              width: 95%;
              max-width: 360px;
            }
            .project-text2 {
              font-size: 22px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Project;
