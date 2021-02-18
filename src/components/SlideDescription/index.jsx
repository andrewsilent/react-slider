import React, { Component } from "react";
import PropTypes from "prop-types";

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

SlideDescription.propTypes = {
  description: PropTypes.object.isRequired,
};

export default SlideDescription;
