import React from 'react';
import './App.css';

import FetchRandomUser from './FetchRandomUser';

import { FacebookShareButton } from 'react-share';
import { FacebookIcon } from 'react-share';
import { FacebookShareCount } from 'react-share';
import SliderImage from './SliderImage';


function App() {
  return (
    <div className="App">
      <h1>hello World</h1>
      <FetchRandomUser />
      <div align="center" style={{ margin: 20 }}>
        <FacebookShareButton url="http://www.cccmmwc.edu.hk/index/index18.aspx?nnnid=1" quote="hello this is quote" hashtag="#coke"><FacebookIcon size={32} round={true} /></FacebookShareButton>
        <FacebookShareCount url="http://www.cccmmwc.edu.hk/index/index18.aspx?nnnid=1" />
      </div>
      <hr />
      <FacebookShareCount url="http://www.cccmmwc.edu.hk/index/index18.aspx?nnnid=1">
        {shareCount => (
          <span className="myShareCountWrapper">{shareCount}</span>
        )}
      </FacebookShareCount>
      <hr />
      <button onClick={() => window.location.reload(false)}>Click to reload!</button>
      <hr />
      <SliderImage />
    </div >
  );
}

export default App;
