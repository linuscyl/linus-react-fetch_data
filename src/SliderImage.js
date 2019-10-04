import React, { Component } from 'react'
import { Slide, Fade, Zoom } from 'react-slideshow-image';

class SliderImage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      slideImages: [
        './images/aaaatest.jpg',
        './images/bbbbtest.jpg',
        './images/cccctest.png'
      ],
      fadeImages: [
        './images/aaaatest.jpg',
        './images/bbbbtest.jpg',
        './images/cccctest.png'
      ]
    };
  }


  render() {

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      onChange: (oldIndex, newIndex) => {
        console.log(
          `Slide transition finished from ${oldIndex} to ${newIndex}`
        );
      }
    };

    const fadeProperties = {
      duration: 1500,
      transitionDuration: 500,
      indicators: true,
      infinite: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`Fade transition finished from ${oldIndex} to ${newIndex}`);
      }
    };

    const { slideImages, zoomOutImages, fadeImages } = this.state;

    return (

      <div className="slide-container">
        <Slide {...properties}>
          {slideImages.map((each, index) => (
            <div key={index} className="each-slide">
              <div style={{ backgroundImage: `url(${each})` }}>
                {/* <span>Slide {index + 1}</span> */}
              </div>
            </div>
          ))}
        </Slide>
        <h1>This is fade</h1>
        <div className="slide-container">
          <Fade {...fadeProperties}>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[0]} alt="" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[1]} alt="" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[2]} alt="" />
              </div>
            </div>
          </Fade>
        </div>
      </div >
    )
  }
}

export default SliderImage
