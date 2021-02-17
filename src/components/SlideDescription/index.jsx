import React, { Component } from "react";

class SlideDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { description } = this.props;
    const [[title, text]] = Object.entries(description);
    return (
      <>
        <h1>{title}</h1>
        <p>{text}</p>
      </>
    );
  }
}

export default SlideDescription;
