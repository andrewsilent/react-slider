import React, { Component } from "react";
import Slide from "../Slide";
import Controls from "../Controls";
import styles from "./Slider.module.scss";
import "../../common/styles/styles.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          src: "https://wallpaperaccess.com/full/1219598.jpg",
          title: "Some awesome title #1",
          description:
            "Some description #1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est labore optio quos provident ex veritatis facilis sapiente dicta assumenda.",
        },
        {
          src: "https://wallpapercave.com/wp/jo9mmpH.jpg",
          title: "Some awesome title #2",
          description:
            "Some description #2 Quibusdam nobis veniam ex labore! Incidunt facilis blanditiis dolor distinctio. Odio quasi inventore culpa fugit accusamus vitae provident voluptas molestias.",
        },
        {
          src:
            "https://i.pinimg.com/originals/d8/25/b9/d825b96f6f6df5366e227f71679d04c7.jpg",
          title: "Some awesome title #3",
          description:
            "Some description #3 Reiciendis, quae deserunt eaque qui quasi explicabo recusandae nihil labore hic repudiandae sit quaerat quam officia! Nihil veritatis ipsum aliquid.",
        },
      ],
      currentSlide: 0,
      autoPlay: false,
      timerId: 0,
      delay: 1000,
    };
  }

  nextSlide = () => {
    this.setState({
      currentSlide: (this.state.currentSlide + 1) % this.state.data.length,
    });
  };

  prevSlide = () => {
    this.setState({
      currentSlide:
        (this.state.currentSlide - 1 + this.state.data.length) %
        this.state.data.length,
    });
  };

  fullscreen = () => {
    const slider = document.getElementById("slider");
    document.fullscreenElement
      ? document.exitFullscreen()
      : slider.requestFullscreen();
  };

  play = () => {
    if (this.state.autoPlay) {
      clearInterval(this.state.timerId);
      this.setState({ autoPlay: !this.state.autoPlay });
    } else {
      const newTimerId = setInterval(() => {
        this.nextSlide();
      }, this.state.delay);
      this.setState({
        autoPlay: !this.state.autoPlay,
        timerId: newTimerId,
      });
    }
  };

  changeSpeed = (speed) => {
    clearInterval(this.state.timerId);
    const newTimerId = setInterval(() => {
      this.nextSlide();
    }, this.state.delay + speed);
    this.setState({
      delay: this.state.delay + speed,
      timerId: newTimerId,
    });
  };

  render() {
    const { currentSlide, data } = this.state;
    return (
      <section className={styles.container}>
        <div id="slider" className={styles.slider}>
          <Controls
            nextSlide={this.nextSlide}
            prevSlide={this.prevSlide}
            fullscreen={this.fullscreen}
            autoPlay={this.state.autoPlay}
            play={this.play}
            changeSpeed={this.changeSpeed}
          />
          <div className={styles.slidesWrapper}>
            {data.map((e, i) => {
              return (
                <article
                key={`article-${i}`}
                  className={
                    currentSlide === i
                      ? `${styles.current} ${styles.slide}`
                      : `${styles.slide}`
                  }
                >
                  <Slide
                    key={`slide-${i}`}
                    src={data[i].src}
                    title={data[i].title}
                    description={data[i].description}
                    currentSlide={currentSlide}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
