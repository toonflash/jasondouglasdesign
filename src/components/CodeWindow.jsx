// HtmlCode.js
import React from 'react';


const CodeWindow = () => {
  return (
  <div className='codeWindow'>
    <div className='codeWindow__header'>
      <div className='browserDots'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <pre>
      <code className="language-html" data-lang="html">
        <span className="codeP italic">return &#40;</span>
        <br/>
        &nbsp;<span className="codeB">&#60;header&#62;</span>
        <div className="desktop">
          <br/>
          &nbsp;&nbsp;<span className="codeB">&lt;div </span><span className="codeLB italic">ref</span><span>=</span><span className="codeB">&#123;</span><span className="codeMB">node</span><span className="codeB">&#125;</span>&nbsp;
          <span className="codeLB italic">className</span><span>=</span><span className="codeO">&#34;navigation&#34;</span><span className="codeB">&#62;</span>
          <br/>
          &nbsp;&nbsp;&nbsp;<span className="codeG">&lt;Burger </span><span className="codeLB italic">open</span><span>=</span><span className="codeB">&#123;</span><span className="codeMB">open</span><span className="codeB">&#125;</span>&nbsp;<span className="codeLB italic">setOpen</span><span>=</span><span className="codeB">&#123;</span><span className="codeY">setOpen</span><span className="codeB">&#125;</span><span className="codeG">/&#62;</span>
          <br/>
          &nbsp;&nbsp;&nbsp;<span className="codeG">&lt;Menu/&#62;</span>
          <br/>
          &nbsp;&nbsp;<span className="codeB">&lt;/div&#62;</span>
        </div>
        <br/>
        &nbsp;&nbsp;<span className="codeB">&lt;h1 </span><span className="codeLB italic">className</span><span>=</span><span className="codeO">&#34;siteTitle&#34;</span><span className="codeB">&#62;</span>
        {/* &nbsp;<span className="codeLB italic">onClick</span><span>=</span><span className="codeB">&#123;</span><span className="codeBY">&#40;</span><span className="codeBY">&#41; </span><span className="codeB">=&#62; </span><span className="codeBY">&#123;</span><span className="codeY">goToTop</span><span className="codeP">&#40;</span><span className="codeP">&#41;</span><span className="codeBY">&#125;</span><span className="codeB">&#125;</span><span className="codeP">&#41;</span> */}
        Jason Douglas Design<span className="codeB">&#60;h1/&#62;</span>
        <br/>
        &nbsp;<span className="codeB">&#60;/header&#62;</span>
        <br/>
        <span className="codeP">&#41;</span>&#59;
      </code>
    </pre>
  </div>
  )
}
export default CodeWindow;






















