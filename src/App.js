import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from './hooks';
import ScrollToTop from "react-scroll-to-top";
import {TfiClose} from 'react-icons/tfi';
import { useWindowSize } from './js/useWindowSize';
import { isMobile } from 'react-device-detect';
import { useTransition, animated, useSpring } from '@react-spring/web';
import {Collapse, UnmountClosed} from 'react-collapse';


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
import CodeWindow from "./components/CodeWindow";
import ToolMarquee from './components/ToolMarquee';
import WordpressPopUp from "./components/PopUps/WordpressPopUp";
import SquarespacePopUp from "./components/PopUps/SquarespacePopUp";
import ShopifyPopUp from './components/PopUps/ShopifyPopUp';

import Jay from "./assets/images/jayIntro.png";
import jddLogo from "./assets/images/logos/jddLogo.png";
import indochinoExperience from "./assets/images/indochinoExperience/indochinoTEST.jpg";
import IndochinoSlide from "./assets/images/macbookSlider/indochinoSlide.jpg";
import wordpress from "./assets/images/svg/wordpress.svg";
import squarespace from "./assets/images/svg/squarespace.svg";
import shopify from "./assets/images/svg/shopify.svg";
import webDesign from "./assets/images/svg/web-design.svg"
import emailCampaign from "./assets/images/svg/email.svg"
import htmlIcon from "./assets/images/svg/html.svg"


function App() {
  const [open, setOpen] = useState(false);

  const node = useRef(); 
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);





  // const section7 = useRef(null);
  // const section8 = useRef(null);

  // const [kitandaceVisible, setKitandaceVisible] = useState(false);
  // const [indochinoVisible, setIndochinoVisible] = useState(false);
  // const [openroadVisible, setOpenroadVisible] = useState(false);

  const [wordpressVisible, setWordpressVisible] = useState(false);
  const [squarespaceVisible, setSquarespaceVisible] = useState(false);
  const [shopifyVisible, setShopifyVisible] = useState(false);

  const showWordpressPopup = () => {
    setWordpressVisible(true);
    document.querySelector("html").classList.add("stopScroll");
  }

  const closeWordpressPopup = () => {
    setWordpressVisible(false);
    document.querySelector("html").classList.remove("stopScroll");
  }

  const showSquarespacePopup = () => {
    setSquarespaceVisible(true);
    document.querySelector("html").classList.add("stopScroll");
  }

  const closeSquarespacePopup = () => {
    setSquarespaceVisible(false);
    document.querySelector("html").classList.remove("stopScroll");
  }

  const showShopifyPopup = () => {
    setShopifyVisible(true);
    document.querySelector("html").classList.add("stopScroll");
  }

  const closeShopifyPopup = () => {
    setShopifyVisible(false);
    document.querySelector("html").classList.remove("stopScroll");
  }

  

  const windowWidth = useWindowSize();
  
  // Web Work Transitions
  const config = {mass:1, tension:700, friction: 40}

  // const kitAndAceTransition = useTransition(kitandaceVisible, {
  //   config,
  //   from: {x: -600, opacity: 0},
  //   enter: {x: 0, opacity: 1},
  //   leave: {x: 800, opacity: 0},
  //   exitBeforeEnter: true
  // });

  // const indochinoTransition = useTransition(indochinoVisible, {
  //   config,
  //   from: {x: -600, opacity: 0},
  //   enter: {x: 0, opacity: 1},
  //   leave: {x: 800, opacity: 0},
  //   exitBeforeEnter: true
  // });

  // const openroadTransition = useTransition(openroadVisible, {
  //   config,
  //   from: {x: -600, opacity: 0},
  //   enter: {x: 0, opacity: 1},
  //   leave: {x: 800, opacity: 0},
  //   exitBeforeEnter: true
  // });

  useOnClickOutside(node, () => setOpen(false));

  const scrollDown = (ref) => {
    setOpen(false);
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };


  // Web Work Slide In Animation
  // const triggerRef_webWork = useRef();
  // const dataRef_webWork = useIntersectionObserver(triggerRef_webWork, {
  //   freezeOnceVisible: true
  // });

  // const webWorkStyle = useSpring({
  //   config,
  //   from: { opacity: 0, left: '-600px' },
  //   to: {
  //     opacity: dataRef_webWork?.isIntersecting ? 1 : 0,
  //     left: dataRef_webWork?.isIntersecting ? '0' : '-600px',
  //   },
  // }); 

  // Code Window Slide In Animation 
  const triggerRef_codeWindow = useRef();
  const dataRef_codeWindow = useIntersectionObserver(triggerRef_codeWindow, {
    freezeOnceVisible: true
  });

  const codeWindowStyle = useSpring({
    config,
    from: { opacity: 0, left: '-500px' },
    to: {
      opacity: dataRef_codeWindow?.isIntersecting ? 1 : 0,
      left: dataRef_codeWindow?.isIntersecting ? '0px' : '-500px',
    },
  });


  // const kitAndAceClick = () => {
  //   setKitandaceVisible(v => !v);
  //   setIndochinoVisible(false);
  //   setOpenroadVisible(false);
  // }

  // const indochinoClick = () => {
  //   setKitandaceVisible(false);
  //   setIndochinoVisible(true);
  //   setOpenroadVisible(false);
  // }

  // const openRoadClick = () => {
  //   setKitandaceVisible(false);
  //   setIndochinoVisible(false);
  //   setOpenroadVisible(true);
  // }

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };


  const scrollUp = () => {
    document.getElementById("scrollUp").scrollIntoView();
  };
  
  const closeOverlay = () => {
    document.querySelector("html, body, div.app").classList.remove("fixed");
  }

  const MenuOverlay = () => (
    <div className="menuOverlay"></div>
  )

  useEffect(() => {
    console.log("Hello");
  });



  // useEffect(() => {
  //   dataRef_webWork?.isIntersecting ? setKitandaceVisible(true) : setKitandaceVisible(false);
  // }, [dataRef_webWork?.isIntersecting]);
  
  // const [kitAndAceVisible, setKitAndAceVisible] = useState(true);
  // const [indochinoVisible, setIndochinoVisible] = useState(false);
  //const [openroadVisible, setOpenroadVisible] = useState(false);

  // const [showIndochinoNext, setShowIndochinoNext] = useState(false);


  

  // const showKitAndAce = () => {
  //   setKitAndAceVisible(true);
  //   setIndochinoVisible(false);
  // }

  // const showIndochino = () => {
  //   setKitAndAceVisible(false);
  //   setIndochinoVisible(true);
  // }


// Thanks to Jackie Hii 
  const [openContainerId, setOpenContainerId] = useState('contentA');
  const [pendingContainerId, setPendingContainerId] = useState(null);
  
  const onFullClose = contentId => ({ isFullyClosed }) => {
    if (contentId === openContainerId && isFullyClosed) {
      setOpenContainerId(pendingContainerId);
      setPendingContainerId(null);
    }
  }


  return (
    <div className="App">
        <header>
          <div ref={node} className="navigation">
            <Burger open={open} setOpen={setOpen}/>
            <Menu
              open={open}
              setOpen={setOpen}
              scrollDown={scrollDown}
              section2={section2}
              section3={section3}
              section4={section4}
              section5={section5}
              section6={section6}
              // section7={section7}
              // section8={section8}
            />
          </div>
          <h1 className="siteTitle" onClick={() => {goToTop()}}>{windowWidth.width < 568 ? "JDD" : "Jason Douglas Design"}</h1>

          <span className="switcher switcher-1">
            <input type="checkbox" id="switcher-1" />
            <label htmlFor="switcher-1"></label>
          </span>

        </header>

        <section ref={section1} id="section1" className="section welcome">
          <div className="section__innerWrapper">
            <div className="section__content__left">
              <div className="section__content__left__innerWrapper">
                <div className="section__content__left__header">
                  <div className="jayIntroMobile">
                    <img src={Jay} className="jayIntro" />
                  </div>
                  <img src={jddLogo} className="jddLogo" />
                  <h1 className="sectionHeader">Hello,<br/>I'm Jay Douglas</h1>
                </div>
                <p>A front-end web developer based in Nelson, BC Canada.</p>
                <p>I specialize in custom built, large-scale enterprise Web Applications and CMS themes.</p>
                {/* <p>If you are interested in reaching out, please <button className="link welcome" onClick={() => scrollDown(section6)}>contact me</button>.</p> */}
                <br/>
                <h5>Services I provide are:</h5>
                <ul className="introList">
                  <li className="introList__item"><button className="link" onClick={() => scrollDown(section2)}>Front End Development</button></li>
                  <li className="introList__item"><button className="link" onClick={() => scrollDown(section3)}>Custom CMS Themes</button></li>
                  <li className="introList__item"><button className="link" onClick={() => scrollDown(section4)}>Web Work</button></li>
                  <li className="introList__item"><button className="link" onClick={() => scrollDown(section5)}>Graphic Work</button></li>
                  {/* <li className="introList__item"><button className="link" onClick={() => scrollDown(section6)}>The Things</button></li>
                  <li className="introList__item"><button className="link" onClick={() => scrollDown(section7)}>Contact Me</button></li> */}
                </ul>
              </div>
            </div>
            <div className="section__content__right">
              <img src={Jay} className="jayIntro" />
            </div>
          </div>
        </section>

        <section ref={section2} id="section2" className="section webDevelopment">
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
              <p>Working closely with a design team, (if there is  one), I create the initial mockups for a site and after careful and thoughtful refinement, the U.X. for the website takes shape.</p>
              <p>Then, I take those designs and create a pixel perfect recreation in the browser. Once in place, I bring the whole front end to life for the guest to experience.</p>
              <p>Working closely with a design team, (if there is  one), I create the initial mockups for a site and after careful and thoughtful refinement, the U.X. for the website takes shape.</p>
              <p>Then, I take those designs and create a pixel perfect recreation in the browser. Once in place, I bring the whole front end to life for the guest to experience.</p>
              <ToolMarquee />
            </div>
          </div>
        </section>

        <div id='scrollUp'></div>

        <section ref={section3} id="section3" className="section experience">
          <div className="section__innerWrapper">
            <div className="section__content__left">
              <h1 className="sectionHeader">Web Work</h1>
              <div className="buttonContainer">
                <button onClick={() => setPendingContainerId('contentA')} disabled={openContainerId === 'contentA'}>Kit & Ace</button>
                <button onClick={() => setPendingContainerId('contentB')} disabled={openContainerId === 'contentB'}>Indochino</button>
                <button onClick={() => setPendingContainerId('contentC')} disabled={openContainerId === 'contentC'}>OpenRoad</button>
              </div>
            </div>

            <div className="section__content__right">
              

              <Collapse 
                isOpened={openContainerId === 'contentA' && !pendingContainerId}
                onRest={onFullClose('contentA')}
              >
                <div className="experience__copy">   

                  <div className="macbook">
                    <div className="macbookPageBg">
                      <div className="macbookSliderWrapper">
                        <MacbookSlider1 />
                      </div>
                    </div>
                  </div>

                  <div className="experience__role">
                    <h3>Kit & Ace</h3>
                    <br/>
                    <p className="bold">Role:</p>
                    <p>Junior Front-End Developer</p>
                    <p className="bold">Responsibilities:</p>
                    <p>Web design/development of initial version of the website (front end), collaboration with brand and marketing teams, build look-books and artist feature content pages, code email campaigns, JS, HTML, CSS</p>
                  </div>

                  <div className="experience__skills">
                    <div className="experience__skills__item">
                      <img src={webDesign} />
                      <h4>Web Design</h4>
                      <p>A short blurb explaining this particular skill.</p>
                    </div>

                    <div className="experience__skills__item">
                      <img src={emailCampaign} />
                      <h4>Email Campaigns</h4>
                      <p>A short blurb explaining this particular skill.</p>
                    </div>

                    <div className="experience__skills__item">
                      <img src={htmlIcon} />
                      <h4>HTML/CSS/JS</h4>
                      <p>A short blurb explaining this particular skill.</p>
                    </div>
                  </div>
                </div>
              </Collapse>

              <Collapse 
                isOpened={openContainerId === 'contentB' && !pendingContainerId}
                onRest={onFullClose('contentB')}
              >
                <div className="experience__copy">
                  <div className="macbook">
                    <div className="macbookPageBg">
                      <img src={IndochinoSlide} className="sliding" alt="Indochino Gallery" />
                    </div>
                  </div>
                  {/* <h4 className="experience__header">Front-End Developer, Web/UX Designer</h4>
                  <p>My role at Indochino was to colaborate with product managers, UX designers, QA, Marketing, Retail and Operations teams to ensure the customer experience on our e-commerce platform was seamless, engaging and succesful for the company.</p>
                  <p>I would take project requirements set by the business, then create wire-frames and mock-ups to be used for development.</p> */}
                  <div className="experience__skills">
                    <div className="experience__skills__item">
                      <img src={webDesign} />
                      <h4>Web Design</h4>
                      <p>A short blurb explaining this particular skill.</p>
                    </div>

                    <div className="experience__skills__item">
                      <img src={emailCampaign} />
                      <h4>Email Campaigns</h4>
                      <p>A short blurb explaining this particular skill.</p>
                    </div>

                    <div className="experience__skills__item">
                      <img src={htmlIcon} />
                      <h4>HTML/CSS/JS</h4>
                      <p>A short blurb explaining this particular skill.</p>
                    </div>
                  </div>
                </div>
              </Collapse>

              <Collapse
                isOpened={openContainerId === 'contentC' && !pendingContainerId}
                onRest={onFullClose('contentC')}
              >
                <div className="experience__copy">
                <div className="macbook">
                    <div className="macbookPageBg">
                      <div className="macbookSliderWrapper">
                        <MacbookSlider2 />
                      </div>
                    </div>
                  </div>
                  {/* <h4 className="experience__header">Front-End Developer, Web/UX Designer</h4>
                  <p>My role at Indochino was to colaborate with product managers, UX designers, QA, Marketing, Retail and Operations teams to ensure the customer experience on our e-commerce platform was seamless, engaging and succesful for the company.</p>
                  <p>I would take project requirements set by the business, then create wire-frames and mock-ups to be used for development.</p> */}
                  <div className="experience__skills">
                    <div className="experience__skills__item">
                      <img src={webDesign} />
                      <h4>Web Design</h4>
                      <p>A short blurb explaining this particular skill.</p>
                    </div>

                    <div className="experience__skills__item">
                      <img src={emailCampaign} />
                      <h4>Email Campaigns</h4>
                      <p>A short blurb explaining this particular skill.</p>
                    </div>

                    <div className="experience__skills__item">
                      <img src={htmlIcon} />
                      <h4>HTML/CSS/JS</h4>
                      <p>A short blurb explaining this particular skill.</p>
                    </div>
                  </div>
                </div>
              </Collapse>

            </div>
          </div>
        </section>


        <section ref={section4} id="section4" className="section cms">
          <div className="section__innerWrapper">

            <h1 className="sectionHeader">Wordpress<br/>&amp; Squarespace</h1>
            <p>Are you looking for a CMS or Website Builder with a completely custom theme? It's now very easy to have an online presence with any of these tools. Which one you choose depends on what you're looking to accomplish with your website and your budget. Click on an icon to get more info.</p>

            <div className="clickIcon"></div>

            <div className="cmsSection">
              <div className="cmsSection__cta">
                <button aria-label="Worpdress" onClick={() => showWordpressPopup()}>
                  <img src={wordpress} className="wordpress" alt="Wordpress Logo" />
                </button>
              </div>

              <div className="cmsSection__cta">
                <button aria-label="Squarespace" onClick={() => showSquarespacePopup()}>
                  <img src={squarespace} className="squarespace" alt="Squarespace Logo" />
                </button>
              </div>

            
              <div className="cmsSection__cta">
                <button aria-label="Shopify" onClick={() => showShopifyPopup()}>
                  <img src={shopify} className="shopify" alt="Shopify Logo" />
                </button>
              </div>
            </div>
              
          </div>
        </section>


        {/* <section ref={section5} id="section5" className="section graphicDesign">
          <div className="section__innerWrapper">
            <div className="section__content__left">
              <div className="rightCopy">
                <h1 className="sectionHeader">Graphic Work</h1>
                <p>Having started out as a Web Designer, and having a background in art school, I naturally have done a lot of graphic design work.</p>
                <p>I design product inlays and packaging, magazine ads, event posters, logo design and even custom calendars.</p>
              </div>
            </div>
            <div className="section__content__right">
              <GraphicSlider />
            </div>
          </div>
        </section> */}

        
        <section ref={section5} id="section5" className="section about">
          <div className="section__innerWrapper">
            <div className="section__content__left">
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


        <section ref={section6} id="section6" className="section contact">
          <div className="section__innerWrapper">
              <div className="section__content__left">
                <h1 className="sectionHeader">Contact</h1>
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

        {open && <MenuOverlay />}
        {wordpressVisible ? <WordpressPopUp closeWordpressPopup={closeWordpressPopup} /> : null}
        {squarespaceVisible ? <SquarespacePopUp closeSquarespacePopup={closeSquarespacePopup} /> : null}
        {shopifyVisible ? <ShopifyPopUp closeShopifyPopup={closeShopifyPopup} /> : null}
        
    </div>
  );
}

export default App;
