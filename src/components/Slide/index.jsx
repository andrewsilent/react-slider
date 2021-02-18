import React, { Component } from "react";
import SlideDescription from "../SlideDescription";
import styles from "./Slide.module.css";
import PropTypes from "prop-types";
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

Slide.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  currentSlide: PropTypes.number.isRequired,
};

export default Slide;
