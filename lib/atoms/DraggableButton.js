import React, { Component } from "react";
import PropTypes from 'prop-types';
import Dragabble from "react-draggable";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default class DragabbleButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const { 
      iconName,
      axis, 
      defaultPosition, 
      style, 
      onStart, 
      onDrag, 
      onStop } = this.props;
  
    return (
      <Dragabble 
        axis = { axis ? axis : "both" } 
        bounds = 'html'
        handle = ".dnd" 
        defaultPosition = { defaultPosition ? defaultPosition : { x: 0, y: 0 }}
        onStart = { onStart ? onStart : () => {} }
        onDrag = { onDrag ? onDrag : () => {} } 
        onStop = { onStop ? onStop : () => {} } 
        >
        <button className="dnd" style = { style ? style : null }>
          <FontAwesomeIcon icon={iconName} />
        </button>
      </Dragabble>
    );
  }

}

DragabbleButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  axis: PropTypes.string,
  defaultPosition: PropTypes.object,
  style: PropTypes.object,
  onStart: PropTypes.func,
  onDrag: PropTypes.func,
  onStop: PropTypes.func
}

