import React from "react";

const SkillContainerSVG = () => (
  <svg
    className="skillContainerSVGBG"
    width="221"
    height="132"
    viewBox="0 0 221 132"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M150.059 0.627441H70.8113L1.58691 67.9724V91.4649L70.8113 130.306V119.029H150.059V130.306L219.597 91.4649V67.9724L150.059 0.627441Z"
      fill="#32171E"
    />
  </svg>
);

const SkillContainer = (props) => {
  const { name, icon, rating, description, absolutePosition } = props;
  return (
    <div
      className="skillContainer"
      style={{ top: absolutePosition[0], left: absolutePosition[1] }}
    >
      <SkillContainerSVG />
      <div className="home-skill-name">
        <div>{name}</div>
      </div>
      <div className="skillScoreContainer">
        <img alt={name} src={icon} className="home-vector" />
        <div className="home-text54">{rating}</div>
        <hr className="home-line" />
        <div className="home-text55">5</div>
      </div>

      <div className="home-skill-desc">
        <div>{description}</div>
      </div>
      <hr className="skillContainerRedBlock" />
    </div>
  );
};

export default SkillContainer;
