import React, { Component } from "react";
import SlideDescription from "../SlideDescription";

class Slide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentSlide, src, description, className } = this.props;
    return (
      <>
        <img src={src} alt={`awesome image #{currentSlide}`} className={className} />
        <SlideDescription
          currentSlide={currentSlide}
          description={description}
        />
      </>
    );
  }
}

export default Slide;
