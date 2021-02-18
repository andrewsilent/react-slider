import React, { Component } from "react";
import SlideDescription from "../SlideDescription";
import styles from "./Slide.module.css";

class Slide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentSlide, src, description } = this.props;
    return (
      <>
        <img
          src={src}
          alt={`awesome image #${currentSlide}`}
          className={styles.slideImage}
        />
        <SlideDescription
          currentSlide={currentSlide}
          description={description}
        />
      </>
    );
  }
}

export default Slide;
