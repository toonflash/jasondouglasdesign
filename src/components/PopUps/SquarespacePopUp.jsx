import React from 'react';
import {TfiClose} from 'react-icons/tfi';

const SquarespacePopUp = ({ closeSquarespacePopup}) => {
  return (
  <div className="cmsPopUp">
    <button className="closeButton" onClick={() => closeSquarespacePopup(false)}><TfiClose /></button>
    <div className="cmsPopUp__wrapper">
      <h1>Squarespace Popup</h1>
      <p>Donec vel velit dictum quam fringilla convallis a sit amet nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed aliquam varius dictum. Pellentesque id posuere enim. Nullam dignissim ipsum risus, sed vestibulum orci cursus ac. Integer posuere laoreet sollicitudin. Vivamus elit massa, semper id odio consectetur, vulputate elementum tortor. Aliquam vitae venenatis ipsum. Proin hendrerit augue id dui pretium, et efficitur ante convallis. Nunc ornare sem vitae orci auctor hendrerit.</p>
      <p>Donec vel velit dictum quam fringilla convallis a sit amet nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed aliquam varius dictum. Pellentesque id posuere enim. Nullam dignissim ipsum risus, sed vestibulum orci cursus ac. Integer posuere laoreet sollicitudin. Vivamus elit massa, semper id odio consectetur, vulputate elementum tortor. Aliquam vitae venenatis ipsum. Proin hendrerit augue id dui pretium, et efficitur ante convallis. Nunc ornare sem vitae orci auctor hendrerit.</p>
      <p>Donec vel velit dictum quam fringilla convallis a sit amet nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed aliquam varius dictum. Pellentesque id posuere enim. Nullam dignissim ipsum risus, sed vestibulum orci cursus ac. Integer posuere laoreet sollicitudin. Vivamus elit massa, semper id odio consectetur, vulputate elementum tortor. Aliquam vitae venenatis ipsum. Proin hendrerit augue id dui pretium, et efficitur ante convallis. Nunc ornare sem vitae orci auctor hendrerit.</p>
    </div>
  </div>
  )
}
export default SquarespacePopUp;






















