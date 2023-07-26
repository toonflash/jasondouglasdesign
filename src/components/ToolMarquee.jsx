import React from "react";

import appleIcon from "../assets/images/skillIIcons/apple.svg";
import microsoftIcon from "../assets/images/skillIIcons/microsoft.svg";
import photoshopIcon from "../assets/images/skillIIcons/Adobe_Photoshop_CC_icon.svg";
import illustratorIcon from "../assets/images/skillIIcons/Adobe_Illustrator_CC_icon.svg";
import zeplinIcon from "../assets/images/skillIIcons/7b336dc26fd85ae98b414761d58238d225876a88-60x48.svg";
import htmlIcon from "../assets/images/skillIIcons/HTML5_logo_and_wordmark.svg";
import cssIcon from "../assets/images/skillIIcons/css3.svg";
import jsIcon from "../assets/images/skillIIcons/javascript.svg";
import jqueryIcon from "../assets/images/skillIIcons/jquery.svg";
import sassIcon from "../assets/images/skillIIcons/Sass_Logo_Color.svg";
import visualStudioIcon from "../assets/images/skillIIcons/Visual_Studio_Code_1.35_icon.svg";
import reactIcon from "../assets/images/skillIIcons/React-icon.svg";
import wordpressIcon from "../assets/images/skillIIcons/Wordpress-Logo.svg";
import npmIcon from "../assets/images/skillIIcons/npm.svg";
import squarespaceIcon from "../assets/images/skillIIcons/squarespace.svg";
import bitIcon from "../assets/images/skillIIcons/bit.svg";
import gitIcon from "../assets/images/skillIIcons/git.svg";
import jiraIcon from "../assets/images/skillIIcons/atlassian.svg";


export default function ToolMarquee() {

  return (
    <div className="marqueeWrapper">
      <div className="marqueeWrapper__marquee">
        <p><img src={appleIcon} className="appleIcon" alt="appleIcon"/></p>
        <p><img src={microsoftIcon} className="microsoftIcon" alt="microsoftIcon"/></p>
        <p><img src={photoshopIcon} className="photoshopIcon" alt="photoshop"/></p>
        <p><img src={illustratorIcon} className="illustratorIcon" alt="illustrator"/></p>
        <p><img src={zeplinIcon} className="zeplinIcon" alt="zeplin"/></p>
        <p><img src={htmlIcon} className="htmlIcon" alt="html"/></p>
        <p><img src={cssIcon} className="cssIcon" alt="css"/></p>
        <p><img src={jsIcon} className="jsIcon" alt="javascript"/></p>
        <p><img src={reactIcon} className="reactIcon" alt="react"/></p>
        <p><img src={sassIcon} className="sassIcon" alt="sass"/></p>
        {/* <p><img src={jqueryIcon} className="jqueryIcon" alt="jquery"/></p> */}
        <p><img src={wordpressIcon} className="wordpressIcon" alt="wordpress" /></p>
        <p><img src={squarespaceIcon} className="squarespaceIcon" alt="squarespace" /></p>
        <p><img src={visualStudioIcon} className="visualStudioIcon" alt="visual Studio"/></p>
        <p><img src={npmIcon} className="npmIcon" alt="npm"/></p>
        <p><img src={gitIcon} className="gitIcon" alt="git" /></p>
        <p><img src={bitIcon} className="bitIcon" alt="bit" /></p>
        <p><img src={jiraIcon} className="jiraIcon" alt="atlassian" /></p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  )

}