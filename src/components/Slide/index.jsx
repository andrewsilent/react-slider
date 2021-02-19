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
        <div className={styles.slideImageWrapper}>
          <div className={styles.slideImageInner}>
            <img src={src} alt={`awesome image #${currentSlide}`} className={styles.slideImage}/>
          </div>
        </div>
        <SlideDescription
          currentSlide={currentSlide}
          description={description}
        />
      </>
    );
  }
}

Slide.defaultProps = {
  currentSlide: 0,
};

Slide.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  currentSlide: PropTypes.number.isRequired,
};

export default Slide;
