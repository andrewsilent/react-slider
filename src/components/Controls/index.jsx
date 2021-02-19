import React, { Component } from "react";
import styles from "./Controls.module.css";
import PropTypes from "prop-types";

class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      nextSlide,
      prevSlide,
      fullscreen,
      play,
      autoPlay,
      changeSpeed,
    } = this.props;
    return (
      <div className={styles.controlsWrapper}>
        <div className={styles.controlsInner}>
          <button className={styles.control} onClick={prevSlide}></button>
          <button className={styles.control} onClick={nextSlide}></button>
          <button className={styles.fullscreen} onClick={fullscreen}></button>
          <button className={styles.play} onClick={play}>{autoPlay ? "Stop" : "Play"}</button>
          {autoPlay
            ? [
                <button key="speedDown" className={styles.speed} onClick={() => {changeSpeed(+250)}}></button>,
                <button key="speedUp" className={styles.speed} onClick={() => {changeSpeed(-250)}}></button>,
              ]
            : null}
        </div>
      </div>
    );
  }
}

Controls.defaultProps = {
  autoPlay: false,
};

Controls.propTypes = {
  autoPlay: PropTypes.bool,
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
  fullscreen: PropTypes.func,
  play: PropTypes.func,
  changeSpeed: PropTypes.func,
};

export default Controls;
