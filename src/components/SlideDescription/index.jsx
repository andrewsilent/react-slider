import React, { Component } from "react";
import styles from "./SlideDescription.module.scss";
import PropTypes from "prop-types";

class SlideDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description } = this.props;
    return (
      <div className={styles.description}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{description}</p>
      </div>
    );
  }
}

SlideDescription.defaultProps = {
  title: "Title",
  description: "Description",
};

SlideDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SlideDescription;
