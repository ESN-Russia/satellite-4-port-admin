/* global VK */
import React, { Component } from "react";

class EsnVKWidget extends Component {
  componentDidMount() {
    VK.Widgets.Group(
      "vk_groups",
      {
        mode: 4,
        wide: 1,
        height: "500px",
        width: "auto",
      },
      85934227,
    );
  }

  render() {
    return <div id="vk_groups" />;
  }
}

export default EsnVKWidget;
