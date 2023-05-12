import css from "./electricLines.module.css";

const SkillContainerSVG = () => (
  <svg
    className={css.skillContainerSVGBG}
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

const ElectricLines = ({ order }) => (
  <div
    className={`${css.electricLinesContainer} ${
      css[`electricLinesContainer${order}`]
    }`}
  >
    <div className={`${css.electricLine} ${css.Line1} `}></div>
    <div className={`${css.electricLine} ${css.Line2} `}></div>
    <div className={`${css.electricLine} ${css.Line3} `}></div>
    <div className={`${css.electricLine} ${css.Line4} `}></div>
    <div className={`${css.electricLine} ${css.Line5} `}></div>
    <div className={`${css.electricLine} ${css.Line6} `}></div>
    <div className={`${css.electricLine} ${css.Line7} `}></div>
    <div className={`${css.electricLine} ${css.Line8} `}></div>
    <div className={`${css.electricLine} ${css.Line9} `}></div>
    <div className={`${css.electricLine} ${css.Line10} `}></div>
    <div className={`${css.electricLine} ${css.Line11} `}></div>
    <div className={`${css.electricLine} ${css.Line12} `}></div>
  </div>
);

const SkillContainer = (props) => {
  const { name, icon, rating, description, absolutePosition, order } = props;
  console.log(order);
  return (
    <div
      className={css.skillContainer}
      style={{ top: absolutePosition[0], left: absolutePosition[1] }}
    >
      <SkillContainerSVG />
      <div className="home-skill-name">
        <div>{name}</div>
      </div>
      <div className={css.skillScoreContainer}>
        <div className="home-vector">
          <img alt={name} src={icon} />
        </div>
        <div className="home-text54">{rating}</div>
        <hr className="home-line" />
        <div className="home-text55">5</div>
      </div>

      <div className={css.skillDescription}>
        <div>{description}</div>
      </div>
      <hr className={css.skillContainerRedBlock} />

      <ElectricLines order={order} />
    </div>
  );
};

export default SkillContainer;
