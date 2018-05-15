import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "./Title";
import Circles from "./d3";
import About from "./About";
import Manual from "./Manual";

class MainDisplay extends Component {
  render() {
    return this.props.toggle.about ? (
      <About />
    ) : this.props.toggle.manual ? (
      <Manual />
    ) : (
      <div className="main-display">
        <Title />
        <hr />
        <Circles />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toggle: state.disToggle.toggle
});

export default connect(mapStateToProps)(MainDisplay);