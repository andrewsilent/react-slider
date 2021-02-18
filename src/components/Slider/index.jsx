import React, { Component } from "react";
import Slide from "../Slide";
import styles from "./Slider.module.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        "https://wallpaperaccess.com/full/1219598.jpg",
        "https://wallpapercave.com/wp/jo9mmpH.jpg",
        "https://i.pinimg.com/originals/d8/25/b9/d825b96f6f6df5366e227f71679d04c7.jpg",
      ],
      descriptions: [
        { "Some title #0": "Some description #0" },
        { "Some title #1": "Some description #1" },
        { "Some title #2": "Some description #2" },
      ],
      currentSlide: 0,
    };
  }

  nextSlide = () => {
    this.setState({
      currentSlide: (this.state.currentSlide + 1) % this.state.slides.length,
    });
  };

  prevSlide = () => {
    this.setState({
      currentSlide:
        (this.state.currentSlide - 1 + this.state.slides.length) %
        this.state.slides.length,
    });
  };

  render() {
    const { currentSlide, slides, descriptions } = this.state;
    console.log(styles.current);
    return (
      <main className={styles.container}>
        <section className={styles.slider}>
          <button className={styles.control} onClick={this.prevSlide}>
            prev
          </button>
          <button className={styles.control} onClick={this.nextSlide}>
            next
          </button>
          {slides.map((e, i) => {
            return (
              <div
                key={e}
                className={
                  currentSlide === i
                    ? `${styles.current} ${styles.slide}`
                    : `${styles.slide}`
                }
              >
                <Slide
                  src={slides[i]}
                  currentSlide={currentSlide}
                  description={descriptions[i]}
                />
              </div>
            );
          })}
        </section>
      </main>
    );
  }
}

export default Slider;
