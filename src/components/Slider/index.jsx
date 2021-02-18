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
        {
          "Some title #0":
            "Some description #0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est labore optio quos provident ex veritatis facilis sapiente dicta assumenda.",
        },
        {
          "Some title #1":
            "Some description #1 Quibusdam nobis veniam ex labore! Incidunt facilis blanditiis dolor distinctio. Odio quasi inventore culpa fugit accusamus vitae provident voluptas molestias.",
        },
        {
          "Some title #2":
            "Some description #2 Reiciendis, quae deserunt eaque qui quasi explicabo recusandae nihil labore hic repudiandae sit quaerat quam officia! Nihil veritatis ipsum aliquid.",
        },
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
    return (
      <main className={styles.container}>
        <section className={styles.slider}>
          <div className={styles.controls}>
            <div className={styles.controlsInner}>
              <button
                className={styles.control}
                onClick={this.prevSlide}
              ></button>
              <button
                className={styles.control}
                onClick={this.nextSlide}
              ></button>
            </div>
          </div>
          <div className={styles.slides}>
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
          </div>
        </section>
      </main>
    );
  }
}

export default Slider;
