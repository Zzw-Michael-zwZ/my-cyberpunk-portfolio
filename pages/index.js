import Image from "next/image";
import Head from "next/head";
import { Parallax } from "react-parallax";

import Navbar from "../components/navbar";
import SkillSection from "../components/skillSection/SkillSection";

const Home = (props) => {
  // try dynamically change the blurryness, most blurr when in the middle and not blurred if at start or finish

  return (
    <>
      <div className="home-container">
        <Head>
          <title>Cyberpunk Profolio</title>
          <meta property="og:title" content="Cyberpunk Profolio" />
        </Head>
        <Navbar />
        <Parallax
          strength={180}
          bgImage={"/images/cyber_vendetta.webp"}
          style={{ width: "100%" }}
        >
          <section className="home-hero">
            <div
              id="heroContentContainer"
              className="home-hero-content-container"
            >
              <section id="Intro" className="home-group14">
                <img
                  alt="image46672"
                  src="/images/profilePic.png"
                  className="home-profile-pic"
                />
                <div className="glassBox home-frame17">
                  <h1 className="home-text">
                    <span>INTRO</span>
                  </h1>
                  <p className="home-text02">
                    <span>
                      &quot;Programming is the art of crafting solutions to
                      complex problems with code, and as a young and bold
                      programmer, I embrace the challenge and seek to leave my
                      mark on the digital world&quot;
                    </span>
                  </p>
                </div>
                <nav className="home-section-nav">
                  <div className="home-group33 navBlock">
                    <span className="home-text04">SEE PROJECT</span>
                  </div>
                  <a href="#statsContentContainer" className="home-link">
                    <div className="home-group34 navBlock">
                      <span className="home-text05">
                        <span>VIEW STATS &amp;</span>
                        <br></br>
                        <span>SKILLS</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </nav>
              </section>
              <div className="home-mouse-button-container">
                <a href="#statsContentContainer" className="home-link">
                  <div className="home-mouse-container">
                    <Image
                      alt="mouse6672"
                      src="/images/mouse6672-l7m.svg"
                      className="home-mouse"
                      width={18}
                      height={18}
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="home-connecting-linear-bg connectingLinearBg"></div>
          </section>
        </Parallax>
        <Parallax
          strength={180}
          bgImage={"/images/cyber_city.webp"}
          style={{ width: "100%" }}
        >
          <section className="home-stats">
            <div className="home-connecting-linear-bg1 connectingLinearBg"></div>
            <div
              id="statsContentContainer"
              className="home-stats-content-container"
            >
              <div className="home-frame171 glassBox">
                <span className="home-decor-text">
                  <span>
                    <span>C̷̢̟̬̤͕̦̖̰͚̔̔̄͑͐͆͠y̴̢̢̢̨̞̼̳̗͚̖̟̿̓͌̑̆͂͘͜͝b̴̨̡̲̖̺͕̩̞͍̦̿̆͊͋̏̏̏̏͊̈͆̕é̸̺͖͈̤̙̰̰̣̘͈̦̒̆̎̂̅̕͝r̷̨̡̢̝̗̘͍͎̬̦͈͌̓̒̔̄̓̾̽̋́͒͌̈́ṕ̵̡̪̼͖̬͔͑͆̾̂̑̾̀͆̑͂̅̋̃͛̄͠</span>
                    <br></br>
                    <span></span>
                  </span>
                </span>
                <h1 className="home-text14">
                  <span>CHARACTER STATS</span>
                </h1>
                <div className="home-name">
                  <div className="home-group38">
                    <img
                      alt="personpin6726"
                      src="/images/personpin1.svg"
                      className="home-personpin"
                    />
                    <span className="home-text16">
                      <span>NAME</span>
                    </span>
                  </div>
                  <p className="home-text18">
                    <span>MICHAEL</span>
                  </p>
                </div>
                <div className="home-job--lass">
                  <div className="home-group37">
                    <img
                      alt="personpin6726"
                      src="/images/personpin1.svg"
                      className="home-personpin1"
                    />
                    <span className="home-text20">
                      <span>JOB CLASS</span>
                    </span>
                  </div>
                  <p className="home-text22">
                    <span>lvl 20 Front End Software Engineer</span>
                  </p>
                </div>
                <div className="home-attributes">
                  <div className="home-group36">
                    <img
                      alt="personpin6726"
                      src="/images/personpin2.svg"
                      className="home-personpin2"
                    />
                    <span className="home-text24">
                      <span>ATTRIBUTES</span>
                    </span>
                  </div>
                  <span className="home-text26">
                    <span>
                      Designer, Programmer, Student , Bold
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="home-bio">
                  <div className="home-group35">
                    <img
                      alt="personpin6726"
                      src="/images/personpin1.svg"
                      className="home-personpin3"
                    />
                    <span className="home-text28">
                      <span>BIO</span>
                    </span>
                  </div>
                  <p className="home-text30">
                    <span className="home-text31">
                      <span>
                        HI, my name is Michael and I have yet to come up
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        with what i should put in my BIO. Im open to any
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                    <span className="home-text37">GOOD</span>
                    <span> suggestions</span>
                  </p>
                </div>
              </div>
              <div className="home-section-nav1">
                <a href="#heroContentContainer" className="home-link1">
                  <div className="home-group331 navBlock">
                    <span className="home-text39">
                      <span>HOME</span>
                    </span>
                  </div>
                </a>
                <a href="#skillsContentContainer" className="home-link2">
                  <div className="home-group341 navBlock">
                    <span className="home-text41">
                      <span>
                        <span>VIEW</span>
                        <br></br>
                        <span>SKILLS</span>
                        <br></br>
                        <span></span>
                      </span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="home-connecting-linear-bg2 connectingLinearBg"></div>
          </section>
        </Parallax>
        <Parallax
          strength={180}
          bgImage={"/images/cyber_forge.webp"}
          style={{ width: "100%" }}
        >
          <SkillSection />
        </Parallax>
        <Parallax
          strength={180}
          bgImage={"/images/cyber_hottie.webp"}
          style={{ width: "100%" }}
        >
          <section className="home-contact">
            <div
              id="contactContentContainer"
              className="home-contact-content-container glassBox"
            >
              <h1 className="home-text73">
                <span>CONTACT</span>
              </h1>
              <div className="home-container56">
                <div className="home-name1">
                  <span className="home-text75">
                    <span>Name</span>
                  </span>
                  <input
                    type="text"
                    placeholder="placeholder"
                    className="home-contact-input input"
                  />
                </div>
                <div className="home-email">
                  <span className="home-text77">
                    <span>Email</span>
                    <br></br>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    placeholder="placeholder"
                    className="home-contact-input1 input"
                  />
                </div>
              </div>
              <div className="home-subject">
                <span className="home-text81">
                  <span>Subject</span>
                  <br></br>
                  <br></br>
                </span>
                <input
                  type="text"
                  placeholder="placeholder"
                  className="home-contact-input2 input"
                />
              </div>
              <div className="home-message">
                <span className="home-text85">Message</span>
                <textarea
                  placeholder="placeholder"
                  className="home-contact-input-text-area textarea"
                ></textarea>
              </div>
              <a
                href="#skillsContentContainer"
                className="home-nav-button2 navBlock "
              >
                <Image
                  alt="Arrow17321"
                  src="/images/arrow.svg"
                  className="home-arrow12 "
                  width={28}
                  height={28}
                />
              </a>
            </div>
            <div className="home-note-content-container glassBox">
              <span className="home-text86">
                This website was made with  NextJS, Midjourneyn and teleporthq,
                inspired by CD PROJEKT RED&apos;s cyberpunk 2077
              </span>
              <span className="home-text87">
                THIS PAGE WAS MADE IN MARCH 2030, last updated, xxxx
              </span>
            </div>
            <div className="home-connecting-linear-bg5 connectingLinearBg"></div>
          </section>
        </Parallax>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Home;
