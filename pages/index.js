import React from "react";
import Image from "next/image";
import Head from "next/head";

import Navbar from "../components/navbar";

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Cyberpunk Profolio</title>
          <meta property="og:title" content="Cyberpunk Profolio" />
        </Head>
        <Navbar />
        <section className="home-hero">
          <div
            id="heroContentContainer"
            className="home-hero-content-container"
          >
            <section id="Intro" className="home-group14">
              <img
                alt="image46672"
                src="/playground_assets/profilePic.png"
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
                    src="/playground_assets/mouse6672-l7m.svg"
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
                    src="/playground_assets/personpin1.svg"
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
                    src="/playground_assets/personpin1.svg"
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
                    src="/playground_assets/personpin2.svg"
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
                    src="/playground_assets/personpin1.svg"
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
              <div className="home-skill2">
                <img
                  alt="Vector4I672"
                  src="/playground_assets/skillContainer.svg"
                  className="home-vector4"
                />
                <span className="home-text50">
                  <span>
                    Most used and preferred programming language
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
                <span className="home-text52">
                  <span>Javascript</span>
                </span>
                <div className="home-js"></div>
                <div className="home-group7">
                  <img
                    alt="VectorI672"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="home-vector"
                  />
                  <span className="home-text54">4</span>
                  <span className="home-text55">5</span>
                  <img
                    alt="Line2I672"
                    src="/playground_assets/blueDivideLine.svg"
                    className="home-line2"
                  />
                </div>
                <img
                  alt="Rectangle13I672"
                  src="/playground_assets/redRectangle.png"
                  className="home-rectangle13"
                />
              </div>
              <div className="home-skill4">
                <img
                  alt="Vector4I672"
                  src="/playground_assets/skillContainer.svg"
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
                  <img
                    alt="VectorI672"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="home-vector1"
                  />
                  <span className="home-text60">4</span>
                  <span className="home-text61">5</span>
                  <img
                    alt="Line2I672"
                    src="/playground_assets/blueDivideLine.svg"
                    className="home-line21"
                  />
                </div>
                <img
                  alt="Rectangle13I672"
                  src="/playground_assets/redRectangle.png"
                  className="home-rectangle131"
                />
              </div>
              <div className="home-skill3">
                <img
                  alt="Vector4I672"
                  src="/playground_assets/skillContainer.svg"
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
                    src="/playground_assets/blueDivideLine.svg"
                    className="home-line22"
                  />
                </div>
                <img
                  alt="Rectangle13I672"
                  src="/playground_assets/redRectangle.png"
                  className="home-rectangle132"
                />
              </div>
              <div className="home-skill1">
                <img
                  alt="Vector4I672"
                  src="/playground_assets/skillContainer.svg"
                  className="home-vector43"
                />
                <span className="home-skill-name">
                  <span>Javascript</span>
                </span>
                <div className="home-skill-score">
                  <img
                    alt="VectorI672"
                    src="/playground_assets/skillContainer.svg"
                    className="home-vector3"
                  />
                  <div className="home-container53">
                    <span className="home-text69">3</span>
                    <div className="home-container54"></div>
                    <span className="home-text70">5</span>
                  </div>
                  <img
                    alt="Line2I672"
                    src="/playground_assets/blueDivideLine.svg"
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
                <div className="home-container55"></div>
              </div>
            </div>
            <h1 className="home-text72">CHARACTER SKILLS</h1>
            <a
              href="#statsContentContainer"
              className="home-nav-button navBlock"
            >
              <Image
                alt="Arrow17321"
                src="/playground_assets/arrow.svg"
                className="home-arrow1"
                width={28}
                height={28}
              />
            </a>
            <a
              href="#contactContentContainer"
              className="home-nav-button1 navBlock "
            >
              <img
                alt="Arrow"
                src="/playground_assets/arrow.svg"
                className="home-arrow11"
              />
            </a>
          </div>
          <div className="home-connecting-linear-bg3 connectingLinearBg"></div>
          <div className="home-connecting-linear-bg4 connectingLinearBg"></div>
        </section>
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
            <a href="#skillsContentContainer" className="home-nav-button2 ">
              <Image
                alt="Arrow17321"
                src="/playground_assets/arrow.svg"
                className="home-arrow12"
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
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Home;
