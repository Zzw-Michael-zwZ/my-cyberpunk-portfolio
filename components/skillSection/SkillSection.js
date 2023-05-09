import Image from "next/image";
import SkillContainer from "./SkillContainer";

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
    icon: "/",
    rating: 5,
    description: "Hi mom",
    absolutePosition: [200, 126],
  },
  {
    name: "NextJS",
    icon: "/",
    rating: 5,
    description: "Hi mom",
    absolutePosition: [15, -336],
  },
  {
    name: "Html/Css",
    icon: "/",
    rating: 5,
    description: "Hi mom",
    absolutePosition: [200, -180],
  },
];
const SkillSection = (props) => {
  return (
    <section className="home-skills">
      <div
        id="skillsContentContainer"
        className="home-skills-content-container glassBox"
      >
        <div className="home-placeholder">
          <div className="home-container04">
            <span className="home-text48">
              <span>Skill Tree</span>
            </span>
          </div>
          <div className="home-electric-lines1">
            <div className="home-container05"></div>
            <div className="home-container06"></div>
            <div className="home-container07"></div>
            <div className="home-container08"></div>
            <div className="home-container09"></div>
            <div className="home-container10"></div>
            <div className="home-container11"></div>
            <div className="home-container12"></div>
            <div className="home-container13"></div>
            <div className="home-container14"></div>
            <div className="home-container15"></div>
            <div className="home-container16"></div>
          </div>
          <div className="home-electric-lines2">
            <div className="home-container17"></div>
            <div className="home-container18"></div>
            <div className="home-container19"></div>
            <div className="home-container20"></div>
            <div className="home-container21"></div>
            <div className="home-container22"></div>
            <div className="home-container23"></div>
            <div className="home-container24"></div>
            <div className="home-container25"></div>
            <div className="home-container26"></div>
            <div className="home-container27"></div>
            <div className="home-container28"></div>
          </div>
          <div className="home-electric-lines3">
            <div className="home-container29"></div>
            <div className="home-container30"></div>
            <div className="home-container31"></div>
            <div className="home-container32"></div>
            <div className="home-container33"></div>
            <div className="home-container34"></div>
            <div className="home-container35"></div>
            <div className="home-container36"></div>
            <div className="home-container37"></div>
            <div className="home-container38"></div>
            <div className="home-container39"></div>
            <div className="home-container40"></div>
          </div>
          <div className="home-electric-lines4">
            <div className="home-container41"></div>
            <div className="home-container42"></div>
            <div className="home-container43"></div>
            <div className="home-container44"></div>
            <div className="home-container45"></div>
            <div className="home-container46"></div>
            <div className="home-container47"></div>
            <div className="home-container48"></div>
            <div className="home-container49"></div>
            <div className="home-container50"></div>
            <div className="home-container51"></div>
            <div className="home-container52"></div>
          </div>
          {skillData.map((skill, index) => {
            return <SkillContainer key={skill.name + index} {...skill} />;
          })}
        </div>
        <h1 className="home-text72">CHARACTER SKILLS</h1>
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
          className="home-nav-button1 navBlock "
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
