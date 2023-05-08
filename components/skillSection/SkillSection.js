import Image from "next/image";
import SkillContainer from "./SkillContainer";

const skillData = [
  {
    name: "javascript",
    icon: "/",
    rating: 5,
    description: "Hi mom",
    absolutePosition: [15, 275],
  },
  {
    name: "javascript",
    icon: "/",
    rating: 5,
    description: "Hi mom",
    absolutePosition: [0, 0],
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
          {skillData.map((skill) => {
            return <SkillContainer {...skill} />;
          })}

          <div className="home-skill4">
            <img
              alt="Vector4I672"
              src="/images/skillContainer.svg"
              className="home-vector41"
            />
            <span className="home-text56">
              <span>
                Most used and preferred programming language
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <span className="home-text58">
              <span>Javascript</span>
            </span>
            <div className="home-js1"></div>
            <div className="home-group71">
              <span className="home-text60">4</span>
              <span className="home-text61">5</span>
              <img
                alt="Line2I672"
                src="/images/blueDivideLine.svg"
                className="home-line21"
              />
            </div>
            <img
              alt="Rectangle13I672"
              src="/images/redRectangle.png"
              className="home-rectangle131"
            />
          </div>
          <div className="home-skill3">
            <img
              alt="Vector4I672"
              src="/images/skillContainer.svg"
              className="home-vector42"
            />
            <span className="home-text62">
              <span>
                Most used and preferred programming language
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <span className="home-text64">
              <span>Javascript</span>
            </span>
            <div className="home-js2"></div>
            <div className="home-group72">
              <img
                alt="VectorI672"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="home-vector2"
              />
              <span className="home-text66">4</span>
              <span className="home-text67">5</span>
              <img
                alt="Line2I672"
                src="/images/blueDivideLine.svg"
                className="home-line22"
              />
            </div>
            <img
              alt="Rectangle13I672"
              src="/images/redRectangle.png"
              className="home-rectangle132"
            />
          </div>
          <div className="home-skill1">
            <img
              alt="Vector4I672"
              src="/images/skillContainer.svg"
              className="skillContainerSVGBG"
            />
            <span className="home-skill-name">
              <span>Javascript</span>
            </span>
            <div className="home-skill-score">
              <img
                alt="VectorI672"
                src="/images/skillContainer.svg"
                className="home-vector3"
              />
              <div className="home-container53">
                <span className="home-text69">3</span>
                <div className="home-container54"></div>
                <span className="home-text70">5</span>
              </div>
              <img
                alt="Line2I672"
                src="/images/blueDivideLine.svg"
                className="home-line23"
              />
            </div>
            <span className="home-skill-desc">
              <span>
                Most used and preferred programming language
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <div className="skillContainerRedBlock"></div>
          </div>
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
