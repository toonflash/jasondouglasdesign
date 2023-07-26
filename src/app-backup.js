import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from './hooks';
import ScrollToTop from "react-scroll-to-top";
import {TfiClose} from 'react-icons/tfi';
//import { useWindowSize } from './js/useWindowSize';
import { isMobile } from 'react-device-detect';
// import Collapsible from 'react-collapsible';
import { RiGasStationFill, RiHeavyShowersFill, RiMeteorLine, RiMoonFill, RiAliensFill } from 'react-icons/ri';
import { BiDollar } from 'react-icons/bi';
import { useTransition, animated, useSpring } from '@react-spring/web';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/main.scss';
import './styles/contactForm.scss';
// import './js/site.js';
import { useIntersectionObserver } from './js/useIntersectionObserver';

import Burger from './components/Burger';
import Menu from './components/Menu';
import HomeSlider from "./components/HomeSlider";
import GraphicSlider from "./components/GraphicSlider";
import MacbookSlider1 from './components/MacbookSlider1';
import MacbookSlider2 from './components/MacbookSlider2';
import ContactForm from "./components/ContactForm";
import CodeWindow from "./components/CodeWindow"

import Jay from "./assets/images/jayIntro.png";
import IndochinoSlide from "./assets/images/macbookSlider/indochinoSlide.jpg";

import computer from "./assets/images/svg/computer.svg";

import photoshopIcon from "./assets/images/skillIIcons/Adobe_Photoshop_CC_icon.svg";
import illustratorIcon from "./assets/images/skillIIcons/Adobe_Illustrator_CC_icon.svg";
import zeplinIcon from "./assets/images/skillIIcons/7b336dc26fd85ae98b414761d58238d225876a88-60x48.svg";
import htmlIcon from "./assets/images/skillIIcons/HTML5_logo_and_wordmark.svg";
import sassIcon from "./assets/images/skillIIcons/Sass_Logo_Color.svg";
import visualStudioIcon from "./assets/images/skillIIcons/Visual_Studio_Code_1.35_icon.svg";
import reactIcon from "./assets/images/skillIIcons/React-icon.svg";
import wordpressIcon from "./assets/images/skillIIcons/Wordpress-Logo.svg";


function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Hello");
    //the code here runs only on the initial render
}, []);


  const node = useRef(); 
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);
  const section7 = useRef(null);
  const section8 = useRef(null);

  const [experienceVisible, setExperienceVisible] = useState(true);
  const [kitandaceVisible, setKitandaceVisible] = useState(false);
  const [indochinoVisible, setIndochinoVisible] = useState(false);
  const [openroadVisible, setOpenroadVisible] = useState(false);

  const [macbook1OverlayVisible, setMcbook1OverlayVisible] = useState(false);
  


  // Web Work Transitions
  const config = {mass:1, tension:700, friction: 40}

  const workTransition = useTransition(experienceVisible, {
    config,
    from: {opacity: 1},
    enter: {opacity: 1},
    leave: {opacity: 0}
  });

  const kitAndAceTransition = useTransition(kitandaceVisible, {
    config,
    from: {x: -600, opacity: 0},
    enter: {x: 0, opacity: 1},
    leave: {x: 800, opacity: 0},
    exitBeforeEnter: true
  });

  const indochinoTransition = useTransition(indochinoVisible, {
    config,
    from: {x: -600, opacity: 0},
    enter: {x: 0, opacity: 1},
    leave: {x: 800, opacity: 0},
    exitBeforeEnter: true
  });

  const openroadTransition = useTransition(openroadVisible, {
    config,
    from: {x: -600, opacity: 0},
    enter: {x: 0, opacity: 1},
    leave: {x: 800, opacity: 0},
    exitBeforeEnter: true
  });


  // const size = useWindowSize();

  // console.log(size.width);

  useOnClickOutside(node, () => setOpen(false));

  const scrollDown = (ref) => {
    setOpen(false);
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };


  // Jay Focus Animation
  const triggerRef_jayIntro = useRef();
  const dataRef_jayIntro = useIntersectionObserver(triggerRef_jayIntro, {
    freezeOnceVisible: true
  });

  const jayIntroStyle = useSpring({
    config: { mass: 1, tension: 100, friction: 10 },
    from: { opacity: 0, bottom: '-500px' },
    to: {
      opacity: dataRef_jayIntro?.isIntersecting ? 1 : 0,
      bottom: dataRef_jayIntro?.isIntersecting ? '-360' : '-500px',
    },
  });

  // Code Window Slide In Animation
  const triggerRef_codeWindow = useRef();
  const dataRef_codeWindow = useIntersectionObserver(triggerRef_codeWindow, {
    freezeOnceVisible: false
  });

  const codeWindowStyle = useSpring({
    config,
    from: { opacity: 0, left: '-500px' },
    to: {
      opacity: dataRef_codeWindow?.isIntersecting ? 1 : 0,
      left: dataRef_codeWindow?.isIntersecting ? '0px' : '-500px',
    },
  });





  const kitAndAceClick = () => {
    setExperienceVisible(false);
    setKitandaceVisible(v => !v);
    setIndochinoVisible(false);
    setOpenroadVisible(false);
  }

  const indochinoClick = () => {
    setExperienceVisible(false);
    setKitandaceVisible(false);
    setIndochinoVisible(true);
    setOpenroadVisible(false);
  }

  const openRoadClick = () => {
    setExperienceVisible(false);
    setKitandaceVisible(false);
    setIndochinoVisible(false);
    setOpenroadVisible(true);
  }

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  const macbookClick = () => {
    setMcbook1OverlayVisible(true);
  }
  
  const closeOverlay = () => {
    setMcbook1OverlayVisible(false);
  }
  

  const Macbook1Overlay = () => (
    <div className="mackbookOverlay" onClick={()=> closeOverlay()}>
      <div className="macbook">
        <div className="macbookPageBg">
          <div className="macbookSliderWrapper">
            <MacbookSlider1 />
          </div>
        </div>
      </div>
    </div>
  )



  return (
    <div className="App">
        <header>
          <div ref={node} className="navigation">
            <Burger open={open} setOpen={setOpen} />
            <Menu
              open={open}
              setOpen={setOpen}
              scrollDown={scrollDown}
              section2={section2}
              section3={section3}
              section4={section4}
              section5={section5}
              section6={section6}
              section7={section7}
              section8={section8}
            />
          </div>
          <h1 className="siteTitle" onClick={() => {goToTop()}}>Jason Douglas Design</h1>
        </header>

        
        <section ref={section1} id="section1" className="section sliders">
          <HomeSlider
            open={open}
            setOpen={setOpen}
            scrollDown={scrollDown}
            section2={section2}
            section3={section3}
            section4={section4}
            section5={section5}
          />
        </section>


        <section ref={section2} id="section2" className="section intro">
          <div className="section__innerWrapper">
            <div className="section__content__left">
              <div className="helloSticker">
                <div className="helloSticker__top">
                  <span className="helloLarge">Hello</span>
                  <span className="helloSmall">my name is</span>
                </div>
                <div className="helloSticker__middle">
                  <span>Jason &#58;&#41;</span>
                </div>
                <div className="helloSticker__bottom"></div>
              </div>
              <p>I'm a Front-End Web Developer/Designer specializing in custom, large-scale enterprise Web Applications. I design simple intuitive creatives and then build interactive and engaging online user experiences.<br/><br/>... and please, call me Jay.</p>
            </div>
            <div className="section__content__right">
              <animated.div className="jayIntroWrapper" style={jayIntroStyle}>
                <img src={Jay} className="jayIntro" />
              </animated.div>
              <div ref={triggerRef_jayIntro} />
            </div>
          </div> 
        </section>


        <section ref={section3} id="section3" className="section webDesign">
          <div className="section__innerWrapper">
            <div className="section__content__left">
              <animated.div className="codeWindowWrapper" style={codeWindowStyle}>
                <CodeWindow />
              </animated.div>
              <div ref={triggerRef_codeWindow} />
            </div>
            <div className="section__content__right">
              <h1 className="sectionHeader">Front-end Web Development &amp; Design</h1>        
              <p>Working closely with a design team, (if there is  one), I create the initial mockups for a site and after careful and thoughtful refinement, the U.X. for the website takes shape.</p>
              <p>Then, I take those designs and create a pixel perfect recreation in the browser. Once in place, I bring the whole front end to life for the guest to experience.</p>
            </div>
          </div>
        </section>


        <section ref={section4} id="section4" className="section experience">
          <div className="section__innerWrapper">
            <div className="section__content__left">
              <h1 className="sectionHeader">Web Work</h1>
              <ul className="experienceButtonList">
                <li className="experienceButtonList__item">
                  <button
                    onClick={() => kitAndAceClick()}
                    disabled={kitandaceVisible ? true : false}
                    aria-label="Kit And Ace"
                    className={kitandaceVisible ? "kitAndAce active" : "kitAndAce"}
                  >
                    Kit &amp; Ace
                  </button>
                </li>
                <li className="experienceButtonList__item">
                  <button
                    onClick={() => indochinoClick()}
                    disabled={indochinoVisible ? true : false}
                    aria-label="Indochino"
                    className={indochinoVisible ? "indochino active" : "indochino"}
                  >
                    Indochino
                  </button>
                </li>
                <li className="experienceButtonList__item">
                  <button
                    onClick={() => openRoadClick()}
                    disabled={openroadVisible ? true : false}
                    aria-label="Openroad Auto Group"
                    className={openroadVisible ? "openroad active" : "openroad"}
                  >
                    OpenRoad Auto Group
                  </button>
                </li>
              </ul>
            </div>

            <div className="section__content__right">

            {workTransition((style, item) => item
            ?
              <animated.div className="experience__copy introCopy" style={style}>
                <p>I've been fortunate enough that for all of my professional career, I've been steadily employed full-time. I've held positions with large corporate retail companies, (having even been there at start up time in one case).</p>
              </animated.div>
            :
              null
            )}
              
            {kitAndAceTransition((style, item) => item
            ?
              <animated.div className="kitAndAce" style={style}>
                <div className="macbook" onClick={() => macbookClick()}>
                  <div className="macbookPageBg">
                    <div className="macbookSliderWrapper">
                      <MacbookSlider1 />
                    </div>
                  </div>
                </div>
                <div className="experience__copy">
                  <h4 className="experience__header">Junior Front-End Developer, Web Designer</h4>
                  <p>My first project at K&A was building and styling the front-end of their very first website. I was constantly looking for ways to take design ideas from the Brand department and translate them to into suitable content for the web.</p>
                  <p>I worked on several iterations of their website, up-to and including their enterprise site using the Hybris frame-work.</p>
                  <p className="disclaimer">* I did not design the slides in the macbook. Those were done back in the day by my super talented co-workers who have gone on to found <a href="https://www.weareverypolite.com" target="_blank" rel="noreferrer">weareverypolite.com</a>. Check them out, they play a mean pinball.</p>
                </div>
              </animated.div>
            :
              null
            )}

            {indochinoTransition((style, item) => item
            ?
              <animated.div className="indochino" style={style}>
                <div className="macbook" onClick={() => macbookClick()}>
                  <div className="macbookPageBg">
                    <img src={IndochinoSlide} className="sliding" alt="Indochino Gallery" />
                  </div>
                </div>
                <div className="experience__copy">
                  <h4 className="experience__header">Front-End Developer, Web/UX Designer</h4>
                  <p>My role at Indochino was to colaborate with product managers, UX designers, QA, Marketing, Retail and Operations teams to ensure the customer experience on our e-commerce platform was seamless, engaging and succesful for the company.</p>
                  <p>I would take project requirements set by the business, then create wire-frames and mock-ups to be used for development.</p>
                </div>
              </animated.div>
            :
              null
            )}

            {openroadTransition((style, item) => item
            ?
              <animated.div className="openroad" style={style}>
                  <div className="macbook" onClick={() => macbookClick()}>
                    <div className="macbookPageBg">
                      <div className="macbookSliderWrapper">
                        <MacbookSlider2 />
                      </div>
                    </div>
                  </div>
                  <div className="experience__copy">
                    <h4 className="experience__header">Front-End Developer, Web/UX Designer</h4>
                    <p>My time with OpenRoad has alowed me to focus on Front End Development, specificaly working with React. I wear two hats, Web Developer and UX Designer.</p>
                    <p>The majority of my time is spent on coding as there isn't much time to explore potential UX designs. We typicaly start coding be fore the UX is even finalized so it's a bit like building the plane as we're flying.</p>
                    <p></p>
                  </div>
                </animated.div>
              :
                null
              )}

            </div>
          </div>
        </section>


        <section ref={section5} id="section5" className="section graphicDesign">
          <div className="section__innerWrapper">
            <div className="section__content__left">
              <GraphicSlider />
            </div>
            <div className="section__content__right">
              <div className="rightCopy">
                <h1 className="sectionHeader">Graphic Work</h1>
                <p>Having started out as a Web Designer, and having a background in art school, I naturally have done a lot of graphic design work.</p>
                <p>I design product inlays and packaging, magazine ads, event posters, logo design and even custom calendars.</p>
              </div>
            </div>
          </div>
        </section>


        <section ref={section6} id="section6" className="section things">
          <div className="section__innerWrapper">
            <div className="things__copy">
              <h1 className="sectionHeader">The Things</h1>
              <p>This is a basic list of the tools I use day-to-day.</p>
            </div>
              
            <div className="section__content__left">
              <div className="things__item">
                <div className="things__item__icon photoshop">
                <img src={photoshopIcon} alt=""/>
                </div>
                <div className="things__item__copy">
                  <h4>Photoshop</h4>
                  <p>The cornerstone design application for designing pretty much anything.</p>
                </div>
              </div>
              <div className="things__item">
                <div className="things__item__icon illustrator">
                <img src={illustratorIcon} alt=""/>
                </div>
                <div className="things__item__copy">
                  <h4>Illustrator</h4>
                  <p>The cornerstone svg application for creating all things vector.</p>
                </div>
              </div>
              <div className="things__item">
                <div className="things__item__icon zeplin">
                <img src={zeplinIcon} alt=""/>
                </div>
                <div className="things__item__copy">
                  <h4>Zeplin</h4>
                  <p>Having one online location for sharing mock-ups is essential.</p>
                </div>
              </div>
              <div className="things__item">
                <div className="things__item__icon html">
                <img src={htmlIcon} alt=""/>
                </div>
                <div className="things__item__copy">
                  <h4>HTML, CSS, JS</h4>
                  <p>The holy trinity of front-end markup. Writing custom HTML, CSS and JavaScript is what provides me with 90% of my work.</p>
                </div>
              </div>
              </div>
             <div className="section__content__right">
              <div className="things__item">
                <div className="things__item__icon visualStudio">
                <img src={visualStudioIcon} alt=""/>
                </div>
                <div className="things__item__copy">
                  <h4>Visual Studio Code</h4>
                  <p>The main application used for front-end development.</p>
                </div>
              </div>
              <div className="things__item">
                <div className="things__item__icon react">
                <img src={reactIcon} alt=""/>
                </div>
                <div className="things__item__copy">
                  <h4>React</h4>
                  <p>The JavaScript framework and library that I am most skilled with. It provides quick and efficient development. (This site is built with it).</p>
                </div>
              </div>


              <div className="things__item">
                <div className="things__item__icon sass">
                <img src={sassIcon} alt=""/>
                </div>
                <div className="things__item__copy">
                  <h4>SASS</h4>
                  <p>Syntastically awesome stylesheets. Sass is a wonderful thing to work with.</p>
                </div>
              </div>


            
              
              <div className="things__item">
                <div className="things__item__icon wordpress">
                <img src={wordpressIcon} alt=""/>
                </div>
                <div className="things__item__copy">
                  <h4>Wordpress</h4>
                  <p>The original website builder for anyone to use (at least imo). Customizing Wordpress themes is one of my longest running skills.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section ref={section7} id="section7" className="section about">
          <div className="section__innerWrapper">
            <div className="section__content__left">
              {/* <div className="svgGraphic">
                <img src={computer} alt=""/>
              </div> */}
            </div>
            <div className="section__content__right">
              <h1 className="sectionHeader">About Me</h1>
              <p>I love nothing more than seeing a project through from begining to end.</p>
              <p>It's always a thrill to work on something special with a great team and go through all the stages together.</p>
              <p>When a new site goes live for the first time, that feeling of accomplishment can't be beat.</p>
              <p>My role is to come up with the overall look and feel and then take that design and turn it into an interactive and engaging online experience.</p>
              <p>I live in beautiful Nelson, BC with my husband and a cat named Techno.</p>
              <p>On the side <a href="#" target="_blank">I'm a music producing nerd</a>.</p>
              
            </div>
          </div>
        </section>


        <section ref={section8} id="section8" className="section contact">
          <div className="section__innerWrapper">
              <div className="section__content__left">
                <h1 className="sectionHeader">Contact Me</h1>
                <ContactForm />
              </div>
              <div className="section__content__right">
                <div>
                  <p>I am currently accepting contract work.</p>
                  <p>Please fill out the contact form or shoot me an email <a href="mailto:jasondouglasdesign@gmail.com">jasondouglasdesign@gmail.com</a></p>
                </div>
              </div>
          </div>
        </section>


        <ScrollToTop smooth top={500} />


        {/* <footer><p>Web Designer/Developer located in Nelson, BC
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2015 -2000 4030 4030">
              <title>maple leaf from the flag of Canada</title>
              <path fill="#f00" d="m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z"></path>
            </svg>
          </span>
          </p>
        </footer> */}

        {macbook1OverlayVisible && <Macbook1Overlay />}
    </div>
  );
}

export default App;
