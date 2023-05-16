import Image from "next/image";
import SkillContainer from "./SkillContainer";
import { useEffect, useState } from "react";

const skillData = [
  {
    name: "javascript",
    icon: "/images/javascript.svg",
    rating: 4,
    description: "Most used and preferred programming language",
    absolutePosition: [15, 275],
  },
  {
    name: "Figma",
    icon: "/images/figma_icon.svg",
    rating: 4,
    description: "Primary web dev tool",
    absolutePosition: [200, 126],
  },
  {
    name: "NextJS",
    icon: "/images/next_icon.svg",
    rating: 4,
    description: "Primary react framework",
    absolutePosition: [15, -336],
  },
  {
    name: "Html/Css",
    icon: "/images/code_icon.svg",
    rating: 4,
    description: "Estimated 800 hours",
    absolutePosition: [200, -180],
  },
];

const SkillTree = () => {
  const [screenWidth, setScreenWidth] = useState(1000);

  const handleResize = () => {
    setScreenWidth(window.screen.width);
  };

  // gets realtime screen width
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("1");

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(screenWidth);

  return (
    <div className="home-placeholder">
      <div className="home-container04">
        <span className="home-text48">
          <span>Skill Tree</span>
        </span>
      </div>
      {skillData.map((skill, index) => {
        return (
          <SkillContainer
            key={skill.name + index}
            order={index + 1}
            {...skill}
          />
        );
      })}
    </div>
  );

  return (
    <div>
      {skillData.map((skill, index) => {
        return (
          <SkillContainer
            key={skill.name + index}
            order={index + 1}
            {...skill}
          />
        );
      })}
    </div>
  );
};

const SkillSection = (props) => {
  return (
    <section className="home-skills">
      <div
        id="skillsContentContainer"
        className="glassBox home-skills-content-container "
      >
        <h1 className="skillContainerTitle">CHARACTER SKILLS</h1>
        <SkillTree />
        <a href="#statsContentContainer" className="home-nav-button navBlock">
          <Image
            alt="Arrow17321"
            src="/images/arrow.svg"
            className="home-arrow1"
            width={28}
            height={28}
          />
        </a>
        <a
          href="#contactContentContainer"
          className=" navBlock home-nav-button1"
        >
          <img alt="Arrow" src="/images/arrow.svg" className="home-arrow11" />
        </a>
      </div>
      <div className="home-connecting-linear-bg3 connectingLinearBg"></div>
      <div className="home-connecting-linear-bg4 connectingLinearBg"></div>
    </section>
  );
};

export default SkillSection;
