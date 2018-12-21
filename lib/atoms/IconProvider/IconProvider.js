import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

class IconProvider extends Component {
  render() {
    const { iconName } = this.props;
    return <FontAwesomeIcon icon={iconName} />;
  }
}

export default IconProvider;