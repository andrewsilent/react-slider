import React, { Component } from "react";
import styles from "./Controls.module.css";

class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { nextSlide, prevSlide, fullscreen, play, autoPlay } = this.props;
    return (
      <div className={styles.controls}>
        <div className={styles.controlsInner}>
          <button className={styles.control} onClick={prevSlide}></button>
          <button className={styles.control} onClick={nextSlide}></button>
          <button className={styles.fullscreen} onClick={fullscreen}>
            Fullscreen
          </button>
          <button className={styles.play} onClick={play}>
            {autoPlay ? "Stop" : "Play"}
          </button>
        </div>
      </div>
    );
  }
}

export default Controls;
