import React, { Component } from "react";
import styles from "./SlideDescription.module.scss";
import PropTypes from "prop-types";

class SlideDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { description } = this.props;
    const [[title, text]] = Object.entries(description);
    return (
      <div className={styles.description}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    );
  }
}

SlideDescription.defaultProps = {
  description: "Description",
};

SlideDescription.propTypes = {
  description: PropTypes.object.isRequired,
};

export default SlideDescription;
