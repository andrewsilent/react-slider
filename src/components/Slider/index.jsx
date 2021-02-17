import React, { Component } from "react";
import Slide from "../Slide";

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

  render() {
    const { currentSlide, slides, descriptions } = this.state;
    return (
      <section>
        {slides.map((e, i) => {
          return (
            <Slide
              key={e}
              src={slides[i]}
              description={descriptions[i]}
              className={currentSlide === i ? "current slide" : "slide"}
            />
          );
        })}
      </section>
    );
  }
}

export default Slider;
