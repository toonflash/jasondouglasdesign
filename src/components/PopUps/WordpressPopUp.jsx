import React from 'react';
import {TfiClose} from 'react-icons/tfi';
import wordpressBg from '../../assets/images/homeSlider/wordpressSliderBg.jpg'

const WordpressPopUp = ({ closeWordpressPopup}) => {
  return (
  <div className="cmsPopUp wordpress">
    <div className="cmsPopUp__wrapper">
      <button className="closeButton" onClick={() => closeWordpressPopup(false)}><TfiClose /></button>
      <h1>Wordpress</h1>
      <p>The OG blog platform. Wordpress is a great Content Management System for people who know nothing about development as well as for people who do. You can pick from hundreds of themes that will let you hit the ground running, or  you can build something completely custom and unique.</p>
      <p>Aside from blogs, Wordpress sites are used for online stores, social networks, video/art portfolios, forums and more.</p>
      <p>If you think a Wordpress site is what you're looking for, let me know. I'd be happy to help you out.</p>
      <a href="#" className="cta">Contact Me</a>
    </div>
    {/* <img src={wordpressBg} className="wordpressBg" /> */}
  </div>
  )
}
export default WordpressPopUp;






















