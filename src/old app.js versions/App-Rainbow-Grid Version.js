import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from './hooks';
import ScrollToTop from "react-scroll-to-top";
import {TfiClose} from 'react-icons/tfi';
//import { useWindowSize } from './js/useWindowSize';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import Collapsible from 'react-collapsible';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/main.scss';
import './styles/contactForm.scss';
// import './js/site.js';

import Burger from './components/Burger';
import Menu from './components/Menu';
import HomeSlider from "./components/HomeSlider";
import MacbookSlider1 from './components/MacbookSlider1';
import MacbookSlider2 from './components/MacbookSlider2';
import ContactForm from "./components/ContactForm";

import JayFace from "./assets/images/jasonDouglas.jpg";
import IndochinoSlide from "./assets/images/macbookSlider/indochinoSlide.jpg";


import kitAndAceLogo from "./assets/images/logos/kitAndAceLogo.png";
import indochinoLogo from "./assets/images/logos/indochinoLogo.jpg";
import openRoadLogo from "./assets/images/logos/openroadLogo.png";

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

  const [kitandaceVisible, setKitandaceVisible] = useState(false);
  const [indochinoVisible, setIndochinoVisible] = useState(false);
  const [openroadVisible, setOpenroadVisible] = useState(false);


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

  const openRoadClick = () => {
    setKitandaceVisible(false);
    setIndochinoVisible(false);
    setOpenroadVisible(true);
    if (!isMobile) {
      document.querySelector(".section3 .section__innerWrapper").classList.add("active");
    }
  }

  const kitAndAceClick = () => {
    setKitandaceVisible(true);
    setIndochinoVisible(false);
    setOpenroadVisible(false);
    if (!isMobile) {
      document.querySelector(".section3 .section__innerWrapper").classList.add("active");
    }
  }

  const indochinoClick = () => {
    setKitandaceVisible(false);
    setIndochinoVisible(true);
    setOpenroadVisible(false);
    if (!isMobile) {
      document.querySelector(".section3 .section__innerWrapper").classList.add("active");
    }
  }

  const openOpenRoad = () => {setOpenroadVisible(true)}
  const openKitAndAce = () => {setKitandaceVisible(true)}
  const openIndochino = () => {setIndochinoVisible(true)}
  
  const closeOpenRoad = () => {setOpenroadVisible(false)}
  const closeKitAndAce = () => {setKitandaceVisible(false)}
  const closeIndochino = () => {setIndochinoVisible(false)}
  

  const closeAllExperiences = () => {
    setKitandaceVisible(false);
    setIndochinoVisible(false);
    setOpenroadVisible(false);
    if (!isMobile) {
      document.querySelector(".section3 .section__innerWrapper").classList.remove("active");
    }
  }

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };


  return (
    <div className="App">

      <MobileView className='mobileView'>
        <header>
          <div ref={node} className='navigation'>
            <Burger open={open} setOpen={setOpen} />
            <Menu
              open={open}
              setOpen={setOpen}
              scrollDown={scrollDown}
              section2={section2}
              section3={section3}
              section4={section4}
              section5={section5}
            />
          </div>
          <h1 className='siteTitle' onClick={() => {goToTop()}}>Jason Douglas Design</h1>
        </header>
        <div className="div1">
          <HomeSlider
          open={open}
          setOpen={setOpen}
          scrollDown={scrollDown}
          section2={section2}
          section3={section3}
          section4={section4}
          section5={section5}
          />
        </div>
        <div className="mobileSection" ref={section2}>
          <div className="mobileSection__innerWrapper">
            <div className="mobileSection__content">
              <h1 className="sectionHeader">What I do</h1>
              <p>I consider myself to be a Web Designer that is also proficient in basic Front End Development. I go from the design stage to the markup stage and from there to development. This means I work with a client or team to finalise a concept design. Then I create all the neccessary mock ups. Once pproved, I turn the mock ups into web pages int he brower, pixel perfect. Then I start bringing the page to life by hooking up to the back end and allowing the user to interact with the page.</p>
            </div>
          </div> 
        </div>
        <div className="mobileSection" ref={section3}>
          <div className="mobileSection__innerWrapper">
            <div className="mobileSection__content">
            <h1 className="sectionHeader">Professional Experience</h1>
            <div className='experienceDrawerWrapper'>
              <Collapsible
              trigger="Kit & Ace"
              transitionTime={100}
              className="experienceDrawer"
              onTriggerOpening={() => openKitAndAce()}
              onTriggerClosing={() => closeKitAndAce()}
              >
                {kitandaceVisible && 
                <>
                  <img className='experienceDrawer__logo kitAndAce' src={kitAndAceLogo} alt='Kit and Ace logo' />
                  <div className="experienceContent__section kitAndAce">
                    <div className="macbook">
                      <div className="macbookPageBg">
                        <div className="macbookSliderWrapper">
                          <MacbookSlider1 />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="experienceCopy">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus at nisl at laoreet. Fusce quis felis magna. Aliquam ut ligula ut eros posuere auctor ut nec dolor. Pellentesque ac porttitor turpis. Aliquam suscipit nunc libero, sed porta tortor feugiat ac. Aliquam eu nibh ac mi lobortis tincidunt. Curabitur sagittis neque metus, ac consectetur purus eleifend eu. Fusce efficitur tortor sit amet neque sollicitudin consectetur. Etiam a nisl sed nisi scelerisque interdum.</p>

                    <p>Suspendisse vehicula metus sem, non fermentum sapien venenatis convallis. Cras id congue augue. Etiam nec vehicula mauris, id interdum est. Etiam eleifend sed urna eget rhoncus. Nulla congue rhoncus dui. Sed consequat elit sed laoreet vestibulum. Nullam sed pretium felis, vitae accumsan dui. Proin imperdiet augue in maximus aliquet. Donec posuere nulla risus, at hendrerit neque varius ac. Duis non ipsum ut lorem mollis porttitor nec quis mi. Maecenas vel nulla iaculis, laoreet massa ut, dignissim purus. Integer sit amet volutpat nisi. Praesent condimentum commodo ligula at posuere. Nullam nec justo quam. Nunc ornare dolor ut ante condimentum sodales.</p>

                    <p>Fusce vel tortor in nisi tristique scelerisque. Quisque sagittis, nibh id malesuada semper, velit odio scelerisque felis, et congue neque augue eu felis. Mauris eu laoreet tellus. Phasellus non semper elit. Mauris at ullamcorper nisl. Vestibulum finibus vitae est placerat porttitor. Sed at magna dolor.</p>
                  </div>
                </>
                }
              </Collapsible>

              <Collapsible 
              trigger="Indochino"
              transitionTime={100}
              className="experienceDrawer"
              onTriggerOpening={() => openIndochino()}
              onTriggerClosing={() => closeIndochino()}
              >
                {indochinoVisible && 
                <>
                  <img className='experienceDrawer__logo' src={indochinoLogo} alt='Indochino logo' />
                  <div className="experienceContent__section indochino">
                    <div className="macbook">
                      <div className="macbookPageBg">
                        <img src={IndochinoSlide} className="sliding" alt="Indochino Gallery" />
                      </div>
                    </div>
                  </div>
                  <div className="experienceCopy">
                    <p>Suspendisse vehicula metus sem, non fermentum sapien venenatis convallis. Cras id congue augue. Etiam nec vehicula mauris, id interdum est. Etiam eleifend sed urna eget rhoncus. Nulla congue rhoncus dui. Sed consequat elit sed laoreet vestibulum. Nullam sed pretium felis, vitae accumsan dui. Proin imperdiet augue in maximus aliquet. Donec posuere nulla risus, at hendrerit neque varius ac. Duis non ipsum ut lorem mollis porttitor nec quis mi. Maecenas vel nulla iaculis, laoreet massa ut, dignissim purus. Integer sit amet volutpat nisi. Praesent condimentum commodo ligula at posuere. Nullam nec justo quam. Nunc ornare dolor ut ante condimentum sodales.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus at nisl at laoreet. Fusce quis felis magna. Aliquam ut ligula ut eros posuere auctor ut nec dolor. Pellentesque ac porttitor turpis. Aliquam suscipit nunc libero, sed porta tortor feugiat ac. Aliquam eu nibh ac mi lobortis tincidunt. Curabitur sagittis neque metus, ac consectetur purus eleifend eu. Fusce efficitur tortor sit amet neque sollicitudin consectetur. Etiam a nisl sed nisi scelerisque interdum.</p>
                  </div>
                </>
                }
                
              </Collapsible>

              <Collapsible 
              trigger="OpenRoad Auto Group"
              transitionTime={100}
              className="experienceDrawer"
              onTriggerOpening={() => openOpenRoad()}
              onTriggerClosing={() => closeOpenRoad()}
              >
                {openroadVisible && 
                <>
                  <img className='experienceDrawer__logo' src={openRoadLogo} alt='OpenRoad logo' />
                  <div className="experienceContent__section openroad">
                    <div className="macbook">
                      <div className="macbookPageBg">
                        <div className="macbookSliderWrapper">
                          <MacbookSlider2 />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="experienceCopy">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus at nisl at laoreet. Fusce quis felis magna. Aliquam ut ligula ut eros posuere auctor ut nec dolor. Pellentesque ac porttitor turpis. Aliquam suscipit nunc libero, sed porta tortor feugiat ac. Aliquam eu nibh ac mi lobortis tincidunt. Curabitur sagittis neque metus, ac consectetur purus eleifend eu. Fusce efficitur tortor sit amet neque sollicitudin consectetur. Etiam a nisl sed nisi scelerisque interdum.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus at nisl at laoreet. Fusce quis felis magna. Aliquam ut ligula ut eros posuere auctor ut nec dolor. Pellentesque ac porttitor turpis. Aliquam suscipit nunc libero, sed porta tortor feugiat ac. Aliquam eu nibh ac mi lobortis tincidunt. Curabitur sagittis neque metus, ac consectetur purus eleifend eu. Fusce efficitur tortor sit amet neque sollicitudin consectetur. Etiam a nisl sed nisi scelerisque interdum.</p>

                    <p>Suspendisse vehicula metus sem, non fermentum sapien venenatis convallis. Cras id congue augue. Etiam nec vehicula mauris, id interdum est. Etiam eleifend sed urna eget rhoncus. Nulla congue rhoncus dui. Sed consequat elit sed laoreet vestibulum. Nullam sed pretium felis, vitae accumsan dui. Proin imperdiet augue in maximus aliquet. Donec posuere nulla risus, at hendrerit neque varius ac. Duis non ipsum ut lorem mollis porttitor nec quis mi. Maecenas vel nulla iaculis, laoreet massa ut, dignissim purus. Integer sit amet volutpat nisi. Praesent condimentum commodo ligula at posuere. Nullam nec justo quam. Nunc ornare dolor ut ante condimentum sodales.</p>
                  </div>
                </>        
                }
                
              </Collapsible>
            </div>
            </div>
          </div> 
        </div>
        <div className="mobileSection" ref={section4}>
          <div className="mobileSection__innerWrapper">
            <div className="mobileSection__content">
              <img className='jayFace' src={JayFace} alt='My face' />
              <div className="mobileSection___content__copy">
                <h1 className="sectionHeader">A little about myself</h1>
                <p>I've been working in Web Design/Development for 12 years. I started out after graduating from the Digital Design course at NAIT. Initially I worked as a designer. Over the years I've gotten more involed with development as I've progressed. I am still very much focused on the front-end of things, with my passion still lying in aesthetics and UX. I love taking a design and making it pixel perfect in the browser.</p>
                <p>I currently live in Nelson, BC and couldn't imagine a better place to call home. On the side I love to make music and am very active in the outdoors.</p>
                <button onClick={() => scrollDown(section5)}>Let's connect!</button>
              </div>
            </div>
          </div> 
        </div>
        <div className="mobileSection" ref={section5}>
          <div className="mobileSection__innerWrapper">
            <div className="mobileSection__content">
              <h1 className="sectionHeader">Contact Me</h1>
              <p>I am currently accepting contract work. Please shoot me an email</p>
              <ContactForm />
            </div>
          </div> 
        </div>
      </MobileView>



      <BrowserView className='browserView'>
        <header>
          <div ref={node} className='navigation'>
            <Burger open={open} setOpen={setOpen} />
            <Menu
              open={open}
              setOpen={setOpen}
              scrollDown={scrollDown}
              section2={section2}
              section3={section3}
              section4={section4}
              section5={section5}
            />
          </div>
          <h1 className='siteTitle' onClick={() => {goToTop()}}>Jason Douglas Design</h1>
        </header>
        
        <section ref={section1} id="section1" className="section1">
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
        {/* What I do */}
        <section ref={section2} id="section2" className="section2">
          <div className="section__innerWrapper">
            <div className="section__content">
              <h1 className="sectionHeader">What I do</h1>
              <p>I consider myself to be a Web Designer that is also proficient in basic Front End Development. I go from the design stage to the markup stage and from there to development. This means I work with a client or team to finalise a concept design. Then I create all the neccessary mock ups. Once pproved, I turn the mock ups into web pages int he brower, pixel perfect. Then I start bringing the page to life by hooking up to the back end and allowing the user to interact with the page.</p>
            </div>
          </div> 
        </section>
        <section ref={section3} id="section3" className="section3">
          <div className="section__innerWrapper">
            
            {!kitandaceVisible && !indochinoVisible && !openroadVisible ?
            <>
              <h1 className="sectionHeader">Experience</h1>
              <div className='rainbowGrid'>
                <div className='rainbowGrid__square top'></div>
                <div className='rainbowGrid__square top desktop'></div>
                <div className='rainbowGrid__square top tabletLandscape'></div>
                <div className='rainbowGrid__square top openroad' onClick={() => openRoadClick()}><div className='rainbowflip'></div></div>
                <div className='rainbowGrid__square top tablet'></div>

                <div className='rainbowGrid__square tablet'></div>
                <div className='rainbowGrid__square kitAndAce' onClick={() => kitAndAceClick()}><div className='rainbowflip'></div></div>
                <div className='rainbowGrid__square tabletLandscape'></div>
                <div className='rainbowGrid__square desktop'></div>
                <div className='rainbowGrid__square'></div>

                <div className='rainbowGrid__square'></div>
                <div className='rainbowGrid__square tabletLandscape'></div>
                <div className='rainbowGrid__square indochino' onClick={() => indochinoClick()}><div className='rainbowflip'></div></div>
                <div className='rainbowGrid__square desktop'></div>
                <div className='rainbowGrid__square tablet'></div>
              </div>
            </>
            : 
            null
            }

            {openroadVisible &&
            <>
              <button className="closeAllExperiences" onClick={() => closeAllExperiences()}><TfiClose /></button>
              <div className="experienceCopy">
                <h2>OpenRoad Auto Group</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus at nisl at laoreet. Fusce quis felis magna. Aliquam ut ligula ut eros posuere auctor ut nec dolor. Pellentesque ac porttitor turpis. Aliquam suscipit nunc libero, sed porta tortor feugiat ac. Aliquam eu nibh ac mi lobortis tincidunt. Curabitur sagittis neque metus, ac consectetur purus eleifend eu. Fusce efficitur tortor sit amet neque sollicitudin consectetur. Etiam a nisl sed nisi scelerisque interdum.</p>

                <p>Suspendisse vehicula metus sem, non fermentum sapien venenatis convallis. Cras id congue augue. Etiam nec vehicula mauris, id interdum est. Etiam eleifend sed urna eget rhoncus. Nulla congue rhoncus dui. Sed consequat elit sed laoreet vestibulum. Nullam sed pretium felis, vitae accumsan dui. Proin imperdiet augue in maximus aliquet. Donec posuere nulla risus, at hendrerit neque varius ac. Duis non ipsum ut lorem mollis porttitor nec quis mi. Maecenas vel nulla iaculis, laoreet massa ut, dignissim purus. Integer sit amet volutpat nisi. Praesent condimentum commodo ligula at posuere. Nullam nec justo quam. Nunc ornare dolor ut ante condimentum sodales.</p>
              </div>
              <div className="experienceContent__section openroad">
                <div className="macbook">
                  <div className="macbookPageBg">
                    <div className="macbookSliderWrapper">
                      <MacbookSlider2 />
                    </div>
                  </div>
                </div>
              </div>
            </>
            }

            {kitandaceVisible &&
            <>
              <button className="closeAllExperiences" onClick={() => closeAllExperiences()}><TfiClose /></button>
              <div className="experienceCopy">
                <h2>Kit & Ace</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus at nisl at laoreet. Fusce quis felis magna. Aliquam ut ligula ut eros posuere auctor ut nec dolor. Pellentesque ac porttitor turpis. Aliquam suscipit nunc libero, sed porta tortor feugiat ac. Aliquam eu nibh ac mi lobortis tincidunt. Curabitur sagittis neque metus, ac consectetur purus eleifend eu. Fusce efficitur tortor sit amet neque sollicitudin consectetur. Etiam a nisl sed nisi scelerisque interdum.</p>

                <p>Suspendisse vehicula metus sem, non fermentum sapien venenatis convallis. Cras id congue augue. Etiam nec vehicula mauris, id interdum est. Etiam eleifend sed urna eget rhoncus. Nulla congue rhoncus dui. Sed consequat elit sed laoreet vestibulum. Nullam sed pretium felis, vitae accumsan dui. Proin imperdiet augue in maximus aliquet. Donec posuere nulla risus, at hendrerit neque varius ac. Duis non ipsum ut lorem mollis porttitor nec quis mi. Maecenas vel nulla iaculis, laoreet massa ut, dignissim purus. Integer sit amet volutpat nisi. Praesent condimentum commodo ligula at posuere. Nullam nec justo quam. Nunc ornare dolor ut ante condimentum sodales.</p>

                <p className='italic'>* Disclaimer - I did not design the slides in the macbook. Those were done back in the day by my super talented co-workers who have gone on to found <a href="https://weareverypolite.com" target="_blank" rel="noreferrer">weareverypolite.com</a>. Check them out. They play a mean pinball.</p>
              </div>
              <div className="experienceContent__section kitAndAce">
                <div className="macbook">
                  <div className="macbookPageBg">
                    <div className="macbookSliderWrapper">
                      <MacbookSlider1 />
                    </div>
                  </div>
                </div>
              </div>
            </>
            }

            {indochinoVisible &&
            <>
              <button className="closeAllExperiences" onClick={() => closeAllExperiences()}><TfiClose /></button>
              <div className="experienceCopy">
                <h2>Indochino</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus at nisl at laoreet. Fusce quis felis magna. Aliquam ut ligula ut eros posuere auctor ut nec dolor. Pellentesque ac porttitor turpis. Aliquam suscipit nunc libero, sed porta tortor feugiat ac. Aliquam eu nibh ac mi lobortis tincidunt. Curabitur sagittis neque metus, ac consectetur purus eleifend eu. Fusce efficitur tortor sit amet neque sollicitudin consectetur. Etiam a nisl sed nisi scelerisque interdum.</p>

                <p>Suspendisse vehicula metus sem, non fermentum sapien venenatis convallis. Cras id congue augue. Etiam nec vehicula mauris, id interdum est. Etiam eleifend sed urna eget rhoncus. Nulla congue rhoncus dui. Sed consequat elit sed laoreet vestibulum. Nullam sed pretium felis, vitae accumsan dui. Proin imperdiet augue in maximus aliquet. Donec posuere nulla risus, at hendrerit neque varius ac. Duis non ipsum ut lorem mollis porttitor nec quis mi. Maecenas vel nulla iaculis, laoreet massa ut, dignissim purus. Integer sit amet volutpat nisi. Praesent condimentum commodo ligula at posuere. Nullam nec justo quam. Nunc ornare dolor ut ante condimentum sodales.</p>
              </div>
              <div className="experienceContent__section indochino">
                <div className="macbook">
                  <div className="macbookPageBg">
                    <img src={IndochinoSlide} className="sliding" alt="Indochino Gallery" />
                  </div>
                </div>
              </div>
            </>
            }
            
          </div>
          
        </section>

        <section ref={section4} id="section4" className="section4">
          <div className="section__innerWrapper">
            <div className="section__content">
              <img className='jayFace' src={JayFace} alt='My face' />
              <div className="section__content__copy">
                <h1 className="sectionHeader">A little about myself</h1>
                <p>I've been working in Web Design/Development for 12 years. I started out after graduating from the Digital Design course at NAIT. Initially I worked as a designer. Over the years I've gotten more involed with development as I've progressed. I am still very much focused on the front-end of things, with my passion still lying in aesthetics and UX. I love taking a design and making it pixel perfect in the browser.</p>
                <p>I currently live in Nelson, BC and couldn't imagine a better place to call home. On the side I love to make music and am very active in the outdoors.</p>
                <button onClick={() => scrollDown(section5)}>Let's connect!</button>
              </div>
            </div>
          </div>
        </section>
        <section ref={section5} id="section5" className="section5">
          <div className="section__innerWrapper">
            <div className="section__content">
              <h1 className="sectionHeader">Contact Me</h1>
              <p>I am currently accepting contract work. Please shoot me an email</p>
              <ContactForm />
            </div>
          </div>
        </section>
        <ScrollToTop smooth top={500} />
        <footer><p>Web Designer/Developer located in Nelson, BC
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2015 -2000 4030 4030">
              <title>maple leaf from the flag of Canada</title>
              <path fill="#f00" d="m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z"></path>
            </svg>
          </span>
          </p>
        </footer>
      </BrowserView>
    </div>
  );
}

export default App;
